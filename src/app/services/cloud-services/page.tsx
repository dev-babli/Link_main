"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CloudServicesRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main cloud-devops page
    router.replace('/services/cloud-devops');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting...</h1>
        <p className="text-gray-300">You are being redirected to our Cloud & DevOps service page.</p>
      </div>
    </div>
  );
}