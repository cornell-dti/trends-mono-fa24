"use client";

import Image from "next/image";
import { useAuth } from "@/auth/AuthUserProvider";
import { signIn, signOut } from "@/auth/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Logged in as {user.email}</h1>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div>
          <h1>Not logged in</h1>
          <Button onClick={() => signIn()}>Sign in</Button>
        </div>
      )}
    </div>
  );
}
