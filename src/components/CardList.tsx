import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlImge, setUrlImge] = useState(null);

  function handleImge(url: string): void {
    setUrlImge(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(item => {
          return (
            <Card
              data={item}
              key={item.id}
              viewImage={() => handleImge(item.url)}
            />
          );
        })}
      </SimpleGrid>
      <ModalViewImage imgUrl={urlImge} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
