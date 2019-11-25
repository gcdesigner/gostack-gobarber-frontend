import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';
import InputPassword from '~/components/InputPassword';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  avatar_id: Yup.number(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field.required('Password is required').min(6, '6 characters minimum')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Check password is required')
          .oneOf([Yup.ref('password')], 'Passwords do not match')
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

        <Input name="name" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="yout e-mail" />

        <hr />

        <InputPassword name="oldPassword" placeholder="Your password" />
        <InputPassword name="password" placeholder="Your new password" />
        <InputPassword
          name="confirmPassword"
          placeholder="Check your password"
        />

        <button className="btn" type="submit">
          Update
        </button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Logout GoBarber
      </button>
    </Container>
  );
}
