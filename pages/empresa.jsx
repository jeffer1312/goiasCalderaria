import { Flex, Heading, Text, Image } from '@chakra-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { FaBriefcase, FaCheck } from 'react-icons/fa';
import { BoxEmpresa } from '../arquivosDb/empresa';
import Head from 'next/head';

SwiperCore.use([Pagination]);

export default function empresa() {
  return (
    <Flex justifyContent='center' gridArea='content'>
      <Head>
        <title>A empresa - Goias Caldeiraria</title>
        <meta
          property='og:title'
          content='A empresa - Goias Caldeiraria'
          key='title'
        />
      </Head>
      <Flex
        justifyContent='center'
        className='container'
        flexDirection='column'
      >
        <Text
          color='rgba(0, 0, 0, 0.7)'
          fontFamily='Akaya Telivigala, cursive'
          marginLeft={{
            base: '8%',
            md: '0',
            lg: '0',
            xl: '0',
          }}
          textAlign={{
            base: 'left',
            md: 'center',
            lg: 'center',
            xl: 'center',
          }}
          fontSize={{
            base: '2.5rem',
            md: '2rem',
            lg: '2.5rem',
            xl: '3rem',
          }}
        >
          A Empresa
        </Text>
        <Flex justifyContent='center'>
          <Heading
            textAlign='center'
            marginTop={{
              base: '20px',
              md: '60px',
              lg: '60px',
              xl: '60px',
            }}
            fontSize='4xl'
            color='rgb(130,130,130)'
          >
            <span className='blueText'>Qualidade</span> e{' '}
            <span className='blueText'>conhecimento</span> técnico <br />
            como padrão de <span className='blueText'>trabalho</span>.
          </Heading>
        </Flex>
        <Flex marginTop='2%' justifyContent='center'>
          <div className='separator'></div>
        </Flex>

        <Flex flexWrap='wrap' width='100%'>
          <Flex
            flexDirection='column'
            width={{
              base: '100%',
              md: '100%',
              lg: '70%',
              xl: '70%',
            }}
            paddingBottom='4%'
          >
            <Text
              color='rgba(0, 0, 0, 0.7)'
              fontFamily='Akaya Telivigala, cursive'
              fontSize={{
                base: '2.5rem',
                md: '2rem',
                lg: '2.5rem',
                xl: '3rem',
              }}
            >
              Sobre a Goias Caldeirarias
            </Text>
            <Flex marginTop='2%'>
              <div className='separator'></div>
            </Flex>

            <Flex width='100%'>
              <Image
                objectFit='cover'
                src='/empresa.jpeg'
                alt='Goias Caldeiraria'
                width={{
                  base: '1152px',
                  md: '1152px',
                  lg: '1152px',
                  xl: '1152px',
                }}
                height={{
                  base: '300px',
                  md: '500px',
                  lg: '500px',
                  xl: '500px',
                }}
              />
            </Flex>

            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.2rem',
                xl: '1.4rem',
              }}
            >
              A Goiás caldeiraria montagem, manutenção industrial e agrícola,
              foi criada visando atender as demandas das empresas que necessitam
              de manutenção e montagem de equipamentos com processo de Soldagens
              qualificados. Temos como base a preservação da qualidade e
              confiança nos serviços prestados, atendendo dentro das normas
              vigentes. Prestamos serviços sob encomenda e executamos serviços
              sob medida de acordo com todas as especificações e necessidade do
              projeto do cliente. Nossas principais marcas são: compromisso,
              pontualidade com cliente, ética, confiança e qualidade. Oferecemos
              preços e condições especiais em nossos clientes.
            </Text>
            <Text
              className='blueText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Visão
            </Text>
            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.2rem',
                xl: '1.4rem',
              }}
            >
              Ser referência na produção de equipamentos mecânicos, caldeirados
              e de sistemas pela excelência em nossos serviços, destacadamente
              para os setores de geração de energia,alimenticio, produção de
              etanol e petróleo, produção de papel e celulose e para as
              indústrias dos setores químicos e petroquímicos.
            </Text>
            <Text
              className='blueText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Missão
            </Text>
            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.2rem',
                xl: '1.2rem',
              }}
            >
              Produzir equipamentos e sistemas com tecnologia e qualidade, de
              acordo com as necessidades dos clientes com foco na segurança,
              qualidade e meio ambiente, visando assegurar a permanência e a
              ampliação da participação no mercado e melhoria contínua das
              atividades.
            </Text>
            <Text
              className='blueText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Valores
            </Text>
            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.2rem',
                xl: '1.2rem',
              }}
            >
              Representam a base do desenvolvimento dos nossos negócios: Ética,
              Comprometimento, Qualidade, Melhoria Contínua e Responsabilidade
              Socio- ambiental, visando sempre a Excelência.
            </Text>
            <Text
              className='blueText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Política de qualidade
            </Text>
            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.2rem',
                xl: '1.2rem',
              }}
            >
              Atender às necessidades, exigências e expectativas de nossos
              clientes de forma flexível de acordo com os requisitos
              estabelecidos, respeitando suas tradições e culturas. Melhorar
              continuamente o desempenho de nossos produtos, serviços e
              processos, bem como analisar a eficácia do Sistema de Gestão da
              Qualidade. Manter um comportamento ético e responsável nas
              relações com os clientes, fornecedores, concorrentes, comunidades,
              órgãos governamentais e colaboradores.
            </Text>
          </Flex>
          <Flex
            flexDirection='column'
            width={{
              base: '100%',
              md: '100%',
              lg: '30%',
              xl: '30%',
            }}
            paddingTop='10%'
          >
            {/* Box  */}
            <Flex
              paddingLeft={{
                base: '0',
                md: '3%',
                lg: '3%',
                xl: '3%',
              }}
              width='100%'
              justifyContent='center'
            >
              <Flex width='100%' className='box-empresa'>
                <Flex width='100%' flexDirection='column'>
                  <Flex justifyContent='center' className='title-box-empresa'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px'
                        fontSize={{
                          base: '1.8rem',
                          base: '1.8rem',
                          lg: '1.2rem',
                          xl: '1.5rem',
                        }}
                      >
                        <FaBriefcase />
                      </Text>
                    </Flex>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px'
                        fontSize={{
                          base: '1.8rem',
                          base: '1.8rem',
                          lg: '1.2rem',
                          xl: '1.5rem',
                        }}
                      >
                        Áreas de atuação
                      </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {BoxEmpresa.map(box => {
                    return (
                      <Flex
                        key={box.key}
                        fontSize={{
                          base: '1.2rem',
                          base: '1.8rem',
                          lg: '.8rem',
                          xl: '.8rem',
                        }}
                      >
                        <Flex
                          justifyContent='center'
                          padding='8px'
                          flexDirection='column'
                        >
                          <Text>
                            <FaCheck />
                          </Text>
                        </Flex>
                        <Flex
                          padding='8px 1px'
                          justifyContent='center'
                          flexDirection='column'
                        >
                          <Text>{box.titulo}</Text>
                        </Flex>
                      </Flex>
                    );
                  })}

                  {/* topicos box */}
                </Flex>
              </Flex>
            </Flex>
            {/* Box  */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
