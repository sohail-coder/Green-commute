import React, { useState } from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import JobCard from 'components/molecules/JobCard';
import {
  CLEAR_ALL,
  HEADER_LOCATION,
  JOB_LIST,
  JOB_LIST_BASED_ON,
} from '../../../constants/constants';
import JobDescriptionCard from '../JobDescriptionCard';
import theme from 'theme/index';
import DeletableChip from 'components/atoms/Chip';
import { JobInfo } from '../SideNav';
import { getSelectedJobData } from 'components/services/JobsServices';

interface JobsListProps {
  searchData: JobInfo[];
  filterData: string[];
  onClick: () => void;
  onClearAllClick: () => void;
  savedStatus?: boolean;
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '16px',
  width: '41.801vw',
});

const ClearAllButton = styled(Button)({
  borderBottom: '2px solid',
  borderBottomColor: theme.palette.primary.contrastText,
  padding: '0px',
  borderRadius: '0px',
  height: '22px',
  width: '4.4vw',
});

const ChipGridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  height: '72px',
});
const JobsList = (props: JobsListProps) => {
  const handleClick = (id: number) => {
    setClick(!click);
    setJobId(id);
  };
  const [click, setClick] = useState<boolean>(false);
  const [jobId, setJobId] = useState<number>(1);

  const { searchData, filterData, onClick, savedStatus, onClearAllClick } =
    props;
  const selectedJobData: JobInfo = getSelectedJobData(searchData, jobId);
  console.log(selectedJobData);

  return (
    <Grid container direction={'column'} rowSpacing={{ md: 5 }}>
      {!savedStatus ? (
        <Grid item>
          <Typography variant="h3">{JOB_LIST}</Typography>
          <Typography variant="body2">{JOB_LIST_BASED_ON}</Typography>
        </Grid>
      ) : null}
      {!savedStatus && filterData.length > 1 ? (
        <Grid item>
          <ChipGridContainer container md={7}>
            <Grid
              item
              display={'flex'}
              flexDirection={'row'}
              flexWrap={'wrap'}
              gap={'8px'}
              md={10}
            >
              {filterData?.map((filter) => (
                <DeletableChip
                  key={filter}
                  label={filter}
                  handleDelete={onClick}
                />
              ))}
            </Grid>
            {!savedStatus ? (
              <Grid item>
                <ClearAllButton onClick={onClearAllClick}>
                  <Typography variant="body1" color={'primary.300'}>
                    {CLEAR_ALL}
                  </Typography>
                </ClearAllButton>
              </Grid>
            ) : null}
          </ChipGridContainer>
        </Grid>
      ) : (
        <div data-testid="no-filters"></div>
      )}
      <Grid item display={'flex'} flexDirection="row" gap={'16px'}>
        <StyledBox>
          {searchData.map((jobData) => (
            <JobCard
              key={jobData.company.name}
              company={jobData.company.name}
              title={jobData.title}
              location={jobData.location.address}
              cardType={'rectangle'}
              companyLogo={jobData.company.image}
              postedDate={jobData.postedDate}
              transport={jobData.transports}
              onClick={() => handleClick(Number(jobData.id))}
            ></JobCard>
          ))}
        </StyledBox>
        {!savedStatus ? (
          <Box>
            <JobDescriptionCard
              id={Number(selectedJobData.id)}
              jobTitle={selectedJobData.title}
              companyName={selectedJobData.company.name}
              jobLocation={selectedJobData.location.name}
              jobPostedDate={selectedJobData.postedDate}
              sourceLocation={HEADER_LOCATION}
              companyLogo={selectedJobData.company.image}
            />
          </Box>
        ) : null}
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};
export default JobsList;
