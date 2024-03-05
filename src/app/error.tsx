"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  const prevButtonNum = getCookie("prevButtonNum");
  if (!prevButtonNum) {
    router.push("/");
  }
  return <div>error</div>;
}
