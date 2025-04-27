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
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            await signUp.email({
                email,
                password,
                name: username,
                callbackURL: '/dashboard'
        }, {
                onSuccess: () => {
                    router.push('/dashboard');
                },
                onError: (ctx) => {
                    setError(ctx.error?.message || 'Failed to create account');
                }
            });
        } catch {
            setError('Failed to create account');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                        {error && (
                            <div className="p-3 text-sm bg-destructive/10 border border-destructive text-destructive rounded-md">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input 
                                id="username"
                                type="username"
                                placeholder="Username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
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
                        {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
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