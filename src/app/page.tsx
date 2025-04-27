import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <User className="w-32 h-32 text-white" />
      <h1 className="font-bold text-2xl">Login Required</h1>
      <Button className="mt-2"><Link href={'/auth/login'}>Login</Link></Button>
    </div>
  );
}
