"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WebAppDevelopmentRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main web-development page
    router.replace('/services/web-development');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting...</h1>
        <p className="text-gray-300">You are being redirected to our Web Development service page.</p>
      </div>
    </div>
  );
}