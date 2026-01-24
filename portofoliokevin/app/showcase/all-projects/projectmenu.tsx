import { Suspense } from "react";
import { ShowcaseContent } from "@/app/showcase/all-projects/allproject";
export default function ShowcaseMenu() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center bg-white" />}>
      <ShowcaseContent />
    </Suspense>
  );
}