//import Head from "next/head";
import { Flex, Heading, Text, List } from '@chakra-ui/core';
import {
  FaCheck,
  FaFilter,
  FaIndustry,
  FaTractor,
  FaFireAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import Typical from 'react-typical';

export default function Home() {
  return (
    <>
      <Flex
        gridArea='content'
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        justifyItems='center'
        className='background'
        height={{
          base: '150px',
          md: '200px',
          lg: '350px',
          xl: '471px',
        }}
      >
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
                base: '1rem',
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
                          base: '.9rem',
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
                          base: '.9rem',
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
                          base: '.9rem',
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
                          base: '.9rem',
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

      <Flex className='initialContent' gridArea='initialContent' height='450px'>
        <Flex className='container'>
          {/* Card Servico */}
          <Flex
            justifyContent='center'
            className='card-servicos animate__animated animate__backInLeft'
          >
            <Flex flexDirection='column'>
              <Flex justifyContent='center'>
                <Text
                  padding='10% 0'
                  fontSize={{
                    base: '.9rem',
                    md: '1rem',
                    lg: '1.2rem',
                    xl: '1.5rem',
                  }}
                >
                  Manutenção industrial
                </Text>
              </Flex>
              <Flex justifyContent='center'>
                <Text
                  fontSize={{
                    base: '1.5rem',
                    md: '2rem',
                    lg: '2.5rem',
                    xl: '3rem',
                  }}
                >
                  <FaIndustry />
                </Text>
              </Flex>

              <Flex padding='10%' justifyContent='center'>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae fugiat magnam odit esse pariatur nostrum facilis
                  ip.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Card Servico */}

          {/* Card Servico */}
          <Flex
            justifyContent='center'
            className='card-servicos animate__animated animate__backInUp'
          >
            <Flex flexDirection='column'>
              <Flex justifyContent='center'>
                <Text
                  padding='10% 0'
                  fontSize={{
                    base: '.9rem',
                    md: '1rem',
                    lg: '1.2rem',
                    xl: '1.5rem',
                  }}
                >
                  Manutenção agrícola
                </Text>
              </Flex>
              <Flex justifyContent='center'>
                <Text
                  fontSize={{
                    base: '1.5rem',
                    md: '2rem',
                    lg: '2.5rem',
                    xl: '3rem',
                  }}
                >
                  <FaTractor />
                </Text>
              </Flex>

              <Flex padding='10%' justifyContent='center'>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae fugiat magnam odit esse pariatur nostrum facilis
                  ip.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Card Servico */}

          {/* Card Servico */}
          <Flex
            justifyContent='center'
            className='card-servicos animate__animated animate__backInUp'
          >
            <Flex flexDirection='column'>
              <Flex justifyContent='center'>
                <Text
                  padding='10% 0'
                  fontSize={{
                    base: '.9rem',
                    md: '1rem',
                    lg: '1.2rem',
                    xl: '1.5rem',
                  }}
                >
                  Caldeiraria
                </Text>
              </Flex>
              <Flex justifyContent='center'>
                <Text
                  fontSize={{
                    base: '1.5rem',
                    md: '2rem',
                    lg: '2.5rem',
                    xl: '3rem',
                  }}
                >
                  <FaFilter />
                </Text>
              </Flex>

              <Flex padding='10%' justifyContent='center'>
                <Text>
                  Trabalhos de caldeiraria mediante projetos desenvolvidos
                  juntamente com seus clientes, como por exemplo: dispositivos,
                  trocadores de calor, tubulações, conexões, etc.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Card Servico */}
          {/* Card Servico */}
          <Flex
            justifyContent='center'
            className='card-servicos animate__animated animate__backInRight'
          >
            <Flex flexDirection='column'>
              <Flex justifyContent='center'>
                <Text
                  padding='10% 0'
                  fontSize={{
                    base: '.9rem',
                    md: '1rem',
                    lg: '1.2rem',
                    xl: '1.5rem',
                  }}
                >
                  Soldagens em geral
                </Text>
              </Flex>
              <Flex justifyContent='center'>
                <Text
                  fontSize={{
                    base: '1.5rem',
                    md: '2rem',
                    lg: '2.5rem',
                    xl: '3rem',
                  }}
                >
                  <FaFireAlt />
                </Text>
              </Flex>

              <Flex padding='10%' justifyContent='center'>
                <Text>
                  Trabalhos de caldeiraria mediante projetos desenvolvidos
                  juntamente com seus clientes, como por exemplo: dispositivos,
                  trocadores de calor, tubulações, conexões, etc.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Card Servico */}
        </Flex>
      </Flex>

      <Flex flexDirection='column' gridArea='servicos'>
        <Flex justifyContent='center'>
          <Heading marginTop='60px' fontSize='6xl' color='rgb(130,130,130)'>
            Produtos e Serviços
          </Heading>
        </Flex>
        <Flex justifyContent='center'>
          <div className='separator'></div>
        </Flex>
        <Flex flexWrap='wrap' className='container'>
          <Flex className='card' width='30%' flexDirection='column'>
            <Image src='/teste1.jpg' alt='teset' width={200} height={200} />

            <Flex
              flexDirection='column'
              justifyContent='center'
              className='card-text'
            >
              <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign='start' padding='10%'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, illum. Tempora expedita maiores animi ratione
                odit ullam alias, nesciunt nostrum sint cupiditate repellendus
                ducimus voluptatum quisquam, rerum iusto dolorum totam.
              </Text>
            </Flex>
          </Flex>
          <Flex className='card' width='30%' flexDirection='column'>
            <Image src='/teste2.jpg' alt='' width={200} height={200} />

            <Flex
              flexDirection='column'
              justifyContent='center'
              className='card-text'
            >
              <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign='start' padding='10%'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, illum. Tempora expedita maiores animi ratione
                odit ullam alias, nesciunt nostrum sint cupiditate repellendus
                ducimus voluptatum quisquam, rerum iusto dolorum totam.
              </Text>
            </Flex>
          </Flex>
          <Flex className='card' width='30%' flexDirection='column'>
            <Image src='/teste2.jpg' alt='' width={200} height={200} />

            <Flex
              flexDirection='column'
              justifyContent='center'
              className='card-text'
            >
              <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign='start' padding='10%'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, illum. Tempora expedita maiores animi ratione
                odit ullam alias, nesciunt nostrum sint cupiditate repellendus
                ducimus voluptatum quisquam, rerum iusto dolorum totam.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
