"use client";
import { Mail, Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);



    

    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      alert("Invalid Email or Password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
     <Card className="w-full max-w-md shadow-lg rounded-lg bg-white">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            
              {/* Password Field */}

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            

             {/* Login Button */}
             <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
              disabled={isLoading}
            >
              
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          
          </form>

            {/* Register Link */}
            <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
