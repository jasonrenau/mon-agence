"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

export const LoggedInButton = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => signOut(),
  });
  return (
    <div>
      <Button
        size="sm"
        variant={"default"}
        className="mr-4"
        onClick={() => router.push("/")}
      >
        Retour
      </Button>
      <Button
        variant="outline"
        disabled={mutation.isPending}
        onClick={() => mutation.mutate()}
      >
        Se déconnecter
      </Button>
    </div>
  );
};
