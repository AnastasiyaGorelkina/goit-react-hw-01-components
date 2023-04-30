import PropTypes from 'prop-types';
import { ProfileCard, DescriptionUser, AvatarImg, UserName, UserText } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
<ProfileCard>
  <DescriptionUser>
    <AvatarImg 
      src={avatar}
      alt={username}
      width="150px"
    />
    <UserName>{username}</UserName>
    <UserText>@{tag}</UserText>
    <UserText>{location}</UserText>
  </DescriptionUser>

  <statsList>
    <statsItem>
      <statsName>Followers</statsName>
      <statsQuantity>{stats.followers}</statsQuantity>
    </statsItem>
    <statsItem>
      <statsName>Views</statsName>
      <statsQuantity>{stats.views}</statsQuantity>
    </statsItem>
    <statsItem>
      <statsName>Likes</statsName>
      <statsQuantity>{stats.likes}</statsQuantity>
    </statsItem>
  </statsList>
</ProfileCard>
    );
};

Profile.protoType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}