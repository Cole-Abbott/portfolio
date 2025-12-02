
import React from "react";
import Header from "../components/Header"; // optional: reuse header

export const metadata = {
  title: "About — Cole Abbott",
  description: "About page",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-bg text-content-light">
      <Header />
      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-heading mb-4">Contact</h1>
        <p className="mb-6">Email: <a href="mailto:you@example.com" className="text-accent">you@example.com</a></p>
        <p>Short contact/messaging instructions here.</p>
      </main>
    </div>
  );
}