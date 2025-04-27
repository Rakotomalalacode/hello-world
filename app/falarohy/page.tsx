'use client'

import { useSession, signOut } from 'next-auth/react';
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

  if (status === 'authenticated' && session?.user) {
    return (
      <div>
        <h1>Bienvenue sur votre Tableau de Bord, {session.user.name}!</h1>
        {session.user.email && <p>Votre email : {session.user.email}</p>}
        <button onClick={() => signOut()}>Se Déconnecter</button>
      </div>
    );
  }

  // Si l'état est 'unauthenticated', le useEffect devrait déjà avoir redirigé.
  // On ajoute un fallback pour le cas où.
  return <p>Vous n'êtes pas connecté.</p>;
};

export default DashboardPage;