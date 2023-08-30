import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import JobCard, { transport } from 'components/molecules/JobCard';
import {
  RECOMMENDED,
  RECOMMENDED_BASED_0N,
} from '../../../constants/constants';

interface JobData {
  company: string;
  title: string;
  location: string;
  companyLogo: string;
  postedDate: string;
  transport: transport[];
}
interface RecommendedJobProps {
  jobDataList: JobData[];
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '72.353vw',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px',
  alignItems: 'center',
});
const RecommendedJobs = (props: RecommendedJobProps) => {
  const { jobDataList } = props;
  return (
    <Grid container direction={'column'} rowSpacing={{ md: 5 }}>
      <Grid item>
        <Typography variant="h3">{RECOMMENDED}</Typography>
        <Typography variant="body2">{RECOMMENDED_BASED_0N}</Typography>
      </Grid>
      <Grid item>
        <StyledBox>
          {jobDataList.map((jobData) => (
            <JobCard
              key={jobData.company}
              company={jobData.company}
              title={jobData.title}
              location={jobData.location}
              cardType={'square'}
              companyLogo={jobData.companyLogo}
              postedDate={jobData.postedDate}
              transport={jobData.transport}
            ></JobCard>
          ))}
        </StyledBox>
      </Grid>
    </Grid>
  );
};
export default RecommendedJobs;
