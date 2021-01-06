import { Flex, Heading, Text } from "@chakra-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";
SwiperCore.use([Pagination]);

export default function empresa() {
  return (
    <Flex justifyContent="center" gridArea="content">
      <Flex
        justifyContent="center"
        className="container"
        flexDirection="column"
      >
        <Flex justifyContent="center">
          <Heading
            textAlign="center"
            marginTop="60px"
            fontSize="4xl"
            color="rgb(130,130,130)"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            pariatur nemo enim dolore porro vero dicta quam.
          </Heading>
        </Flex>
        <Flex marginTop="2%" justifyContent="center">
          <div className="separator"></div>
        </Flex>

        <Flex>
          <Text padding="7%">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptas. Quod, impedit totam aut eligendi odio quis dolores fugit
            nulla maxime. Quia provident asperiores hic, sint porro iusto at
            nobis Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellat non tempora dignissimos ab delectus, nobis natus fuga
            dicta, optio, ad est provident nihil voluptatibus nesciunt facere
            nemo odio distinctio voluptate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium ipsum doloribus distinctio
            facere similique, sed unde ab soluta aliquid praesentium culpa harum
            aperiam odit rerum accusamus eaque reprehenderit possimus. Id.
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Flex
            className="card-service-image"
            justifyContent="center"
            width="50%"
          >
            <Swiper slidesPerView={1} autoplay pagination={{ clickable: true }}>
              <SwiperSlide>
                <Image
                  src="/teste2.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/teste1.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/teste3.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/teste2.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/teste.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/teste1.jpg"
                  alt=""
                  width={800}
                  height={460}
                />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
