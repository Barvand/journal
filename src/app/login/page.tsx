// app/auth.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { account, ID } from "../appwrite";
import { useRouter } from "next/navigation";
import { handleLogout } from "../utils/logout";
import { Models } from "appwrite";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [user, setUser] = useState<Models.User<{}> | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setFormError("");

    try {
      if (isLogin) {
        await account.createEmailPasswordSession(data.email, data.password);
        alert("Logged in successfully!");
        router.push("/");
      } else {
        await account.create(ID.unique(), data.email, data.password);
        await account.createSession(data.email, data.password);
        alert("Registered and logged in successfully!");
      }
    } catch (error: any) {
      setFormError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 text-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {formError && (
          <p className="text-red-600 text-sm mb-4 text-center">{formError}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded-lg mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 border rounded-lg mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full p-2 border rounded-lg mt-1"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>

          {user && (
            <div className="mt-4 text-center">
              <button
                disabled={loading}
                onClick={() => handleLogout(router)}
                className="text-sm text-red-600 hover:underline mt-2"
              >
                Logout
              </button>
            </div>
          )}
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
