'use client'; // This ensures the component runs on the client side
import React, { useEffect } from 'react';
import MenuBar from '@/components/front-end/menuBar';
import NailsAndSpa from '@/components/front-end/NailsAndSpa';
// import { useRouter } from 'next/navigation';

export default function Page(): JSX.Element {
//  const router = useRouter();
  
//  useEffect(() => {
//    router.push('/projects/sweetienails/login');
//  }, [router]);

  return (
    <>
      <MenuBar />
      <NailsAndSpa />
    </>
  );
}
