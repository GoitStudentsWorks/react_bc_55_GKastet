import { useDispatch, useSelector } from 'react-redux';

import { selectToken, selectTransactions } from 'redux/selectors';

import { makerDasboardTab } from 'helpers/helpers';

import { Paper, Table, TableCell, TableContainer } from '@mui/material';
import { deleteTransactionThunk } from 'redux/Thunks/TransactionsThunk';
import {
  BtnCont,
  BtnDelete,
  BtnEdit,
  BtnIcon,
  HeadRow,
  TableBodySt,
  TableHeadSt,
  TableRowStyled,
} from './TransactionsListStyled';
import { toggleShowModal } from 'redux/modal/modalSlice';

export const TransactionsList = () => {
  const tokenTrans = useSelector(selectToken);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  

  // const handleOnClick = evt => {

  //   dispatch(editTransactionThunk());
  // };

  const handleOnClick = e => {
      dispatch(toggleShowModal(e.currentTarget.name));
  };

  // ==========DELETE TRANS
  const handleClickDelete = transactionId => {
    const dataEdit = {
      id: transactionId,
    };
    // const dataEdit = {
    //   id: '2b3b84b1-97b5-49ed-9ed5-ebba5197b66b',
    //   transactionDate: '2023-01-23',
    //   type: 'INCOME',
    //   categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    //   comment: 'string',
    //   amount: 25,
    // };

    // const dataEx = {
    //   transactionDate: "2023-01-23",
    // type: "EXPENSE",
    // categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    // comment: "string",
    // amount: -5}
    console.log('Token:', tokenTrans);
    dispatch(deleteTransactionThunk({ dataEdit, transactionId }));
  };

  // ============================ TABLE+++++++++++

  const rows = makerDasboardTab(transactions).rows;
  const columns = makerDasboardTab(transactions).columns;
  // const rows = transactions.transactions?.map(
  //   ({ transactionDate, type, categoryId, comment, amount, id }) => {
  //     return {
  //       date: transactionDate,
  //       type: type === 'INCOME' ? '+' : '-',
  //       category: categoryId,
  //       comment,
  //       sum: amount,
  //       id,
  //     };
  //   }
  // );

  // const columns = columnsDashboardTab;

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          maxWidth: '715px',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              background: 'transparent',
            }}
          >
            <TableHeadSt>
              <HeadRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ maxWidth: column.maxWidth }}
                    sx={{
                      borderBottom: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </HeadRow>
            </TableHeadSt>
            <TableBodySt>
              {rows.map(row => {
                return (
                  <TableRowStyled
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                  >
                    {columns.map((column, idx) => {
                      const value = row[column.id];

                      return idx === columns.length - 1 ? (
                        <BtnCont
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderBottom: 'none',
                          }}
                        >
                          <BtnEdit type="button" name='edit' onClick={handleOnClick}>
                            <BtnIcon sx={{ fontSize: 18 }} />
                          </BtnEdit>
                          {/* <ModalEditTransactions /> */}
                          <BtnDelete
                            id={row.id}
                            type="button"
                            onClick={() => handleClickDelete(row.id)}
                          >
                            Delete
                          </BtnDelete>
                        </BtnCont>
                      ) : (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderBottom: 'none',
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRowStyled>
                );
              })}
            </TableBodySt>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
