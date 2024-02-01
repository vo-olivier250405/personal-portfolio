"use client";
import { AllSections } from "./components/organisms";

export default function Home() {
  return (
    <main className="grid justify-center items-center">
      <AllSections />
      <footer className="m-auto">
        © 2023 Vo Olivier. All rights reserved.
      </footer>
    </main>
  );
}
