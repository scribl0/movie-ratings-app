'use client';

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
import { useState } from "react";
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            await signIn.email({
                email,
                password,
                callbackURL: '/dashboard'
        }, {
                onSuccess: () => {
                    router.push('/dashboard');
                },
                onError: (ctx) => {
                    setError(ctx.error?.message || 'Invalid credentials');
                }
            });
        } catch {
            setError('Invalid credentials');
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="flex items-center justify-center w-full h-screen">
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    {error && (
                        <div className="p-3 text-sm bg-destructive/10 border border-destructive text-destructive rounded-md">
                            {error}
                        </div>
                    )}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <Button
                        disabled={isLoading}
                        type="submit"
                        >
                        {isLoading ? "Logging In..." : "Login"}
                    </Button>
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