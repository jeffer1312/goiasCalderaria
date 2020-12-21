//import Head from "next/head";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/core";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Typical from "react-typical";
SwiperCore.use([Pagination]);
function servicos() {
  return (
    <Flex flexDirection="column" gridArea="content">
      <Flex justifyContent="center">
        <Heading marginTop="60px" fontSize="6xl" color="rgb(130,130,130)">
          Produtos e Serviços
        </Heading>
      </Flex>
      <Flex justifyContent="center">
        <div className="separator"></div>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        className="card-Services "
      >
        <Flex className="container" flexDirection="column">
          {/* itens */}
          <Flex>
            <Flex width="100%" flexDirection="column">
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Manutenção em implementos agricolas
              </Heading>
              <Text textAlign="start" paddingTop="3%" paddingLeft="10%">
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
              </Text>
            </Flex>
            <Flex width="35%">
              <Swiper
                className="card-service-image"
                slidesPerView={1}
                autoplay
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
          {/* fim items */}

          {/* itens */}
          <Flex>
            <Flex width="100%" flexDirection="column">
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Manutenção em implementos agricolas
              </Heading>
              <Text textAlign="start" paddingTop="3%" paddingLeft="10%">
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
              </Text>
            </Flex>
            <Flex width="35%">
              <Swiper
                className="card-service-image"
                slidesPerView={1}
                autoplay
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
          {/* fim items */}
          {/* itens */}
          <Flex>
            <Flex width="100%" flexDirection="column">
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Manutenção em implementos agricolas
              </Heading>
              <Text textAlign="start" paddingTop="3%" paddingLeft="10%">
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
              </Text>
            </Flex>
            <Flex width="35%">
              <Swiper
                className="card-service-image"
                slidesPerView={1}
                autoplay
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
          {/* fim items */}

          <Flex>
            <Flex width="100%" flexDirection="column">
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Manutenção em implementos agricolas
              </Heading>
              <Text textAlign="start" paddingTop="3%" paddingLeft="10%">
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
                <ListItem>teste</ListItem>
              </Text>
            </Flex>
            <Flex width="35%">
              <Swiper
                className="card-service-image"
                slidesPerView={1}
                autoplay
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fabricação e monteagem de estrutura-metalica.jpg"
                    alt=""
                    width={600}
                    height={350}
                  />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default servicos;

//  {/* servicos */}

{
  /* <Flex flexDirection="column" gridArea="servicos">
<Flex justifyContent="center">
  <Heading marginTop="60px" fontSize="6xl" color="rgb(130,130,130)">
    Produtos e Serviços
  </Heading>
</Flex>
<Flex justifyContent="center">
  <div className="separator"></div>
</Flex>

<Flex
  flexDirection="row"
  justifyContent="center"
  className="card-Services"
>
  <Flex flexDirection="column">
    <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
      Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
      Tubulações
    </Heading>
    <Text textAlign="start" padding="10%">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Exercitationem, illum. Tempora expedita maiores animi ratione odit
      ullam alias, nesciunt nostrum sint cupiditate repellendus ducimus
      voluptatum quisquam, rerum iusto dolorum totam.
    </Text>
  </Flex>
  <Flex width="35%">
    <Swiper
      className="card-service-image"
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="/fabricação e monteagem de estrutura-metalica .jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/fabricação e monteagem de estrutura-metalica .jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  </Flex>     
</Flex>
</Flex>       */
}
