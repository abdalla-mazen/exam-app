import React from "react";
import OtpInput from "../_components/otp-input";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import ExamAppSide from "../_components/exam-app-side";

export default function OtpInputPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Feature side */}
      <aside className="hidden lg:block lg:w-1/2">
        <ExamAppSide />
      </aside>

      {/* OTP side */}
      <section className="flex w-full flex-1 items-center justify-center px-4 sm:px-6 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col">
          {/* Back button */}
          <div className="w-10 h-10 flex items-center justify-center ms-2 border border-gray-200  mb-10">
            <Link href={"/forget"}>
              <MoveLeft size={24} className="text-gray-600" />
            </Link>
          </div>

          {/* Headline */}
          <h1 className="mb-2 text-center text-3xl font-bold text-gray-800 ">
            Verify OTP
          </h1>

          {/* Subtitle */}
          <p className="mb-2 text-center text-gray-500 text-base">
            Please enter the 6-digits code we have sent to:
          </p>

          {/* Email + edit link */}
          <div className="mb-6 text-center ">
            <span className="text-gray-800 text-base font-normal">
              user@example.com.{" "}
              <Link
                href="/forget"
                className="text-blue-600 font-medium underline"
              >
                Edit
              </Link>
            </span>
          </div>

          {/* OTP field component */}
          <div className="flex items-center flex-col  justify-center">
            <div className="w-full mx-auto">
              <OtpInput />
            </div>
          </div>

          {/* Register link */}
          <span className="mt-6 text-center text-gray-500  text-sm">
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
