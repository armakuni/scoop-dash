import type { Metadata } from "next";
import { Lobster_Two } from "next/font/google";
import RegisterForm from "./form";

export const metadata: Metadata = {
  title: "ScoopDash",
  description: "Generated by create next app",
};

const lobsterTwo = Lobster_Two({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <>
      <nav
        className={
          "m-0 bg-brand-blue p-4 text-brand-blue-content drop-shadow-sm"
        }
      >
        <h1 className={`text-2xl ${lobsterTwo.className}`}>🍦 ScoopDash</h1>
      </nav>
      <main className="flex h-full flex-grow flex-col items-center justify-around">
        <div className="m-10 flex flex-col gap-4 rounded bg-brand-purple p-10">
          <h2 className={`text-center text-3xl ${lobsterTwo.className}`}>
            Coming Soon!
          </h2>
          <RegisterForm />
        </div>
      </main>
    </>
  );
}
