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
          base: '150px',
          md: '200px',
          lg: '350px',
          xl: '561px',
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

      <Flex
        className='initialContent'
        marginTop='5%'
        gridArea='initialContent'
        height='450px'
      >
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

              <Flex overflow='hidden' padding='8%' justifyContent='center'>
                <Text>
                  A manutenção industrial consiste num conjunto de práticas que
                  busca fiscalizar e manter instrumentos e máquinas em pleno
                  funcionamento. Além disso, é dever da manutenção evitar a
                  ocorrência de acidentes que afetem os colaboradores ou o
                  meio-ambiente. Isso significa que certos componentes vão
                  exigir maior cuidado que outros, como tubulações de gás
                  natural ou caldeiras industriais.
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

      <Flex flexDirection='column' paddingBottom='8%' gridArea='servicos'>
        <Flex justifyContent='center'>
          <Heading marginTop='60px' fontSize='6xl' color='rgb(130,130,130)'>
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
              fill-opacity='1'
              d='M0,0L40,5.3C80,11,160,21,240,53.3C320,85,400,139,480,154.7C560,171,640,149,720,138.7C800,128,880,128,960,122.7C1040,117,1120,107,1200,133.3C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            ></path>
          </svg>
        </Flex>
        {/* produtos e servicos imagens */}
        <Flex className='servicos' height='650px' width='100%'>
          <Flex width='50%' className='Image-servico'></Flex>

          <Flex
            width='50%'
            flexDirection='column'
            justifyContent='center'
            className='servicos-text'
          >
            <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
              Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
              Tubulações
            </Heading>
            <Text textAlign='start' padding='10%'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, illum. Tempora expedita maiores animi ratione odit
              ullam alias, nesciunt nostrum sint cupiditate repellendus ducimus
              voluptatum quisquam, rerum iusto dolorum totam.
            </Text>
          </Flex>
        </Flex>
        {/* Fim produtos e servicos imagens */}

        {/* produtos e servicos imagens */}
        <Flex
          className='servicos'
          backgroundColor='#fff'
          height='650px'
          width='100%'
        >
          <Flex
            width='50%'
            flexDirection='column'
            justifyContent='center'
            className='servicos-text'
          >
            <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
              Manutenção de Maquinário Agrícola
            </Heading>
            <Text textAlign='start' padding='10%'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, illum. Tempora expedita maiores animi ratione odit
              ullam alias, nesciunt nostrum sint cupiditate repellendus ducimus
              voluptatum quisquam, rerum iusto dolorum totam.
            </Text>
          </Flex>
          <Flex width='50%' className='Image-servico1'></Flex>
        </Flex>
        {/* Fim produtos e servicos imagens */}

        {/* produtos e servicos imagens */}
        <Flex className='servicos' height='650px' width='100%'>
          <Flex width='50%' className='Image-servico2'></Flex>

          <Flex
            width='50%'
            flexDirection='column'
            justifyContent='center'
            className='servicos-text'
          >
            <Heading textAlign='start' fontSize='2xl' paddingLeft='10%'>
              Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
              Tubulações
            </Heading>
            <Text textAlign='start' padding='10%'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, illum. Tempora expedita maiores animi ratione odit
              ullam alias, nesciunt nostrum sint cupiditate repellendus ducimus
              voluptatum quisquam, rerum iusto dolorum totam.
            </Text>
          </Flex>
        </Flex>
        {/* Fim produtos e servicos imagens */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 220'>
          <path
            fill='#fff'
            fill-opacity='1'
            d='M0,0L40,5.3C80,11,160,21,240,53.3C320,85,400,139,480,154.7C560,171,640,149,720,138.7C800,128,880,128,960,122.7C1040,117,1120,107,1200,133.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
          ></path>
        </svg>
      </Flex>
    </>
  );
}
