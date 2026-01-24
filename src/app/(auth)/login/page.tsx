import React from "react";
import ExamAppSide from "../_components/exam-app-side";
import LoginForm from "../_components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Feature side */}
      <aside className="hidden lg:block lg:w-1/2">
        <ExamAppSide />
      </aside>

      {/* Login side */}
      <section className="flex w-full flex-1 items-center justify-center px-4 sm:px-6 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col space-y-4">
          {/* Headline */}
          <h1 className="py-6 text-center text-3xl font-bold text-gray-800 font-inter lg:text-left">
            Login
          </h1>

          {/* Login component */}
          <LoginForm />

          {/* Register link */}
          <span className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Create yours
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
