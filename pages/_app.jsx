import ThemeContainer from '../contexts/theme/ThemeContainer';
import { Flex, Grid, Heading, List, ListItem, Text } from '@chakra-ui/core';
import './styles.css';
import 'animate.css';
import Link from 'next/link';

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
          templateColumns='1fr 720px 720px 1fr'
          templateRows='180px 56px auto auto 1fr auto'
          templateAreas="
      'header header header header' 
      'menu menu menu menu'     
      'content content content content'      
      'initialContent initialContent initialContent initialContent'
      '. servicos servicos .'
      'footer footer footer footer'
      "
          justifyContent='center'
          alignItems='start'
        >
          <Flex className='background-logo'>
            <Flex className='layer-menu'>
              <Flex width='50%' alignContent='center' justifyContent='start'>
                <Link href='/'> </Link>
                <img className='logo' src='/logo.png' alt=''></img>
              </Flex>

              <Flex color='#000' width='40%' alignItems='center' justifyContent='flex-end'>
                <ul>
                  <Text>Rua SB13, qd 42 lote 19, 75830-000</Text>
                  <p>Mineiros - GO</p>
                  <p>(64)99618-7103/(64)99342-7147</p>
                </ul>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className='background-menu'
            width='100%'
            
          >
            <Flex width='43%' alignItems='center' justifyContent='flex-end'>
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
            justifyContent='center'
            flexDirection='column'
            gridArea='footer'
            className='footer'
            // backgroundColor='#129e38'
          >
            <Flex justifyContent='center' className='logoFooter'>
              <img src='/logo.png' alt=''></img>
            </Flex>
            <Flex justifyContent='center'>
              <Flex className='infoFooter' flexDirection='column'>
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
