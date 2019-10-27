import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import { signOut } from '~/store/modules/auth/actions';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile, SignOut } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meetapp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Hussein Hallak"
            />
          </Profile>

          <SignOut type="button" onClick={handleSignOut}>
            <FaPowerOff />
            Sair
          </SignOut>
        </aside>
      </Content>
    </Container>
  );
}
