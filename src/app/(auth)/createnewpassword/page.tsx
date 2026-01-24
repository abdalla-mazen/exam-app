import React from "react";
import ExamAppSide from "../_components/exam-app-side";
import { MoveLeft } from "lucide-react";
import NewPasswordForm from "../_components/new-password-form";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Feature side */}
      <aside className="hidden lg:block lg:w-1/2">
        <ExamAppSide />
      </aside>

      {/* New Password side */}
      <section className="flex w-full flex-1 items-center justify-center  sm:px-6 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col">
          {/* Back button */}
          <div className="w-10 h-10 flex items-center justify-center ms-2 border border-gray-200  mb-10">
            <Link href={"/verify"}>
              <MoveLeft size={24} className="text-gray-600" />
            </Link>
          </div>

          {/* Headline */}
          <h1 className="mb-2 text-center text-3xl font-bold text-gray-800 font-inter ">
            Create a New Password
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-center text-gray-500 text-base ">
            Create a new strong password for your account.
          </p>

          {/* New password form */}
          <div className="flex w-full flex-col items-center">
            <NewPasswordForm />
          </div>
        </div>
      </section>
    </main>
  );
}
