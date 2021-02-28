import { Flex, Heading, Text } from '@chakra-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { FaBriefcase, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
SwiperCore.use([Pagination]);

export default function empresa() {
  return (
    <Flex justifyContent='center' gridArea='content'>
      <Flex
        justifyContent='center'
        className='container'
        flexDirection='column'
      >
        <Text
          textAlign='center'
          fontSize={{
            base: '1.5rem',
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
            marginTop='60px'
            fontSize='4xl'
            color='rgb(130,130,130)'
          >
            <span className='redText'>Qualidade</span> e{' '}
            <span className='redText'>conhecimento</span> técnico <br />
            como padrão de <span className='redText'>trabalho</span>.
          </Heading>
        </Flex>
        <Flex marginTop='2%' justifyContent='center'>
          <div className='separator'></div>
        </Flex>

        <Flex>
          <Flex flexDirection='column' width='70%' padding='10%'>
            <Text
              fontSize={{
                base: '1.5rem',
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
            <Flex>
              <Flex className='card-service-image' width='100%'>
                <Swiper
                  slidesPerView={1}
                  autoplay
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <Image
                      className='imagemEmpresa'
                      src='/empresa.jpeg'
                      alt=''
                      objectFit='cover'
                      width={1152}
                      height={504}
                    />
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </Flex>
            <Text>
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
              className='redText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Visão
            </Text>
            <Text>
              Ser referência na produção de equipamentos mecânicos, caldeirados
              e de sistemas pela excelência em nossos serviços, destacadamente
              para os setores de geração de energia,alimenticio, produção de
              etanol e petróleo, produção de papel e celulose e para as
              indústrias dos setores químicos e petroquímicos.
            </Text>
            <Text
              className='redText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Missão
            </Text>
            <Text>
              Produzir equipamentos e sistemas com tecnologia e qualidade, de
              acordo com as necessidades dos clientes com foco na segurança,
              qualidade e meio ambiente, visando assegurar a permanência e a
              ampliação da participação no mercado e melhoria contínua das
              atividades.
            </Text>
            <Text
              className='redText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Valores
            </Text>
            <Text>
              Representam a base do desenvolvimento dos nossos negócios: Ética,
              Comprometimento, Qualidade, Melhoria Contínua e Responsabilidade
              Socio- ambiental, visando sempre a Excelência.
            </Text>
            <Text
              className='redText'
              fontSize={{
                base: '1.5rem',
                md: '1.8rem',
                lg: '2.2rem',
                xl: '2.5rem',
              }}
            >
              Política de qualidade
            </Text>
            <Text>
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
          <Flex flexDirection='column' width='30%' paddingTop='10%'>
            {/* Box  */}
            <Flex justifyContent='center'>
              <Flex width='100%' className='box-empresa'>
                <Flex width='100%' flexDirection='column'>
                  <Flex justifyContent='center' className='title-box-empresa'>
                    <Flex flexDirection='column' justifyContent='center'>
                      <Text
                        padding='8px'
                        fontSize={{
                          base: '0.8rem',
                          md: '1rem',
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
                          base: '0.8rem',
                          md: '1rem',
                          lg: '1.2rem',
                          xl: '1.5rem',
                        }}
                      >
                        Áreas de atuação
                      </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Áçucar e Álcool </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text>Química e Petroquímica</Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Siderurgia </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Metalurgia </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Óleo e Gás </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Mineração </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Geração de Energia </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Movimentação de Carga </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Alimentício </Text>
                    </Flex>
                  </Flex>
                  {/* topicos box */}
                  {/* topicos box */}
                  <Flex
                    fontSize={{
                      base: '0.5rem',
                      md: '.6rem',
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
                      <Text> Biodiesel </Text>
                    </Flex>
                  </Flex>
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
