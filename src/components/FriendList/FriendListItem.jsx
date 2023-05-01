import PropTypes from 'prop-types';

import { FriendGalleryItem, FriendStatus, FriendAvatar, FriendName, FriendsContainer } from './FriendList.styled';

function getStatus(status) {
  return status ? 'green' : 'red';
};

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <FriendGalleryItem key={id}>
        <FriendsContainer>
        <FriendStatus style={{
          backgroundColor: getStatus(isOnline),
        }}>{isOnline}</FriendStatus>
        <FriendAvatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
          </FriendsContainer>
     </FriendGalleryItem>
    ); 
};

FriendListItem.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};