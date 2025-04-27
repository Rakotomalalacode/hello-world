'use client'

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const DashboardPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Chargement du tableau de bord...</p>;
  }

    return (
      <div>
        <h1>Bienvenue sur votre Tableau de Bord, {session?.user.name}!</h1>
        {session?.user.email && <p>Votre email : {session?.user.email}</p>}
          <Image 
                src={`${session?.user.image}`}
                width={500}
                height={500}
                alt={`${session?.user.name}`} />
        <button onClick={() => signOut()}>Se Déconnecter</button>
      </div>
    );
  }

export default DashboardPage;