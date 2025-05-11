'use client'

import { ProfilUsers } from '@/components/ProfilUsers';
import images from '@/constants/falarohy';
import menuTeacher from '@/constants/menuTeacher';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DashboardTeacher: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [active, setActive] = useState(0);

  if (status === 'loading') {
    return <p>Chargement du tableau de bord...</p>;
  }

  return (
    <div className='flex'>
      <div className='w-[72px] h-screen flex flex-col space-y-2 items-center py-2 px-2 border-r border-dash'>
        <Link href={'/'}>
          <Image
            src={images.logoDash}
            alt={'Falarohy'}
            width={500}
            height={500}
            className='w-14 h-14 bg-white p-2 rounded' />
        </Link>
        {menuTeacher.map((btn, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`flex items-center gap-1 flex-col w-full py-2 rounded ${active === index ? 'bg-darkwhite text-violeground' : 'bg-dash'
              }`}
          >
            <p>{active === index ? btn.iconTow : btn.iconOne}</p>
            <p className='text-[8px]'>{btn.title}</p>
            {active === index ? <div className='w-1.5 h-9 mt-0.5 -ml-[50px] rounded-2xl bg-vertbleuground absolute'></div> : ""}
          </div>
        ))}
      </div>
      <div className='max-h-screen overflow-x-hidden overflow-y-auto overflow-scroll w-[95%]'>
        <div className='sticky top-0 w-full flex h-[72px] bg-background border-b border-dash justify-between items-center px-6'>
          hjhjhj
          <ProfilUsers />
        </div>
        <div className='px-4'>
          {menuTeacher[active].Content}
        </div>
      </div>
    </div>
  );
}

export default DashboardTeacher;

//<button onClick={() => signOut()}>Se Déconnecter</button>