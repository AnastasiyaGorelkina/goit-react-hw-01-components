import PropTypes from 'prop-types';
import { ProfileCard, DescriptionUser, AvatarImg, UserName, UserText, StatsList, StatsItem, StatsName, StatsQuantity } from './Profile.styled';

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

  <StatsList>
    <StatsItem>
      <StatsName>Followers</StatsName>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsName>Views</StatsName>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsName>Likes</StatsName>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
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