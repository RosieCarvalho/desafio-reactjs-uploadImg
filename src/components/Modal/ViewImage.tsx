import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300px', '500px', '900px']}
        maxH={['350px', '450px', '600px']}
      >
        <ModalBody maxHeight="900px" maxWidth="900px">
          <Image
            w="full"
            h="full"
            src={imgUrl}
            alt="photo"
            borderRadius="md"
            objectFit="cover"
            maxW={['300px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
          />
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
