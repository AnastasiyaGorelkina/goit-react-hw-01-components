import PropTypes from 'prop-types';

import { FriendGalleryItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
     <FriendGalleryItem>
        <FriendStatus>{isOnline}</FriendStatus>
        <FriendAvatar src={avatar} alt={name} width="48" />
        <FriendName>{name}</FriendName>
     </FriendGalleryItem>
    ); 
};

FriendListItem.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};