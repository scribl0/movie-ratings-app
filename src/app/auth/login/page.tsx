import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-6'>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <Button>Login</Button>
                </form>
            </CardContent>
            <CardFooter>
                <p>Don't have an account? <Link href={'/auth/signup'} className="text-blue-500 hover:underline">Create One</Link></p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default LoginPage