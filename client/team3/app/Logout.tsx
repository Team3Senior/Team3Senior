'use client';
import { useRouter } from "next/navigation";
import { signOut } from 'next-auth/react';
export default function Logout() {
  const { push } = useRouter();
  return (
    <button
      onClick={() => {
        localStorage.removeItem('userId');
        signOut();  push('/Login')
      }}
    >
      Logout
    </button>
  );
}
