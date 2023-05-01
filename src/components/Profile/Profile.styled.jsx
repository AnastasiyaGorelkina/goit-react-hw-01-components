import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #bfe7e5f8;
  border-radius: 15px;
  box-shadow: 8px 9px 5px 0px rgba(142, 255, 230, 0.43);
  margin-top: 50px;
  padding: 40px;
  `;

export const DescriptionUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AvatarImg = styled.img`
  display: block;
`;

export const UserName = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 14px;
text-transform: uppercase;
margin-top: 50px;
color: #6fdbe7;
`;

export const UserText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 14px;
margin-top: 50px;
color: #6fdbe785;
`;

export const StatsList = styled.ul`
display: flex;
justify-content: space-between;
margin-bottom: 0;
padding: 0;
width: 100vh;

`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`;

export const StatsName = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 14px;
margin-top: 20px;
color: #6fdbe785;
`;

export const StatsQuantity = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 14px;
margin-top: 20px;
color: #6fdbe785;
`;


