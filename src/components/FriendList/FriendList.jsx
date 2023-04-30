import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { FriendGallery, FriendGalleryItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendGallery>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendGalleryItem key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </FriendGalleryItem>
            ))}
        </FriendGallery>
    );
};

FriendList.protoType = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired
        })
    )
};