"use client";

import Image from "next/image";
import { useAuth } from "@/auth/AuthUserProvider";
import { signIn, signOut } from "@/auth/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="flex flex-row w-full justify-center p-4">
      {user ? (
        <div className="flex flex-col items-center">
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Button className="w-fit" onClick={() => signIn()}>
            <div className="flex flex-row p-1 space-x-2">
              <Image src="/google.webp" alt="Google" width={20} height={20} />
              <p>Sign in with Google</p>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
