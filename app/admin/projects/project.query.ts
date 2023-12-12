import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getProjects = async ({
  userId,
}: {
  userId: string | undefined;
}) => {
  const projects = await prisma.project.findMany({
    where: {
      userId,
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
    orderBy: {
      createdAt: "desc",
    },
  });
  return { projects };
};

export type ProjectsCard = Prisma.PromiseReturnType<
  typeof getProjects
>["projects"][number];
