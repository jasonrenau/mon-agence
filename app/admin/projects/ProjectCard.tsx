import Link from "next/link";
import { ProjectsCard } from "./project.query";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";

export type ProjectCardProps = {
  project: ProjectsCard;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/admin/projects/${project.id}`}>
      <Card className="hover:bg-accent">
        <CardHeader className="flex flex-row gap-3 space-y-0">
          <Avatar className="h-14 w-14 rounded">
            <AvatarFallback>
              {project.name.charAt(0) +
                project.name.charAt(project.name.length - 1)}
            </AvatarFallback>
            {project.image ? <AvatarImage src={project.image} /> : null}
          </Avatar>
          <div className="flex flex-col gap-3">
            <CardTitle>{project.name}</CardTitle>
            <div className="flex flex-row gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{project.name[0]}</AvatarFallback>
                {project.user.image ? (
                  <AvatarImage src={project.user.image} />
                ) : null}
              </Avatar>
              <Typography variant="large" className=" text-muted-foreground">
                {project.user.name}
              </Typography>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
