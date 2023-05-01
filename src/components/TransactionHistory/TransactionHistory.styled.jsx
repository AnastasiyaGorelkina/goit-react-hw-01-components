import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border: 2px solid #bfe7e5f8;
  border-radius: 15px;
  box-shadow: 8px 9px 5px 0px rgba(142, 255, 230, 0.43);
  margin-top: 50px;
  overflow: hidden;
`;

export const TransactionThead = styled.thead`
background: #303136;
`;

export const TransactionlistName = styled.tr`
background: #303136;
`;

export const TransactionItemName = styled.th`
font-size: 25px;
  font-weight: normal;
  background: #b9c9fe;
  border-top: 4px solid #aabcfe;
  border-bottom: 1px solid white;
  color: #039;
  padding: 15px;
  text-align: center;
`;

export const TransactionTbody = styled.tbody`

`;

export const TransactionList = styled.tr`
&: nth-child(even) {
    background: #8fec8f;
    color: black;
  }
`;

export const TransactionItem = styled.td`
font-size: 24px;
  border-bottom: 1px solid white;
  border-top: 1px solid transparent;
  padding: 15px 100px;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    background: #e8edaa;
    box-shadow: 20px 10px 10px 10px;
  }
`;




