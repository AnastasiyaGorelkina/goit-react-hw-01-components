import styled from '@emotion/styled';

export const FriendGallery = styled.ul`
list-style: none;
  margin: 0 auto;
  padding: 0;
  margin-top: 50px;
`;

export const FriendGalleryItem = styled.li`
  margin: 0 ;
  width: 300px;
  justify-content: space-around;
  border: 2px solid #bfe7e5f8;
  border-radius: 15px;
  box-shadow: 8px 9px 5px 0px rgba(142, 255, 230, 0.43);
  margin-top 25px;
  `;

export const FriendsContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  height: 100px;
`;
export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
display: block;
`;

export const FriendName = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 14px;
margin-top: 50px;
color: #6fdbe785;
`;