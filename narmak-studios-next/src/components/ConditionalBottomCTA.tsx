'use client';

import { usePathname } from 'next/navigation';
import BottomCTA from './BottomCTA';

export default function ConditionalBottomCTA() {
  const pathname = usePathname();
  
  // Don't show BottomCTA on the Get a Quote page
  if (pathname === '/get-a-quote') {
    return null;
  }
  
  return <BottomCTA />;
} 