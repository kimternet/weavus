import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("login...", formData)
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log("forgot password email", forgotPasswordEmail)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4 relative">
            <div className="w-full max-w-md">

                <div className="text-center mb-8">

                    <div className="flex items-center justify-center space-x-2 mb-4">

                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">

                            <ShoppingCart className="w-6 h-6 text-primary-foreground" />

                        </div>
                        <span className="text-2xl font-bold text-foreground">Pos pro</span>
                    </div>

                    <h1 className="text-2xl font-bold text-foreground">
                        {showForgotPassword ? "Reset password" : "Welcome Back"}
                    </h1>

                    <p className="text-muted-foreground mt-2\">
                        {showForgotPassword ? "Enter your email to receive reset instructions" : "Sign in to your account to continue"}
                    </p>

                </div>

                {!showForgotPassword && (
                    <div className="bg-card rounded-2xl shadow-xl p-8">

                        <form className="space-y-5" onSubmit={handleLogin}>
                            <div className="space-y-3">
                                <Label>Email Address</Label>
                                <Input
                                    onChange={handleInputChange}
                                    placeholder="Enter your email.."
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                />
                            </div>

                            <div className="space-y-3">
                                <Label>Password</Label>
                                <Input
                                    onChange={handleInputChange}
                                    placeholder="Enter your password.."
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">



                                    <Checkbox name="remember-me" type={"checkbox"}
                                        className={"h-4 w-4 text-primary focus:ring-primary border-gray-300"} />
                                    <Label>Remember me</Label>
                                </div>
                                <Button
                                    onClick={() => setShowForgotPassword(true)}
                                    variant={"ghost"}>Forgot Password</Button>
                            </div>

                            <div>
                                <Button className="py-4 w-full" type=" submit">
                                    Login
                                </Button>
                            </div>
                        </form>

                        <Separator />

                        <div className="mt-6 p-4 bg-muted rounded-lg">
                            <p className="text-sm text-muted-foreground text-center">
                                <strong>Demo Account : </strong><br />
                                Email: demo@pospro.com<br />
                                Password: demo123
                            </p>
                        </div>
                    </div>
                )}

                {showForgotPassword &&
                    <div className="bg-card rounded-2xl shadow-xl p-8">
                        <form className="space-y-5" onSubmit={handleForgotPassword}>
                            <div className="space-y-3">
                                <Label>Email Address</Label>
                                <Input
                                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                                    placeholder="Enter your email.."
                                    type="email"
                                    id="email"
                                    name="forgotPasswordemail"
                                    value={forgotPasswordEmail}
                                />
                            </div>


                            <div className="flex items-center justify-between">
                                <Button variant={"outline"} onClick={() => setShowForgotPassword(false)}
                                    className="py-4">
                                    Back to login
                                </Button>
                                <Button className="py-4" type=" submit">
                                    Sent Reset Link
                                </Button>
                            </div>
                        </form>

                    </div>}
            </div >
        </div >
    );
};

export default Login;