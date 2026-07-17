import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { register as registerUser } from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Register() {

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

      const res = await registerUser(data);

      login(res.token, res.user);

      toast.success("Account created");

      navigate("/dashboard");

    } catch (err: any) {

      toast.error(
        err.response?.data?.message ||
          "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <Card className="w-full max-w-md border-white/10 bg-white shadow-2xl">

      <CardHeader>

        <CardTitle className="text-2xl">
          Create account
        </CardTitle>

        <CardDescription>
          Start a workspace for AI-assisted reviews.
        </CardDescription>

      </CardHeader>

      <CardContent>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          <Input
            placeholder="Full Name"
            {...register("name")}
          />

          <p className="text-sm text-red-500">
            {errors.name?.message}
          </p>

          <Input
            placeholder="Email"
            {...register("email")}
          />

          <p className="text-sm text-red-500">
            {errors.email?.message}
          </p>

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          <p className="text-sm text-red-500">
            {errors.password?.message}
          </p>

          <Button
            className="w-full"
            disabled={loading}
            type="submit"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </Button>

        </form>

        <p className="mt-6 text-center text-sm">

          Already have an account?{" "}

          <Link
            className="font-semibold text-cyan-700"
            to="/login"
          >
            Login
          </Link>

        </p>

      </CardContent>

    </Card>
  );
}
