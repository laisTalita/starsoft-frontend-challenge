import { Metadata } from 'next';
import Details from '@/components/Details';

export const metadata: Metadata = {
  title: 'Produto',
  description: 'Descrição do produto',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <main>
      <Details id={id} />
    </main>
  );
}
