import {
  Flex,
  List,
  ListItem,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
} from '@chakra-ui/core';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Map, GoogleApiWrapper } from 'google-maps-react';
import Image from 'next/image';
import MapContainer from './map';
import { FaBriefcase, FaCheck, FaMailBulk } from 'react-icons/fa';

export default function contato() {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  return (
    <Flex gridArea='content' className='container' flexDirection='column'>
      <Flex>
        {/* <Flex width='80%'>
        <form>
          <FormControl id='Nome'>
            <FormLabel>Nome</FormLabel>
            <Input type='nome' />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='mensagem'>
            <FormLabel>Mensagem</FormLabel>
            <Textarea type='mensagem' />
          </FormControl>
        </form>
      </Flex> */}
        <Flex width='80%' flexDirection='column'>
          <Flex width='100%' flexDirection='column'>
            <Heading
              textAlign='left'
              marginTop='60px'
              fontSize='4xl'
              color='rgb(130,130,130)'
            >
              Entre em contato conosco
            </Heading>

            <Text>
              A Goias Caldeiraria está localizada na cidade de Mineiros – GO,
              entre em contato e retornaremos o mais breve possível.
            </Text>
          </Flex>

          <Flex>
            <Formik
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {props => (
                <Form>
                  <Field name='name'>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor='name'>Nome</FormLabel>
                        <Input
                          width='600px'
                          {...field}
                          id='name'
                          placeholder='nome'
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='email' validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                          width='600px'
                          {...field}
                          id='name'
                          placeholder='email'
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='mensagem'>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor='mensagem'>Mensagem</FormLabel>
                        <Textarea
                          width='600px'
                          {...field}
                          id='name'
                          placeholder='email'
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    className='BotaoSubmit'
                    mt={4}
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
        </Flex>
        {/* Box  */}
        <Flex width='40%' paddingTop='4%' justifyContent='center'>
          <Flex width='100%' className='box-contato'>
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
                    <FaMailBulk />
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
                    Informações adicionais
                  </Text>
                </Flex>
              </Flex>
              {/* topicos box */}
              <Flex
                justifyContent='center'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1.8rem',
                }}
                borderBottom='2px solid #ccc'
              >
                <Text> Contato </Text>
              </Flex>
              {/* topicos box */}

              {/* topicos box */}
              <Flex
                fontWeight='bold'
                padding='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1.2rem',
                }}
              >
                <Text> Goias Caldeiraria </Text>
              </Flex>
              {/* topicos box */}

              {/* topicos box */}

              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text>Rua SB13, qd 42 lote 19 </Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> Loteamento Solar Betel </Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> Mineiros - GO </Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> 75830-000 </Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> (64) 99618-7103</Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> (64) 99973-3171 </Text>
              </Flex>
              {/* topicos box */}
              {/* topicos box */}
              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '0.5rem',
                  md: '.6rem',
                  lg: '.8rem',
                  xl: '1rem',
                }}
              >
                <Text> email:goias.montagem@gmail.com </Text>
              </Flex>
              {/* topicos box */}
            </Flex>
          </Flex>
        </Flex>
        {/* Box  */}
      </Flex>
      <Flex width='100%' className='mapa-localizacao'>
        <Flex width='100%' flexDirection='column' justifyContent='center'>
          <Flex justifyContent='center'>
            <Text fontSize='3rem'>Mapa</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
