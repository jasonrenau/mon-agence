import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getProject = async ({
  projectId,
}: {
  projectId: string | undefined;
}) => {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
      image: true,
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return { project };
};

export type ProjectsCard = Prisma.PromiseReturnType<
  typeof getProject
>["project"];
