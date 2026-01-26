'use client';

import { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/store';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </QueryClientProvider>
  );
}
