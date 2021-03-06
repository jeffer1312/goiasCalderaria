import { useState } from 'react';
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
import axios from 'axios';
export default function contato() {
  const initialFieldValues = {
    name: '',
    email: '',
    mensagem: '',
  };

  const [values, setValues] = useState(initialFieldValues);
  const validate = () => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    axios.post('./api/email', {
      values,
      // email: values.email,
      // nome: values.name,
      // mensagem: values.mensagem,
    });
  };
  const handleChange = e => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <Flex gridArea='content' className='container' flexDirection='column'>
      <Flex flexWrap='wrap' justifyContent='space-between'>
        <Flex
          width={{
            base: '100%',
            md: '100%',
            lg: '60%',
            xl: '60%',
          }}
          flexDirection='column'
        >
          <Flex width='100%' flexDirection='column'>
            <Heading
              textAlign='left'
              marginTop='60px'
              fontSize='4xl'
              color='rgb(130,130,130)'
            >
              Entre em contato conosco
            </Heading>

            <Text
              fontSize={{
                base: '1.2rem',
                md: '1.3rem',
                lg: '1.3rem',
                xl: '1.5rem',
              }}
            >
              A Goias Caldeiraria está localizada na cidade de Mineiros – GO,
              entre em contato e retornaremos o mais breve possível.
            </Text>
          </Flex>

          <Flex>
            <Formik initialValues={{}}>
              {props => (
                <Form onSubmit={handleFormSubmit}>
                  <Field name='name'>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor='name'>Email</FormLabel>
                        <Input
                          width={{
                            base: '94vw',
                            md: '94vw',
                            lg: '550px',
                            xl: '600px',
                          }}
                          {...field}
                          id='name'
                          onChange={handleChange}
                          placeholder='nome'
                          value={values.name}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name='email' validate={validate}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                          width={{
                            base: '94vw',
                            md: '94vw',
                            lg: '550px',
                            xl: '600px',
                          }}
                          {...field}
                          id='email'
                          onChange={handleChange}
                          placeholder='email'
                          value={values.email}
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
                          width={{
                            base: '94vw',
                            md: '94vw',
                            lg: '550px',
                            xl: '600px',
                          }}
                          {...field}
                          id='mensagem'
                          onChange={handleChange}
                          placeholder='mensagem'
                          value={values.mensagem}
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
        <Flex
          width={{
            base: '100%',
            md: '100%',
            lg: '40%',
            xl: '40%',
          }}
          paddingTop='4%'
          justifyContent='center'
        >
          <Flex width='100%' className='box-contato'>
            <Flex width='100%' flexDirection='column'>
              <Flex justifyContent='center' className='title-box-empresa'>
                <Flex flexDirection='column' justifyContent='center'>
                  <Text
                    padding='8px'
                    fontSize={{
                      base: '1.5rem',
                      md: '1.2rem',
                      lg: '1.8rem',
                      xl: '1.8rem',
                    }}
                  >
                    <FaMailBulk />
                  </Text>
                </Flex>
                <Flex flexDirection='column' justifyContent='center'>
                  <Text
                    padding='8px'
                    fontSize={{
                      base: '1.5rem',
                      md: '1.2rem',
                      lg: '1.8rem',
                      xl: '1.8rem',
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
                  base: '1.5rem',
                  md: '1.2rem',
                  lg: '1.8rem',
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
                  base: '1.5rem',
                  md: '1.2rem',
                  lg: '1.8rem',
                  xl: '1.8rem',
                }}
              >
                <Text> Goias Caldeiraria </Text>
              </Flex>
              {/* topicos box */}

              {/* topicos box */}

              <Flex
                paddingLeft='1%'
                fontSize={{
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
                  base: '1.2rem',
                  md: '1.2rem',
                  lg: '1rem',
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
      <Flex
        margin='3% 0'
        width='100%'
        height={{
          base: '400px',
          md: '400px',
          lg: '500px',
          xl: '500px',
        }}
        className='mapa-localizacao'
      >
        <Flex width='100%' flexDirection='column' justifyContent='center'>
          <Flex justifyContent='center'>
            <Text fontSize='3rem'>Mapa</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
