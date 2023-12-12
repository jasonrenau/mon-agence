import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { compareAsc } from "date-fns";

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
  | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getServerSession(...parameters, authOptions);
  return session;
};

export const getRequiredAuthAdmin = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getAuthSession(...parameters);

  if (session) {
    if (session.user.role !== "ADMIN") {
      throw new Error("Unauthorized");
    }
  }
  return session?.user;
};
