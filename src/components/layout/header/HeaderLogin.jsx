"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeaderLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your login API here
    console.log("login:", form);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open login"
          className="size-5 text-secondary flex items-center justify-center shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <UserRound />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md gap-0 overflow-hidden rounded-3xl border-0 bg-white p-0 shadow-2xl sm:max-w-md">
        {/* Top accent */}
        <div className="relative bg-primary px-8 pb-8 pt-10">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-secondary/20" />
          <div className="absolute -bottom-10 -left-6 size-24 rounded-full bg-primary-black/5" />
          <div className="relative flex size-12 items-center justify-center rounded-2xl bg-primary-black text-primary">
            <UserRound className="size-6" />
          </div>
          <DialogHeader className="relative mt-5 space-y-1 text-left">
            <DialogTitle className="text-2xl font-bold text-primary-black">
              Welcome back
            </DialogTitle>
            <DialogDescription className="text-sm text-primary-black/70">
              Sign in to your account to continue.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white px-8 py-8">
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="login-email"
              className="text-sm font-medium text-primary-black"
            >
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-primarygray" />
              <input
                id="login-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-transparent bg-bg-gray pl-10 pr-4 text-sm text-primary-black outline-none transition placeholder:text-primarygray focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="text-sm font-medium text-primary-black"
              >
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs font-medium text-secondary hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-primarygray" />
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-transparent bg-bg-gray pl-10 pr-11 text-sm text-primary-black outline-none transition placeholder:text-primarygray focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-primarygray transition hover:text-primary-black"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-primarygray select-none">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="size-4 cursor-pointer rounded border-primarygray accent-secondary"
            />
            Remember me
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-xl bg-primary-black text-sm font-semibold text-primary transition duration-300 hover:bg-secondary hover:text-white active:scale-[0.98]"
          >
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-wider text-primarygray">or</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Social */}
          <button
            type="button"
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-border bg-white text-sm font-medium text-primary-black transition hover:bg-bg-gray"
          >
            <svg className="size-5" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
              <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-primarygray">
            Don&apos;t have an account?{" "}
            <a href="/register" className="font-semibold text-secondary hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderLogin;