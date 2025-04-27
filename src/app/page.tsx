'use client'

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'



export default function Home() {
  const { data: session, isPending } = useSession()
  const router  = useRouter();

  useEffect(() => {
    if(!isPending && session) {
      router.push('/dashboard')
    }
  }, [session, isPending])

  if (isPending) {
    return <div className="flex items-center justify-center w-full h-screen">
      <Ring2
        size="40"
        stroke="5"
        strokeLength="0.25"
        bgOpacity="0.1"
        speed="0.8"
        color="white" 
      />
    </div>
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <User className="w-32 h-32 text-white" />
      <h1 className="font-bold text-2xl">Login Required</h1>
      <Button className="mt-2"><Link href={'/auth/login'}>Login</Link></Button>
    </div>
  );
}
