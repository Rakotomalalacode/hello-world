"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/navigation"

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const hancderClick = () => {
    if (session?.user?.role) {

      router.push(`falarohy`);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        onClick={hancderClick}
        className="bg-darkwhite flex flex-col gap-6 p-4 items-center rounded border border-dash">
        <div className="flex gap-3 items-center">
          
          <div className="p-4">
            <p>{session?.user.name}</p>
            <p>{session?.user.email}</p>
          </div>
        </div>
        <div className="w-full">
          <button
            className="bg-violeground hover:bg-violeground/90 text-white py-2 w-full rounded"
          >
            Connecter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home