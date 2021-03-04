import ThemeContainer from '../contexts/theme/ThemeContainer';
import {
  Flex,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
  Image,
} from '@chakra-ui/core';
import './styles.css';
import 'animate.css';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Flex flexDirection='column' className='backgroundColor'>
        <Grid
          as='main'
          height='100%'
          templateColumns='1fr 1fr 1fr 1fr'
          templateRows='auto auto auto auto auto auto'
          templateAreas="
          'header header header header'
      'menu menu menu menu'     
                 
      'content content content content'      
      'initialContent initialContent initialContent initialContent'
      'servicos servicos servicos servicos'
      'footer footer footer footer'
      "
          justifyContent='center'
          alignItems='start'
        >
          <Flex
            width='100%'
            justifyContent='center'
            className='background-logo  '
          >
            <Flex
              justifyContent={{
                base: 'flex-start',
                lg: 'center',
                xl: 'center',
              }}
              width='100%'
            >
              <Flex flexDirection='column' justifyContent='center'>
                <Image
                  objectFit='cover'
                  src='/logo.png'
                  alt='Goias Caldeiraria'
                  width={{
                    base: '350px',
                    md: '500px',
                    lg: '600px',
                    xl: '600px',
                  }}
                />
              </Flex>
            </Flex>
            <Flex
              flexDirection='column'
              marginRight='2%'
              justifyContent='center'
            >
              <FaBars
                className='menu-mobile'
                fontSize='2.5rem'
                color='rgba(0, 0, 0, 0.6)'
              />
            </Flex>
          </Flex>
          <Flex className='background-menu' width='100%'>
            <Flex width='100%' alignItems='center' justifyContent='center'>
              <ul className='menu'>
                <Flex>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/empresa'>A Empresa</Link>
                  </li>
                  <li>
                    <Link href='/servicos'>Serviços</Link>
                  </li>
                  <li>
                    <Link href='/contato'>Contato</Link>
                  </li>
                </Flex>
              </ul>
            </Flex>
          </Flex>

          <Component {...pageProps} />

          <Flex
            width=''
            justifyContent='center'
            flexDirection='column'
            gridArea='footer'
            backgroundColor='#fff'
            borderTop='1px solid #ccc'
            // backgroundColor='#129e38'
          >
            <Flex justifyContent='center' className='logoFooter'>
              <img src='/logo.png' alt=''></img>
            </Flex>
            <Flex justifyContent='center'>
              <Flex color='#000' className='infoFooter' flexDirection='column'>
                <Text>(64)99618-7103 / (64)99342-7147</Text>
                <Text>goias.montagem@gmail.com</Text>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </ThemeContainer>
  );
}

export default MyApp;
