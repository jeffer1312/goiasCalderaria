//import Head from "next/head";
import { Flex, Heading, Text, List } from '@chakra-ui/core';
import {
  FaCheck,
  FaFilter,
  FaIndustry,
  FaTractor,
  FaFireAlt,
} from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';

import { cardServicos, ProdServico, Parceiros } from '../arquivosDb/home.js';
export default function Home() {
  return (
    <>
      <Flex
        gridArea='content'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        justifyItems='center'
        className='background animate__animated animate__fadeIn'
        height={{
          base: '400px',
          md: '400px',
          lg: '400px',
          xl: '561px',
        }}
      >
        <Head>
          <title>Goias Caldeiraria</title>
          <meta property='og:title' content='Goias Caldeiraria' key='title' />
        </Head>
        <Flex
          flexDirection='column'
          alignContent='center'
          justifyContent='center'
          justifyItems='center'
          className='layer'
        >
          <Flex
            alignContent='center'
            justifyContent='center'
            justifyItems='center'
          >
            <Heading
              color='white'
              fontSize={{
                base: '1.4rem',
                md: '1.8rem',
                lg: '2rem',
                xl: '3rem',
              }}
            >
              <p className='animate__animated animate__lightSpeedInLeft '>
                CONHEÇA NOSSOS SERVIÇOS NA GOIAS CALDEIRARIA:
              </p>
              <ul>
                <List>
                  <Flex className='animate__animated animate__bounceInLeft animate__delay-1s'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaCheck fontSize='3.3rem' className='IconContent' />
                    </Flex>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px 10px'
                        fontSize={{
                          base: '1.4rem',
                          md: '1.5rem',
                          lg: '1.8rem',
                          xl: '2.2rem',
                        }}
                      >
                        <span className='textContent '>
                          Manutenção industrial
                        </span>
                      </Text>
                    </Flex>
                  </Flex>
                </List>
                <List>
                  <Flex className='animate__animated animate__bounceInLeft animate__delay-1s'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaCheck fontSize='3.3rem' className='IconContent' />
                    </Flex>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px 10px'
                        fontSize={{
                          base: '1.4rem',
                          md: '1.5rem',
                          lg: '1.8rem',
                          xl: '2.2rem',
                        }}
                      >
                        <span className='textContent'>Manutenção agrícola</span>
                      </Text>
                    </Flex>
                  </Flex>
                </List>
                <List>
                  <Flex className='animate__animated animate__bounceInLeft animate__delay-1s'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaCheck fontSize='3.3rem' className='IconContent' />
                    </Flex>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px 10px'
                        fontSize={{
                          base: '1.4rem',
                          md: '1.5rem',
                          lg: '1.8rem',
                          xl: '2.2rem',
                        }}
                      >
                        <span className='textContent'>Caldeiraria</span>
                      </Text>
                    </Flex>
                  </Flex>
                </List>
                <List>
                  <Flex className='animate__animated animate__bounceInLeft animate__delay-1s '>
                    <Flex flexDirection='column' justifyContent='center'>
                      <FaCheck fontSize='3.3rem' className='IconContent' />
                    </Flex>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px 10px'
                        fontSize={{
                          base: '1.2rem',
                          md: '1.5rem',
                          lg: '1.8rem',
                          xl: '2.2rem',
                        }}
                      >
                        <span className='textContent'>Soldagens em geral</span>
                      </Text>
                    </Flex>
                  </Flex>
                </List>
              </ul>
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex marginTop='5%' width='100%' gridArea='initialContent'>
        <Flex
          width='100%'
          flexWrap={{
            base: 'wrap',
            md: 'wrap',
            lg: 'nowrap',
            xl: 'nowrap',
          }}
          className='container'
        >
          {/* Card Servico */}
          {cardServicos.map(card => {
            return (
              <Flex
                width={{
                  base: '100%',
                  md: '48%',
                  lg: '25%',
                  xl: '25%',
                }}
                key={card.key}
                height='450px'
                justifyContent='center'
                className={card.className}
              >
                <Flex flexDirection='column'>
                  <Flex justifyContent='center'>
                    <Text
                      padding='10% 0'
                      fontSize={{
                        base: '3rem',
                        md: '1rem',
                        lg: '1.2rem',
                        xl: '1.5rem',
                      }}
                    >
                      {card.titulo}
                    </Text>
                  </Flex>
                  <Flex justifyContent='center'>
                    <Text
                      fontSize={{
                        base: '3rem',
                        md: '2rem',
                        lg: '2.5rem',
                        xl: '3rem',
                      }}
                    >
                      {card.icone === 'FaFilter' ? (
                        <FaFilter />
                      ) : card.icone === 'FaTractor' ? (
                        <FaTractor />
                      ) : card.icone === 'FaFireAlt' ? (
                        <FaFireAlt />
                      ) : (
                        <FaIndustry />
                      )}
                    </Text>
                  </Flex>

                  <Flex overflow='hidden' padding='10%' justifyContent='center'>
                    <Text>{card.descricao}</Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}

          {/* Card Servico */}
        </Flex>
      </Flex>

      <Flex flexDirection='column' paddingBottom='8%' gridArea='servicos'>
        <Flex justifyContent='center'>
          <Heading
            color='rgba(0, 0, 0, 0.7)'
            fontFamily='Akaya Telivigala, cursive'
            marginTop='60px'
            fontSize='6xl'
          >
            Produtos e Serviços
          </Heading>
        </Flex>
        <Flex justifyContent='center'>
          <div className='separator'></div>
        </Flex>
        <Flex>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 220'>
            <path
              fill='#fff'
              fillOpacity='1'
              d='M0,0L40,5.3C80,11,160,21,240,53.3C320,85,400,139,480,154.7C560,171,640,149,720,138.7C800,128,880,128,960,122.7C1040,117,1120,107,1200,133.3C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            ></path>
          </svg>
        </Flex>
        {/* produtos e servicos imagens  */}
        {ProdServico.map(servico => {
          return (
            <Flex
              key={servico.key}
              flexWrap='wrap'
              className='servicos '
              height='650px'
              width='100%'
            >
              <Flex
                order={{
                  base: '2',
                  md: servico.orderImg,
                  lg: servico.orderImg,
                  xl: servico.orderImg,
                }}
                width={{
                  base: '100%',
                  md: '50%',
                  lg: '50%',
                  xl: '50%',
                }}
                className={servico.className}
              ></Flex>

              <Flex
                order={{
                  base: '1',
                  md: servico.orderText,
                  lg: servico.orderText,
                  xl: servico.orderText,
                }}
                width={{
                  base: '100%',
                  md: '50%',
                  lg: '50%',
                  xl: '50%',
                }}
                flexDirection='column'
                justifyContent={{
                  base: 'flex-end',
                  md: 'center',
                  lg: 'center',
                  xl: 'center',
                }}
                className='servicos-text '
              >
                <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
                  {servico.titulo}
                </Heading>
                <Text textAlign='start' padding='10%'>
                  {servico.descricao}
                </Text>
              </Flex>
            </Flex>
          );
        })}
        {/* Fim produtos e servicos imagens*/}

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 220'>
          <path
            fill='#fff'
            fillOpacity='1'
            d='M0,0L40,5.3C80,11,160,21,240,53.3C320,85,400,139,480,154.7C560,171,640,149,720,138.7C800,128,880,128,960,122.7C1040,117,1120,107,1200,133.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
          ></path>
        </svg>

        <Flex flexWrap='wrap' className='container' justifyContent='center'>
          <Flex justifyContent='center' width='100%'>
            <Heading
              color='rgba(0, 0, 0, 0.7)'
              fontFamily='Akaya Telivigala, cursive'
              marginTop='60px'
              fontSize='6xl'
            >
              Nossos Clientes
            </Heading>
          </Flex>

          {/* {Parceiros.map((parceiro) => {
            return (
              <Flex order={parceiro.order} key={parceiro.key} width="50%">
                <Flex
                  width={{
                    base: "450px",
                    md: "300px",
                    lg: "300px",
                    xl: "300px",
                  }}
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    width={900}
                    height={200}
                    src={parceiro.src}
                    alt="Goias Caldeiraria"
                  />
                </Flex>
              </Flex>
            );
          })} */}
        </Flex>
      </Flex>
    </>
  );
}
