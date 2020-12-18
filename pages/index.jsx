//import Head from "next/head";
import { Flex, Grid, Heading, List, ListItem, Text } from "@chakra-ui/core";
import Link from "next/link";
import Typical from "react-typical";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 720px 720px 1fr"
      templateRows="9.7% 600px 350px 1fr 1fr"
      templateAreas="
      'header header header header'      
      'content content content content'
      'initialContent initialContent initialContent initialContent'
      '. servicos servicos .'
      'footer footer footer footer'
      "
      justifyContent="center"
      alignItems="start"
    >
      <Flex gridArea="header" backgroundColor="green.700">
        <Flex width="50%" alignContent="center" justifyContent="start">
          <Link href="/"> </Link>
          <img className="logo" src="/logo.png" alt=""></img>
        </Flex>

        <Flex
          width="40%"
          gridArea="menu"
          alignItems="center"
          justifyContent="flex-end"
        >
          <ul className="menu">
            <Flex>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">A Empresa</Link>
              </li>
              <li>
                <Link href="#">Serviços</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </Flex>
          </ul>
        </Flex>
      </Flex>

      <div gridArea="content" className="background">
        <div className="layer">
          <Flex justifyContent="center" alignItems="center" height="70%">
            <Heading color="white" fontSize="80px">
              <Typical
                steps={["SEU SERVIÇO COM A MELHOR QUALIDADE", 2000]}
                loop={Infinity}
              />
            </Heading>
          </Flex>
        </div>
      </div>

      <Flex
        className="initialContent"
        gridArea="initialContent"
        justifyContent="center"
        backgroundColor="#129e38"
      >
        {/* Card de Descrição */}

        <Flex justifyContent="center" flexDirection="column">
          <Flex width="80%" justifyContent="center" flexDirection="column">
            <Text
              textAlign="center"
              color="white"
              fontWeight="bold"
              fontSize="2rem"
            >
              QUALIDADE
            </Text>
            <Text color="white" fontSize="1.5rem" textAlign="center">
              Busca diária pela excelência no produto final.{" "}
            </Text>
          </Flex>
        </Flex>
        <Flex className="separatorVertical"></Flex>
        {/* Card de Descrição */}

        <Flex align="center" justifyContent="center" flexDirection="column">
          <Flex width="80%" justifyContent="center" flexDirection="column">
            <Text
              textAlign="center"
              color="white"
              fontWeight="bold"
              fontSize="2rem"
            >
              ASSISTÊNCIA
            </Text>
            <Text color="white" fontSize="1.5rem" textAlign="center">
              Oferecemos assistência técnica especializada em campo.
            </Text>
          </Flex>
        </Flex>
        <Flex className="separatorVertical"></Flex>
        {/* Card de Descrição */}

        <Flex align="center" justifyContent="center" flexDirection="column">
          <Flex width="80%" justifyContent="center" flexDirection="column">
            <Text
              textAlign="center"
              color="white"
              fontWeight="bold"
              fontSize="2rem"
            >
              AGILIDADE
            </Text>
            <Text color="white" fontSize="1.5rem" textAlign="center">
              Agilidade é necessária para um retorno rápido ao nosso cliente.
            </Text>
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
            <img
              src="/fabricação e monteagem de estrutura-metalica .jpg"
              alt=""
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
            <img
              src="/fabricação e monteagem de estrutura-metalica .jpg"
              alt=""
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
            <img
              src="/fabricação e monteagem de estrutura-metalica .jpg"
              alt=""
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

      <Flex
        justifyContent="center"
        flexDirection="column"
        gridArea="footer"
        backgroundColor="#129e38"
        height="25vh"
      >
        <Flex justifyContent="center" className="logoFooter">
          <img src="/logo.png" alt=""></img>
        </Flex>
        <Flex justifyContent="center">
          <Flex className="infoFooter" flexDirection="column">
            <Text>(64)99618-7103 / (64)99342-7147</Text>
            <Text>goias.montagem@gmail.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
}
