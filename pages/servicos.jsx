//import Head from "next/head";
import { useState } from 'react';
import {
  Flex,
  Heading,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Image as ImageChacra,
} from '@chakra-ui/react';

// import { useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { imagens } from '../arquivosDb/images';
import { ImgServicos } from '../arquivosDb/servicos';

function servicos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [servicoModal, setServicoModal] = useState('');

  function openModal(secao) {
    setServicoModal(secao);
    onOpen();
  }

  return (
    <>
      <Modal isCentered={true} size='5xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Galeria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent='center'>
              <Flex
                overflow='hidden'
                position='relative'
                flexDirection='column'
                justifyContent='center'
              >
                <ImageGallery
                  items={
                    servicoModal === 'agricola'
                      ? imagens.agricola
                      : servicoModal === 'tubulacao'
                      ? imagens.tubulacao
                      : servicoModal === 'CAMINHAOBAU'
                      ? imagens.CAMINHAOBAU
                      : imagens.soldasgeral
                  }
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex flexDirection='column' gridArea='content'>
        <Head>
          <title>Servicos - Goias Caldeiraria</title>
          <meta
            property='og:title'
            content='Servicos - Goias Caldeiraria'
            key='title'
          />
        </Head>
        <Flex justifyContent='center'>
          <Heading marginTop='60px' fontSize='6xl' color='rgb(130,130,130)'>
            Galeria de Imagens
          </Heading>
        </Flex>
        <Flex justifyContent='center'>
          <div className='separator'></div>
        </Flex>

        <Flex
          flexDirection='row'
          justifyContent='center'
          className='card-Services '
        >
          <Flex className='container' flexDirection='column'>
            <Flex flexWrap='wrap'>
              {/* BOX */}
              {ImgServicos.map(servico => {
                return (
                  <Flex
                    className='box-galeria'
                    key={servico.key}
                    width={{
                      base: '100%',
                      md: '100%',
                      lg: '33%',
                      xl: '31%',
                    }}
                    justifyContent='center'
                    flexDirection='column'
                  >
                    <Box
                      onClick={() => openModal(servico.servico)}
                      borderWidth='1px'
                      borderRadius='lg'
                      overflow='hidden'
                    >
                      <ImageChacra src={servico.src} alt={servico.text} />

                      <Box p='6'>
                        <Box d='flex' alignItems='baseline'></Box>

                        <Box
                          mt='1'
                          fontWeight='semibold'
                          as='h4'
                          lineHeight='tight'
                          isTruncated
                        >
                          {servico.text}
                        </Box>

                        <Box>
                          <Box as='span' color='gray.600' fontSize='sm'></Box>
                        </Box>

                        <Box d='flex' mt='2' alignItems='center'>
                          <Box
                            as='span'
                            ml='2'
                            color='gray.600'
                            fontSize='sm'
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                );
              })}
              {/* BOX */}
              {/* fim items */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default servicos;
