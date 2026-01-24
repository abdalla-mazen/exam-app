import React from "react";
import RegisterForm from "../_components/register-form";
import ExamAppSide from "../_components/exam-app-side";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Feature side */}
      <aside className="hidden lg:block lg:w-1/2">
        <ExamAppSide />
      </aside>

      {/* Register side */}
      <section className="flex w-full flex-1 items-center justify-center px-4 sm:px-6 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col space-y-4">
          {/* Headline */}
          <h1 className="mb-4 text-3xl font-bold text-gray-800 text-center lg:text-left">
            Create Account
          </h1>

          {/* Register form */}
          <RegisterForm />

          {/* Login link */}
          <span className="mt-6 text-center text-gray-500 lg:text-left text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
