import { getProject } from "./project.query";

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const project = await getProject({
    projectId: params.projectId,
  });

  console.log(project);

  return <div>ProjectPage</div>;
}
