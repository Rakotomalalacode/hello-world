"use client"

import AuthFalarohy from "@/components/AuthFalarohy";
import { useSession } from "next-auth/react"
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
      {session ? (
        <div
          onClick={hancderClick}
          className="bg-darkwhite flex flex-col gap-6 p-4 items-center rounded border border-dash">
          <div className="flex gap-3 items-center">
            <img
              src={`${session?.user.image}`}
              alt={`${session?.user.image}`}
              width={50}
              height={50}
              className="w-fit h-fit rounded-full border border-dash" />
            <div className="p-4">
              <p className="text-2xl">{session?.user.name}</p>
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
      ) : (
        <div>
          <AuthFalarohy />
        </div>
      )}
    </div>
  )
}

export default Home