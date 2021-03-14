import ThemeContainer from '../contexts/theme/ThemeContainer';
import { Flex, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import './styles.css';
import 'animate.css';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <ThemeContainer>
      <Flex flexDirection='column' className='backgroundColor'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta
            name='description'
            content='A Goias Caldeiraria tem como foco valorizar as pessoas se preocupando com o bem-estar e união de seus colaboradores e clientes, atendendo as necessidades, exigências e expectativas de forma ágil, flexível e pontual. '
          />
          <meta
            name='keywords'
            content='caldeiraria, inspeção, soldagens especiais, áçucar e álcool,  química, petroquímica,  siderurgia,  metalurgia  óleo e gás,  mineração,  geração de energia,  movimentação de carga,  alimentício,  biodiesel, Goias , Goiás Caldeiraria ,mineiros ,goias ,solda ,usina ,eth '
          />
          <meta name='author' content='Jefferson Felizardo' />
        </Head>
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
              <Flex
                width={{
                  base: '350px',
                  md: '500px',
                  lg: '600px',
                  xl: '600px',
                }}
                flexDirection='column'
                justifyContent='center'
              >
                <Image
                  width={600}
                  height={200}
                  src='/logo.png'
                  alt='Goias Caldeiraria'
                />
              </Flex>
            </Flex>
            <Flex
              flexDirection='column'
              marginRight='2%'
              justifyContent='center'
            >
              <FaBars
                onClick={showSidebar}
                className='menu-mobile'
                fontSize='2.5rem'
                color='rgba(0, 0, 0, 0.6)'
              />
            </Flex>
          </Flex>
          <Flex className='background-menu' width='100%'>
            <Flex width='100%' alignItems='center' justifyContent='center'>
              <nav>
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
              </nav>
            </Flex>
          </Flex>
          <Flex
            className={sidebar ? 'mobile-background active' : 'inativo'}
            width='100%'
          >
            <Flex width='100%' alignItems='center' justifyContent='center'>
              <nav>
                <ul
                  className={
                    sidebar
                      ? 'mobile animate__animated animate__fadeIn'
                      : 'inativo'
                  }
                >
                  <Flex flexDirection='column' textAlign='center'>
                    <li onClick={showSidebar}>
                      <Link href='/'>Home</Link>
                    </li>
                    <li onClick={showSidebar}>
                      <Link href='/empresa' onClick={showSidebar}>
                        A Empresa
                      </Link>
                    </li>
                    <li onClick={showSidebar}>
                      <Link href='/servicos' onClick={showSidebar}>
                        Serviços
                      </Link>
                    </li>
                    <li onClick={showSidebar}>
                      <Link href='/contato' onClick={showSidebar}>
                        Contato
                      </Link>
                    </li>
                  </Flex>
                </ul>
              </nav>
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
              <Flex
                width={{
                  base: '370px',
                  md: '400px',
                  lg: '500px',
                  xl: '500px',
                }}
                flexDirection='column'
                justifyContent='center'
              >
                <Image
                  width={500}
                  height={300}
                  src='/logo.png'
                  alt='Goias Caldeiraria'
                />
              </Flex>
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
