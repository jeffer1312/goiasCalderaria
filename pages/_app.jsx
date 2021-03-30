import ThemeContainer from '../contexts/theme/ThemeContainer';
import { Flex, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import './styles.css';
import 'animate.css';
import 'swiper/swiper.scss';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Head from 'next/head';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMobileAlt,
} from 'react-icons/fa';

import { motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5564996187103', '_blank');
  };
  const handleLink = redesocial => {
    if (redesocial === 'FaFacebook') {
      window.open('https://www.facebook.com/goiascaldeiraria', '_blank');
    } else if (redesocial === 'FaLinkedin') {
      window.open('https://www.linkedin.com/', '_blank');
    } else {
      window.open('https://www.instagram.com/', '_blank');
    }
  };
  return (
    <ThemeContainer>
      <Flex flexDirection='column' className='backgroundColor'>
        <Head>
          <meta name="google-site-verification" content="lpuVKAkgriICCXLt5AmS_415e2D00ACjUHGciJLLNKg" />
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
            content='caldeiraria, inspeção, soldagens especiais, áçucar e álcool,  química, petroquímica,  siderurgia,  metalurgia  óleo e gás,  mineração,  geração de energia,  movimentação de carga,  alimentício,  biodiesel, Goias , Goiás Caldeiraria ,mineiros ,goias ,solda ,usina ,eth,Caldeiraria industrial, caldeiraria,industrial,GOIAS CALDEIRARIA, GOIAS CALDEIRARIAS,CALDEIRARIAS, SOLDAS, manutençao agricola,interior,marfrig,atvos,tubulação,maquinario agricola '
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
                      <Link href='/servicos'>Galeria</Link>
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
                        Galeria
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
            justifyContent={{
              base: 'flex-start',
              md: 'center',
              lg: 'center',
              xl: 'center',
            }}
            paddingTop={{
              base: '8%',
              md: '0%',
              lg: '0%',
              xl: '0%',
            }}
            flexDirection='column'
            gridArea='footer'
            position='relative'
            backgroundColor='#030027'
            height={{
              base: '300px',
              md: '200px',
              lg: '200px',
              xl: '200px',
            }}
            width='100%'
          >
            <Flex flexWrap='wrap'>
              <Flex
                fontFamily='Akaya Telivigala'
                width={{
                  base: '100%',
                  md: '48%',
                  lg: '48%',
                  xl: '33%',
                }}
                justifyContent='start'
              >
                <Flex
                  flex='1'
                  color='#fff'
                  className='infoFooter'
                  flexDirection='column'
                >
                  {/* <Flex paddingLeft='5%'>
                    <Text></Text>
                  </Flex> */}
                  <Flex paddingLeft='2%'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaEnvelope
                        fontSize={{
                          base: '1rem',
                          md: '0.9rem',
                          lg: '0.9rem',
                          xl: '1rem',
                        }}
                      />
                    </Flex>
                    <Flex
                      marginLeft='1%'
                      fontSize={{
                        base: '1rem',
                        md: '0.9rem',
                        lg: '0.9rem',
                        xl: '1rem',
                      }}
                      flexDirection='column'
                      justifyContent='center'
                    >
                      <Text fontWeight='normal'>goias.montagem@gmail.com</Text>
                    </Flex>
                  </Flex>

                  <Flex paddingLeft='2%'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaMobileAlt fontSize='1rem' />
                    </Flex>
                    <Flex
                      marginLeft='1%'
                      fontSize='1rem'
                      flexDirection='column'
                      justifyContent='center'
                    >
                      <Text fontWeight='normal'>
                        (64)99618-7103 - Leane Neves Lima - Administrativo{' '}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex paddingLeft='2%'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaMobileAlt
                        fontSize={{
                          base: '1rem',
                          md: '0.8rem',
                          lg: '0.8rem',
                          xl: '1rem',
                        }}
                      />
                    </Flex>
                    <Flex
                      marginLeft='1%'
                      fontSize='1rem'
                      flexDirection='column'
                      justifyContent='center'
                    >
                      <Text
                        fontSize={{
                          base: '1rem',
                          md: '0.8rem',
                          lg: '0.8rem',
                          xl: '1rem',
                        }}
                        fontWeight='normal'
                      >
                        (64)99342-7147 - Sergio Reis Rego Costa -
                        Manutenção/Operacional
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                justifyContent={{
                  base: 'flex-start',
                  md: 'center',
                  lg: 'center',
                  xl: 'center',
                }}
                width={{
                  base: '100%',
                  md: '33%',
                  lg: '33%',
                  xl: '33%',
                }}
              >
                <Flex
                  onClick={() => handleLink('FaFacebook')}
                  cursor='pointer'
                  padding='2%'
                >
                  <FaFacebook fontSize='3rem' color='#fff' />
                </Flex>
                <Flex
                  onClick={() => handleLink('FaLinkedin')}
                  cursor='pointer'
                  padding='2%'
                >
                  <FaLinkedin fontSize='3rem' color='#fff' />
                </Flex>
                <Flex
                  cursor='pointer'
                  onClick={() => handleLink('FaInstagram')}
                  padding='2%'
                >
                  <FaInstagram fontSize='3rem' color='#fff' />
                </Flex>
              </Flex>
            </Flex>

            <Flex gridArea='footer' justifyContent='center'>
              <Flex
                bottom='0'
                position='absolute'
                justifyContent='center'
                color='#fff'
                className='author'
              >
                <Text fontFamily='Akaya Telivigala'>
                  Desenvolvido por: Jefferson Felizardo
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
      <Flex
        onClick={handleWhatsapp}
        cursor='pointer'
        position='fixed'
        right='10'
        bottom='10'
        className='whatsappfixed'
      >
        <motion.div
          initial={{ rotate: 360, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex>
              <Flex
                backgroundColor='#16DB65'
                //backgroundColor='#236938'
                justifyContent='center'
                flexDirection='column'
                borderRadius='15px'
                margin='auto'
                marginRight='-20px'
                justifyContent='center'
                width={{
                  base: '68%',
                  md: '70%',
                  lg: '80%',
                  xl: '80%',
                }}
              >
                <Flex
                  margin='auto'
                  width={{
                    base: '68%',
                    md: '70%',
                    lg: '80%',
                    xl: '80%',
                  }}
                >
                  <Text
                    fontFamily='Akaya Telivigala'
                    className='whatsappmsg'
                    fontSize='1.1rem'
                    textAlign='center'
                    color='#ffffff'
                    _hover=''
                  >
                    Clique aqui e nos envie uma mensagem
                  </Text>
                </Flex>
              </Flex>

              <Image src='/whatsapp.png' width='75' height='75' />
            </Flex>
          </motion.button>
        </motion.div>
      </Flex>
    </ThemeContainer>
  );
}

export default MyApp;
