//import Head from "next/head";
import { Flex, Heading, Text } from "@chakra-ui/core";

import Image from "next/image";
import Typical from "react-typical";


export default function Home() {
  return (
    <>
      <Flex gridArea="content" height="600px">
        <div className="background">
          <div className="layer">
            <Flex justifyContent="center" alignItems="center" height="70%">
              <Heading
                color="white"
                fontSize={{
                  base: "1.5rem",
                  md: "2rem",
                  lg: "3rem",
                  xl: "4rem",
                }}
              >
                <Typical
                  steps={["SEU SERVIÇO COM A MELHOR QUALIDADE", 2000]}
                  loop={Infinity}
                />
              </Heading>
            </Flex>
          </div>
        </div>
      </Flex>

      <Flex
        className="initialContent"
        gridArea="initialContent"
        justifyContent="center"
        backgroundColor="#129e38"
      >
        {/* Card de Descrição */}
        <Flex
          className="container"
          width={[
            "33%", // 0-30em
            "50%", // 30em-48em
            "100%", // 48em-62em
            // 62em+
          ]}
        >
          <Flex justifyContent="center" flexDirection="column">
            <Flex justifyContent="center" flexDirection="column">
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={{
                  base: "1.3rem",
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.5rem",
                }}
              >
                QUALIDADE
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize={{
                  base: "1.1rem",
                  md: "0.8rem",
                  lg: "1.0rem",
                  xl: "1.3rem",
                }}
              >
                Busca diária pela excelência no produto final.{" "}
              </Text>
            </Flex>
          </Flex>
          <Flex className="separatorVertical"></Flex>
          {/* Card de Descrição */}

          <Flex align="center" justifyContent="center" flexDirection="column">
            <Flex justifyContent="center" flexDirection="column">
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={{
                  base: "1.3rem",
                  md: "1.0rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                }}
              >
                ASSISTÊNCIA
              </Text>
              <Text
                color="white"
                fontSize="1.3rem"
                textAlign="center"
                fontSize={{
                  base: "1.1rem",
                  md: "0.8rem",
                  lg: "1.0rem",
                  xl: "1.3rem",
                }}
              >
                Oferecemos assistência técnica especializada em campo.
              </Text>
            </Flex>
          </Flex>
          <Flex className="separatorVertical"></Flex>
          {/* Card de Descrição */}

          <Flex
            width={[
              "100%", // 0-30em
              "50%", // 30em-48em
              "33%", // 48em-62em
              // 62em+
            ]}
            align="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Flex justifyContent="center" flexDirection="column">
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={{
                  base: "1.3rem",
                  md: "1.0rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                }}
              >
                AGILIDADE
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize={{
                  base: "1.1rem",
                  md: "0.8rem",
                  lg: "1.0rem",
                  xl: "1.3rem",
                }}
              >
                Agilidade é necessária para um retorno rápido ao nosso cliente.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/*serviços  */}

      <Flex flexDirection="column" gridArea="servicos">
        <Flex justifyContent="center">
          <Heading marginTop="60px" fontSize="6xl" color="rgb(130,130,130)">
            Produtos e Serviços
          </Heading>
        </Flex>
        <Flex justifyContent="center">
          <div className="separator"></div>
        </Flex>
        <Flex flexWrap="wrap" className="container">
          <Flex className="card" width="30%" flexDirection="column">
            <Image
              src='/teste1.jpg'
              alt="teset"
              width={200}
              height={200}
            />

            <Flex
              flexDirection="column"
              justifyContent="center"
              className="card-text"
            >
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign="start" padding="10%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, illum. Tempora expedita maiores animi ratione
                odit ullam alias, nesciunt nostrum sint cupiditate repellendus
                ducimus voluptatum quisquam, rerum iusto dolorum totam.
              </Text>
            </Flex>
          </Flex>
          <Flex className="card" width="30%" flexDirection="column">
            <Image
              src="/teste2.jpg"
              alt=""
              width={200}
              height={200}
            />

            <Flex
              flexDirection="column"
              justifyContent="center"
              className="card-text"
            >
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign="start" padding="10%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, illum. Tempora expedita maiores animi ratione
                odit ullam alias, nesciunt nostrum sint cupiditate repellendus
                ducimus voluptatum quisquam, rerum iusto dolorum totam.
              </Text>
            </Flex>
          </Flex>
          <Flex className="card" width="30%" flexDirection="column">
            <Image
              src="/teste2.jpg"
              alt=""
              width={200}
              height={200}
            />

            <Flex
              flexDirection="column"
              justifyContent="center"
              className="card-text"
            >
              <Heading textAlign="start" fontSize="2xl" paddingLeft="10%">
                Caldeiraria - Projeto e Fabricação de Estruturas Metálicas e
                Tubulações
              </Heading>
              <Text textAlign="start" padding="10%">
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
