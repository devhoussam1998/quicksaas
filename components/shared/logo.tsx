"use client";

import { env } from "@/config/env";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/logo/light.png"
          width={120}
          height={120}
          alt={`${env.NEXT_PUBLIC_APP_NAME} Logo`}
          className="mx-auto block dark:hidden"
          priority
        />
        <Image
          src="/images/logo/dark.png"
          width={120}
          height={120}
          alt={`${env.NEXT_PUBLIC_APP_NAME} Logo`}
          className="mx-auto hidden dark:block"
          priority
        />
      </Link>
    </>
  );
}
