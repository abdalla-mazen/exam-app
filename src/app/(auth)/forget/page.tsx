import React from "react";
import ExamAppSide from "../_components/exam-app-side";
import ForgetPassword from "../_components/forget-password";
import Link from "next/link";

export default function ForgetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Feature side */}
      <aside className="hidden lg:block lg:w-1/2">
        <ExamAppSide />
      </aside>

      {/* Forget Password side */}
      <section className="flex w-full flex-1 items-center justify-center px-4 sm:px-6 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col space-y-4">
          {/* Headline */}
          <h1 className="py-6 text-3xl font-bold text-gray-800 font-inter text-center ">
            Forgot Password
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-base text-center ">
            Don’t worry, we will help you recover your account.
          </p>

          {/* Forget component */}
          <div className="flex w-full flex-col items-center">
            <ForgetPassword />

            {/* Register link */}
            <span className="mt-6 text-center text-gray-500 text-sm lg:text-left">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Create yours
              </Link>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
