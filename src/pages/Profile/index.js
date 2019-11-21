import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('O campo email é obrigatório'),
  avatar_id: Yup.number(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field.required('Campo obrigatório').min(6, 'Mínimo 6 caracteres')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Campo obrigatório')
          .oneOf([Yup.ref('password')], 'Senhas não conferem')
      : field
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua senha" />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua nova senha"
        />
        <button type="submit">Atualizar</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
