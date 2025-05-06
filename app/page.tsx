"use client"

import images from "@/constants/falarohy";
import { ClientSafeProvider, getProviders, LiteralUnion, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
import GoogleImage from "@/public/images/google-color-svgrepo-com.svg";
const ENCRYPTION_ID = "ny_avy_any_tonga_aty_ny_aty_tonga_any";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const now = new Date();
  const date = now.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cryptD = CryptoJS.AES.encrypt(
    date.toString(),
    ENCRYPTION_ID
  ).toString();

  const hancderClick = () => {
    const googleId = (session?.user as any).googleId;
    const role = (session?.user as any).role;

    if (session?.user?.role) {
      const cryptGoogleId = CryptoJS.AES.encrypt(
        googleId.toString(),
        ENCRYPTION_ID
      ).toString();
      router.push(`/falarohy/${role}?${cryptGoogleId}&${cryptGoogleId}&U=${googleId}&${session.user.email}`);
    }
  }

  const [providers, setProviders] = useState<Record<LiteralUnion<string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const fetchedProviders = await getProviders();
      setProviders(fetchedProviders);
    };

    fetchProviders();
  }, []);
  if (!providers) {
    return <div></div>;
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {session ? (
        <div
          onClick={hancderClick}
          className="bg-darkwhite flex flex-col gap-6 p-10 items-center rounded border border-dash">
          <div className='flex justify-center'>
            <Link href={'/'}>
              <Image
                src={images.logo}
                alt={'falarohy'}
                width={200}
                height={100} />
            </Link>
          </div>
          <h1 className="lg:text-3xl text-2xl">Reprendre</h1>
          <div className="flex gap-6 items-center">
            <Image
              src={`${session?.user.image}`}
              alt={`${session?.user.image}`}
              width={500} height={500}
              className="w-[90px] h-[90px] rounded-full border border-dash" />
            <div className="p-4">
              <p className="text-2xl">{session?.user.name}</p>
              <p>{session?.user.email}</p>
            </div>
          </div>
          <div className="w-full">
            <button
              className="bg-indigo-700/90 hover:bg-indigo-700 text-white py-2 w-full rounded"
            >
              Continuer
            </button>
          </div>
          <div className="border-b border-dash w-full flex justify-center"><p className="-mb-2.5 bg-white w-6">ou</p></div>
          <div>
            <button onClick={() => signOut({ callbackUrl: `/auth?${cryptD}&${cryptD}` })} className="hover:bg-dash rounded py-2 px-16 w-full">Continuer avec un autre compte</button>
          </div>
          <div className='text-[12px] max-w-80 m-auto'>
            En continuant, vous acceptez les <Link target="_blank" href={'/privacy/conditions-utilisation'} className='text-blue-700 underline'>conditions d'utilisation</Link> de Falarohy et avez lu <Link target="_blank" href={'/privacy/politique-de-confidentialite'} className='text-blue-700 underline'>la politique de confidentialité</Link> de Falarohy
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[90%] md:w-auto lg:p-16 p-10 text-center flex flex-col gap-6 rounded bg-darkwhite shadow">
              <div className='flex justify-center'>
                <Link href={'/'}>
                  <Image
                    src={images.logo}
                    alt={'falarohy'}
                    width={200}
                    height={100} />
                </Link>
              </div>
              <h1 className="lg:text-3xl text-2xl">Connexion ou Inscription</h1>
              {Object.values(providers).map((provider) => (
                <div key={provider.name} className='w-full flex justify-center'>
                  <button
                    className="flex items-center gap-6 border border-dash p-4 lg:px-6 rounded"
                    onClick={() => router.push('/auth?return=#auth_#')}
                  >
                    <Image
                      src={GoogleImage}
                      alt="Google Logo"
                      width={30}
                    />
                    <p className="lg:text-xl text-sm">Se connecter avec {provider.name}</p>
                  </button>
                </div>
              ))}

              <div className='text-[12px] max-w-80 m-auto'>
                En continuant, vous acceptez les <Link target="_blank" href={'/privacy/conditions-utilisation'} className='text-blue-700 underline'>conditions d'utilisation</Link> de Falarohy et avez lu <Link target="_blank" href={'/privacy/politique-de-confidentialite'} className='text-blue-700 underline'>la politique de confidentialité</Link> de Falarohy
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home