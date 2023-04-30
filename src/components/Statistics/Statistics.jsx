import PropTypes from 'prop-types';

import { Section, TitleUploadStats, StatLiist, StatLiistItem, StatsName, StatsPercentage } from './Statistics.styled';

export const Statistics = ({ title, stats}) => {
    return (
<Section>
    
    {title && <TitleUploadStats>{title}</TitleUploadStats>}
     
  <StatLiist>
    {stats.map(({ id, label, percentage }) => {
        return (
            <StatLiistItem key={id}>
                <StatsName>{label}</StatsName>
                <StatsPercentage>{percentage}%</StatsPercentage>
            </StatLiistItem>
        );
    })}
  </StatLiist>
</Section>
    );
};

Statistics.protoType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};
