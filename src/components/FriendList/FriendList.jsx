import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { FriendGallery } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendGallery>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />   
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