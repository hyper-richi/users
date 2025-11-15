import FindUsers from "@/components/FindUsers/FindUsers";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FindUsers />
    </Suspense>
  );
}
