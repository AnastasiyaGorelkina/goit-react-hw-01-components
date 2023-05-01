import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #bfe7e5f8;
  border-radius: 15px;
  box-shadow: 8px 9px 5px 0px rgba(142, 255, 230, 0.43);
  margin-top: 50px;
  overflow: hidden;
`;

export const TitleUploadStats = styled.h2`
margin: 30px 0 15px 0;

color: #6fdbe7;
`;

export const StatLiist = styled.ul`
display: flex;
margin: 0;
width: 100vh;
padding: 0;

`;

export const StatLiistItem = styled.li`
display: flex;
flex-direction: column;
padding:15px 11px;
`;
 
export const StatsName = styled.span`
font-weight: 600;
`;

export const StatsPercentage = styled.span`
font-weight: 400;
`;