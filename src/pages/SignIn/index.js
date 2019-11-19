import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('Informe a senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua Senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratuita!</Link>
      </Form>
    </>
  );
}
