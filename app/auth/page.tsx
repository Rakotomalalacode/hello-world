'use client';

import { getProviders, signIn, useSession, LiteralUnion, ClientSafeProvider } from 'next-auth/react';
//import type { BuiltInProviderType } from 'next-auth/providers';
import Image from 'next/image';
//import GoogleImage from "@/public/images/google-icon-logo.svg";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CryptoJS from "crypto-js";

const ENCRYPTION_ID = "ny_avy_any_tonga_aty_ny_aty_tonga_any";

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<LiteralUnion<string>, ClientSafeProvider> | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchProviders = async () => {
      const fetchedProviders = await getProviders();
      setProviders(fetchedProviders);
    };

    fetchProviders();
  }, []);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      const googleId = (session.user as any).googleId;
      const role = (session.user as any).role;

      if (role && googleId) {
        const cryptGoogleId = CryptoJS.AES.encrypt(
          googleId.toString(),
          ENCRYPTION_ID
        ).toString();
        router.push("/falarohy")
       // router.push(`/dashboard/${role}?${cryptGoogleId}&${cryptGoogleId}&U=${googleId}&${session.user.email}`);
      } else {
        router.push(`/auth`);
      }
    }
  }, [status, session, router]);

  if (!providers) {
    return <div className="text-center py-10 text-white">Chargement des fournisseurs...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[90%] md:w-auto lg:p-16 p-10 text-center flex flex-col gap-6 rounded-lg bg-darkwhite">
        <Link href={"/"}>
          <div className="font-major bg-transparent text-white text-center">
            <h1 className="text-5xl text-oranground">eduVibe</h1>
            <p className="text-[12px] text-oranground">"learning your way"</p>
          </div>
        </Link>

        <h1 className="lg:text-3xl text-2xl">Connexion ou Inscription</h1>

        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='w-full flex justify-center'>
            <button
              className="flex items-center gap-6 border hover:border-oranground hover:text-oranground border-gray-200 p-4 lg:px-6 rounded-lg"
              onClick={() => signIn(provider.id)}
            >
              {/*<Image
                src={GoogleImage}
                alt="Google Logo"
                width={30}
              />*/}
              <p className="lg:text-xl text-sm">Se connecter avec {provider.name}</p>
            </button>
          </div>
        ))}

        <div className='text-sm max-w-80 m-auto'>
          En continuant, vous acceptez les <Link target="_blank" href={'/conditions-utilisation'} className='text-blue-700 hover:underline'>conditions d'utilisation</Link> d'<span className='text-oranground font-major'>eduVibe</span> et avez lu <Link target="_blank" href={'/politique-de-confidentialite'} className='text-blue-700 hover:underline'>la politique de confidentialité</Link> d'<span className='text-oranground font-major'>eduVibe</span>
        </div>
      </div>
    </div>
  );
}