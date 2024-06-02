import React from 'react';
import CanteensProvider from '@/providers/canteens-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CanteensProvider>{children}</CanteensProvider>;
}
