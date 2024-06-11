'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  console.log(router);

  function handleNavigate(){
    router.push('products')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS</h1>
      <Link href={'/products'}>Navigate to Products page</Link>
      <Link href={'/account'}>Navigate to Accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of navigation using useRouter</h2>
      <button onClick={handleNavigate}>Navigate to products page using useRouter</button>

    </main>
  );
}
