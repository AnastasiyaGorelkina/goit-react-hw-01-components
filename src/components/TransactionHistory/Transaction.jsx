import PropTypes from 'prop-types';
import { TransactionList, TransactionItem } from './TransactionHistory.styled';

export const Transaction = ({id, type, amount, currency}) => {
    return (
    <TransactionList key={id}>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
    </TransactionList>
    )
};

Transaction.protoType = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}