import { AuthCard } from "@/features/auth/AuthCard";
import { AdminPanel } from "./AdminPanel";
import { getAuthSession, getRequiredAuthAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getProjects } from "./projects/project.query";
import { ProjectCard } from "./projects/ProjectCard";

export default async function AdminPage() {
  const user = await getRequiredAuthAdmin();

  if (!user) {
    return <AuthCard />;
  }

  const { projects } = await getProjects({
    userId: user.id,
  });

  return (
    <>
      <AdminPanel user={user} />
      <main>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </main>
    </>
  );
}
