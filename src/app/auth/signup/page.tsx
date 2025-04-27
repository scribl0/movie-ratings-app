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

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-6'>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input 
                                id="username"
                                type="username"
                                placeholder="Username"
                                required
                            />
                        </div>
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
                    <p>Already have an account? <Link href={'/auth/login'} className="text-blue-500 hover:underline">Login</Link></p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUpPage