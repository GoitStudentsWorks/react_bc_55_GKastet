import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import StyledContainer from 'components/Container/StyledContainer';
import SideBar from 'components/SideBar/SideBar';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React from 'react';

function DashboardPage() {
  return (
    <StyledContainer>
      <SideBar />
      <TransactionsList />
      <ButtonAddTransactions />
    </StyledContainer>
  );
}
export default DashboardPage;
