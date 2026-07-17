import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { login as loginService } from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      setLoading(true);

      const res = await loginService(data);

      login(res.token, res.user);

      toast.success("Login successful");

      navigate("/dashboard");

    } catch (err: any) {

      toast.error(
        err.response?.data?.message ||
          "Login failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <Card className="w-full max-w-md border-white/10 bg-white shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">
          Welcome back
        </CardTitle>

        <CardDescription>
          Sign in to continue reviewing code.
        </CardDescription>
      </CardHeader>

      <CardContent>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          <div>

            <Input
              placeholder="Email"
              {...register("email")}
            />

            <p className="text-sm text-red-500">
              {errors.email?.message}
            </p>

          </div>

          <div>

            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            <p className="text-sm text-red-500">
              {errors.password?.message}
            </p>

          </div>

          <Button
            className="w-full"
            disabled={loading}
            type="submit"
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </Button>

        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            className="font-semibold text-cyan-700"
            to="/register"
          >
            Register
          </Link>
        </p>

      </CardContent>
    </Card>
  );
}
