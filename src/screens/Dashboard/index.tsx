import React from 'react';

import { HightlightCard } from '../../components/HightlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

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
  UserWrapper,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataList extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataList[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/05/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Café da manhã',
      amount: 'R$ 12.56',
      category: { name: 'Vendas', icon: 'coffee' },
      date: '13/05/2022',
    },
    {
      id: '3',
      type: 'positive',
      title: 'Desenvolvimento de API',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/05/2022',
    },
  ];

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
        <HightlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.452,20"
          lastTransaction="Última entrada dia 13 de abril de 2022"
        />
        <HightlightCard
          type="down"
          title="Saídas"
          amount="R$ 17.452,20"
          lastTransaction="Última entrada dia 13 de abril de 2022"
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$ 17.452,20"
          lastTransaction="Última entrada dia 13 de abril de 2022"
        />
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
