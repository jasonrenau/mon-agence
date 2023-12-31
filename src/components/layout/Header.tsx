import { SiteConfig } from "@/lib/site-config";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          {/* <Image
            src="/images/logo.svg"
            width={"50"}
            height={"35"}
            alt="app logo"
          /> */}
          <div className="flex items-baseline gap-2">
            <Typography variant="h3" as={Link} href="/">
              {SiteConfig.title}
            </Typography>
            <div className="flex items-baseline gap-2">
              <Typography
                as={Link}
                variant={"link"}
                className="text-muted-foreground hover:text-foreground"
                href={"/explorer"}
              >
                Explorer
              </Typography>
              <Typography
                as={Link}
                variant={"link"}
                className="text-muted-foreground hover:text-foreground"
                href={"/courses"}
              >
                Courses
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
