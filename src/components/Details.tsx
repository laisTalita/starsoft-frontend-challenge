'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNfts } from '@/services/api';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { List } from '@/types';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'motion/react';

function Details({ id }: { id: string }) {
  const newId = Number(id);
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['nfst'],
    queryFn: fetchNfts,
  });
  if (isLoading) return <p>Carregando dados...</p>;
  if (error) return <p>Error ao carregar.</p>;

  const nfst = data.products.find((i: List) => i.id === newId);

  const index = data.products.findIndex((i: List) => i.id === newId);
  const isMax = index === data.products.length - 1;
  const isMin = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card item={nfst} variant="modal">
        {!isMin && (
          <Button
            aria-label="Voltar card"
            onClick={() => !isMin && router.push(`/client/${newId - 1}`)}
          >
            <IoIosArrowRoundBack />
          </Button>
        )}
        {!isMax && (
          <Button
            aria-label="Avançar na lista de produtos"
            onClick={() => !isMax && router.push(`/client/${newId + 1}`)}
          >
            {''}
            <IoIosArrowRoundForward />
          </Button>
        )}
      </Card>
      <div className="goBack">
        <Button onClick={() => router.push(`/`)}>Voltar ao Loob</Button>
      </div>
    </motion.div>
  );
}
export default Details;
