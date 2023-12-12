"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Menu } from "lucide-react";
import { LoggedInButton } from "@/features/auth/LoggedInButton";

export type AdminPanelProps = {
  user: Session["user"];
};

export const AdminPanel = ({ user }: AdminPanelProps) => {
  return (
    <Sheet>
      <SheetTrigger className="w-fit" asChild>
        <Button variant="default" className="m-4">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex w-full flex-col items-center justify-between sm:w-[540px]"
      >
        <SheetHeader>
          <SheetTitle>Bonjour {user.name}</SheetTitle>
        </SheetHeader>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex flex-col gap-2">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Avatar>
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
          {user.image ? (
            <AvatarImage src={user.image} alt={user.name ?? "user picture"} />
          ) : null}
        </Avatar>
        <SheetFooter>
          <LoggedInButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
