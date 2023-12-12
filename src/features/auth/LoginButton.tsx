"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => signIn(),
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
        size="sm"
        onClick={() => {
          mutation.mutate();
        }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <Loader className="mr-2" size={12} />
        ) : (
          <LogIn className="mr-2" size={12} />
        )}
        Login
      </Button>
    </div>
  );
};
