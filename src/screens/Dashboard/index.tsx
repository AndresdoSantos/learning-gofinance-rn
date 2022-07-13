import React from 'react';
import { HightlightCard } from '../../components/HightlightCard';

import { 
  Container, 
  Header, 
  HightlightCards, 
  LogoutIcon, 
  Photo, 
  User, 
  UserGreeting, 
  UserInfo, 
  UserName, 
  UserWrapper 
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/AndresdoSantos.png' }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          
          <LogoutIcon />
        </UserWrapper>
      </Header>

      <HightlightCards horizontal showsHorizontalScrollIndicator={false}>
        <HightlightCard />
        <HightlightCard />
        <HightlightCard />
      </HightlightCards>
    </Container>
  );
}
