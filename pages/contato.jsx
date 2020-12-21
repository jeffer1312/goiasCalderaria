import { Flex, List, ListItem, Heading, Text } from "@chakra-ui/core";

import { Map, GoogleApiWrapper } from "google-maps-react";
import Image from "next/image";
import MapContainer from "./map";

export default function contato() {
  return (
    <Flex justifyContent="center" gridArea="content">
      <Flex
        flexDirection="column"
        justifyContent="center"
        className="container"
      >
        <Flex width="100%" flexDirection="column">
          <Heading
            textAlign="left"
            marginTop="60px"
            fontSize="4xl"
            color="rgb(130,130,130)"
          >
            Fale Conosco
          </Heading>
          <Flex>
            <List marginLeft="1%">
              <ListItem> Rua nv9 qd15 lt 25 </ListItem>
              <ListItem> Bairo Nova Republica </ListItem>
              <ListItem> Mineiros - GO </ListItem>
              <ListItem> (64) 3020-1053</ListItem>
              <ListItem> (64)64 99653-5160</ListItem>
              <ListItem> email:jeffer1312.com</ListItem>
            </List>
          </Flex>
        </Flex>

        {/* <Flex width="50%" justifyContent="center">
          <Flex>
            <form className="formularioContato" method="POST">
              <input placeholder="nome" type="text" name="nome" id="nome" />
              <input placeholder="email" type="email" name="email" id="email" />
              <input
                placeholder="assunto"
                type="text"
                name="assunto"
                id="assunto"
              />
              <textarea
                placeholder="escreva sua mensagem"
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="enviar" />
            </form>
          </Flex>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
