import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Confira nossos produtos',
};

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { fetchNfts } from '@/services/api';
import HomeCards from '../components/HomeCards';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['nfst'],
    queryFn: fetchNfts,
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeCards />
      </HydrationBoundary>
    </main>
  );
}
