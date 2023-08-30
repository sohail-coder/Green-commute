import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button as MuiButton,
  styled,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'components/atoms/Image';
import Button from 'components/atoms/Button';
import {
  ABOUT_THE_COMPANY,
  ABOUT_THE_COMPANY_CONTENT1,
  ABOUT_THE_COMPANY_CONTENT2,
  DESCRIPTION,
  DESCRIPTION_CONTENT,
  COMMON_ROUTES,
  SEE_MORE,
  SOMETHING_WENT_WRONG,
  GREEN_COMMUTE_ROUTES,
} from '../../../constants/constants';
import GreenCommuteButton from 'components/atoms/GreenCommuteButtons';
import CommonRoutes from 'components/molecules/CommonRoutes';
import TransportTabs from '../TransportTabs';
import theme from 'theme/index';
import {
  addToSavedJobs,
  getSavedJobStatus,
  removeFromSavedJobs,
} from 'components/services/SavedJobs';
import {
  addToAppliedobs,
  getAppliedJobStatus,
} from 'components/services/AppliedJobsService';
import FileUpload from '../FileUpload';

interface JobDescriptionProps {
  id: number;
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  jobPostedDate: string;
  sourceLocation: string;
}

const MainGrid = styled(Grid)`
  background-color: white;
  width: 30.7vw;
  border-radius: 12px;
`;
const HeaderGrid = styled(Grid)`
  padding: 24px 22px;
  justify-content: space-between;
`;

const LogoGrid = styled(Grid)`
  padding: 3px;
`;

const ButtonsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  width: 15.2vw;
  gap: 16px;
`;
const Divider = styled(Box)`
  width: 26.5vw;
  height: 1px;
  background-color: ${theme.palette.grey[400]};
  margin: 0px 22px;
`;

const TypographyGrid = styled(Grid)`
  padding: 24px;
`;

const TypographyItem = styled(Typography)`
  margin-top: 24px;
  margin-bottom: 8px;
`;

const GreenCommuteGrid = styled(Grid)`
  padding: 27px 20px 0px 20px;
`;
const GreenCommuteBox = styled(Box)`
  display: flex;
  padding-bottom: 12px;
  align-items: center;
`;

const BackButton = styled(MuiButton)`
  color: black;
  height: 20px;
  minwidth: 0px;
`;
const JobDescriptionCard = (props: JobDescriptionProps) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    jobPostedDate,
    sourceLocation,
  } = props;

  const [isSaved, changeState] = useState<boolean>();
  const [isApplied, changeAppliedState] = useState<boolean>();
  const [displayDescription, changeDisplayState] = useState<boolean>(true);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: any) => {
    addToAppliedobs(id);
    setSuccess((val) => !val);
  };

  const [display, setDisplay] = useState<boolean>(true);

  const handleClick = () => {
    setDisplay(!display);
    setModalStatus(!modalStatus);
  };

  const SaveClickHandle = () => {
    if (!isSaved) {
      addToSavedJobs(id);
    } else {
      removeFromSavedJobs(id);
    }
    changeState(!isSaved);
  };

  const ApplyClickHandle = () => {
    console.log('apply click handle invoked');
    changeAppliedState(!isApplied);
    setModalStatus(!modalStatus);
  };

  const DisplayClickHandle = () => {
    changeDisplayState(!displayDescription);
  };

  useEffect(() => {
    getSavedJobStatus(id)
      .then((res: boolean) => {
        changeState(res);
      })
      .catch(() => {
        console.log(SOMETHING_WENT_WRONG);
      });
    getAppliedJobStatus(id)
      .then((res: boolean) => {
        changeAppliedState(res);
      })
      .catch(() => {
        console.log(SOMETHING_WENT_WRONG);
      });
  }, [id]);
  return (
    <>
      {!modalStatus ? (
        <MainGrid container>
          <Grid item xs={12}>
            <HeaderGrid container>
              <LogoGrid item padding={'3px'}>
                <Image
                  imageSource={require(`assets/logos/${companyLogo.replace(
                    /'/g,
                    ''
                  )}.png`)}
                />
              </LogoGrid>
              <Grid item direction={'column'}>
                <Typography variant="subtitle1">{jobTitle}</Typography>
                <Typography variant="caption1">{companyName}</Typography>
                <br></br>
                <Typography variant="caption1">{jobLocation}</Typography>
                <br></br>
                <Typography variant="caption" fontWeight="bold">
                  {jobPostedDate}
                </Typography>
                <ButtonsBox>
                  <div data-testid="save-button">
                    <Button
                      variant={'outlined'}
                      label={!isSaved ? 'Save' : 'Unsave'}
                      width="7.321vw"
                      height="32px"
                      typographyVariant={'caption'}
                      labelColor="primary.300"
                      onClick={SaveClickHandle}
                    />
                  </div>
                  <div data-testid="apply-button">
                    <Button
                      variant={'contained'}
                      label={!isApplied ? 'Apply' : 'Applied'}
                      width="7.321vw"
                      height="32px"
                      typographyVariant={'caption'}
                      labelColor={theme.palette.white?.main}
                      onClick={ApplyClickHandle}
                    />
                  </div>
                </ButtonsBox>
              </Grid>
              <Grid item>
                <MoreHorizIcon />
              </Grid>
            </HeaderGrid>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          {displayDescription ? (
            <Box>
              <TypographyGrid item>
                <Typography variant="body1">{DESCRIPTION}</Typography>
                <Typography variant="body2">{DESCRIPTION_CONTENT}</Typography>
                <TypographyItem>{ABOUT_THE_COMPANY}</TypographyItem>
                <Typography variant="body2">
                  {ABOUT_THE_COMPANY_CONTENT1}
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: '12px', marginBottom: '8px' }}
                  >
                    {ABOUT_THE_COMPANY_CONTENT2}
                    <Typography
                      variant="body1"
                      color={'primary.300'}
                      sx={{ display: 'inline' }}
                    >
                      {SEE_MORE}
                    </Typography>
                  </Typography>
                </Box>
              </TypographyGrid>
              <Grid item>
                <GreenCommuteButton
                  label={GREEN_COMMUTE_ROUTES}
                  endIcon={<ArrowForwardIcon />}
                  width="30.7vw"
                  onClick={DisplayClickHandle}
                />
              </Grid>
            </Box>
          ) : (
            <GreenCommuteGrid item>
              <GreenCommuteBox>
                <BackButton
                  variant="text"
                  startIcon={<ArrowBackIcon />}
                  onClick={DisplayClickHandle}
                ></BackButton>
                <Typography>{COMMON_ROUTES}</Typography>
              </GreenCommuteBox>
              <CommonRoutes from={sourceLocation} to={jobLocation} />
              <TransportTabs />
            </GreenCommuteGrid>
          )}
        </MainGrid>
      ) : (
        <FileUpload
          open={true}
          handleChange={handleChange}
          success={success}
          display={display}
          handleClick={handleClick}
        />
      )}
    </>
  );
};
export default JobDescriptionCard;
