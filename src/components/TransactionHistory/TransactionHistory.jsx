import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TransactionTable, TransactionThead, TransactionlistName, TransactionItemName, TransactionTbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
  <TransactionThead>
    <TransactionlistName>
      <TransactionItemName>Type</TransactionItemName>
      <TransactionItemName>Amount</TransactionItemName>
      <TransactionItemName>Currency</TransactionItemName>
    </TransactionlistName>
  </TransactionThead>

    <TransactionTbody>
     {items.map(({ id, type, amount, currency }) => (
        <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
    ))}
    </TransactionTbody>
</TransactionTable>
    )
};

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(PropTypes.object)
};