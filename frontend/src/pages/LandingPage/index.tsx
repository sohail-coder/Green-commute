import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import LandingPageTemplate from 'components/templates/LandingPageTemplate';
import Image from 'components/atoms/Image';
import Logo from 'assets/logos/GreenCommuteLogoGreen.png';
import stay from 'assets/images/stay.png';
import work from 'assets/images/work.png';
import jobs from 'assets/images/jobs.png';
import EntryStepper from 'components/organisms/Stepper';
import theme from 'theme/index';
import {
  TEXT,
  SKIP,
  LOCATIONS,
  PREFFERED_JOBS,
  AQITEXT,
  SKILLTEXT,
  SKILLAQITEXT,
} from '../../constants/constants';
import {
  getAqiByLocationName,
  getAqiByJobLocations,
} from 'components/services/LocationService';
import Aqi from '../../components/atoms/Aqi';

interface LocationProps {
  name: string;
  aqi: number;
}

const useStyles = makeStyles({
  hr: {
    width: '36px',
    height: '2px',
    backgroundColor: theme.palette.primary.contrastText,
    marginLeft: '12px',
    marginTop: '0',
  },
});
const ClearAllButton = styled(Button)({
  padding: '0px',
  borderRadius: '0px',
  height: '22px',
  width: 'fit-content',
});
const StyledBox = styled(Box)`
  padding-top: 15.52vw;
  padding-left: 10.7vw;
`;
const SubBox = styled(Box)`
  background-color: ${theme.palette.gradient?.light};
  padding-top: 2.4vw;
  padding-left: 7.3vw;
`;
const StepperContainer = styled(Box)`
  padding-top: 4.2vw;
`;
const TypoContainer = styled(Box)`
 padding-top: 4.2vw;
 width: 15vw;
 display: 'flex',
 alignItems: 'center',
 flexDirection: 'column',
 gap: '32px',
`;
const AqiContainer = styled(Box)`
  margin-top: 30px;
`;
const TypoBox = styled(Box)`
  margin-top: 60px;
  margin-left: 32px;
`;
function LandingPage() {
  const classes = useStyles();
  let typoText = '';
  let element;
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const navigate = useNavigate();
  const [location, setLocation] = React.useState<string>('');
  const [options, setOptions] = React.useState<string[]>([]);
  const [preferredJobs, setPreferredJobs] = React.useState<string[]>([]);
  const [preferredLocations, setPreferedLocations] = React.useState<string[]>(
    []
  );
  const getOptions = () => {
    if (activeStep === 1) {
      setOptions(LOCATIONS);
    } else if (activeStep === 2) {
      setOptions(PREFFERED_JOBS);
    }
  };
  const [locationObject, setLocationObject] = React.useState<LocationProps>({
    name: '',
    aqi: 0,
  });
  const [jobLocation, setJobLocation] = React.useState<LocationProps[]>([]);
  React.useEffect(() => {
    getOptions();
  }, [activeStep]);
  const updateLocation = () => {
    const aqiPromise = getAqiByLocationName(location);
    aqiPromise.then((res: number) => {
      setLocationObject({
        name: location,
        aqi: res,
      });
    });
  };

  const updateJobLocation = () => {
    const jobLocationsPromise = getAqiByJobLocations(preferredLocations);
    jobLocationsPromise.then((res: LocationProps[]) => {
      setJobLocation(res);
    });
  };
  React.useEffect(() => {
    if (preferredLocations.length) updateJobLocation();
  }, [preferredLocations]);
  React.useEffect(() => {
    getLocationsAQI();
  }, [location]);
  const handleOptionsChange = (
    _e: React.ChangeEvent<HTMLInputElement>,
    values: React.SetStateAction<string[]>
  ) => {
    if (activeStep === 1) setPreferedLocations(values);
    else setPreferredJobs(values);
  };

  const handleChange = (e: any) => {
    setTimeout(() => updateLocation(), 1500);
    setLocation(e.target.value);
    getLocationsAQI();
  };
  const getLocationsAQI = () => {
    switch (activeStep) {
      case 0: {
        if (locationObject.name === '') {
          typoText = TEXT;
          element = <Image imageSource={stay}></Image>;
        } else {
          typoText = AQITEXT;
          element = <Aqi aqi={locationObject.aqi} />;
        }
        return element;
      }
      case 1: {
        {
          if (preferredLocations.length === 0) {
            typoText = TEXT;
            return <Image imageSource={work}></Image>;
          } else {
            typoText = AQITEXT;
            const loc = jobLocation.map((obj, key) => {
              return (
                <AqiContainer key={key} display="flex">
                  <Aqi aqi={obj.aqi} />
                  <TypoBox>
                    <Typography
                      variant="h2"
                      color={theme.palette.accent?.light}
                    >
                      {obj.name}
                    </Typography>
                  </TypoBox>
                </AqiContainer>
              );
            });

            return loc;
          }
        }
      }
      case 2: {
        if (preferredJobs.length === 0) {
          typoText = SKILLTEXT;
          element = <Image imageSource={jobs}></Image>;
        } else {
          typoText = SKILLAQITEXT;
          element = <Aqi aqi={1500} />;
        }
        return element;
      }
    }
  };
  const handleNext = () => {
    if (activeStep === 2)
      navigate('/find-jobs', { state: { userLocation: location } });
    else setActiveStep((step) => step + 1);
  };

  const handleBack = () => {
    setActiveStep((step) => step - 1);
  };

  const selectedOptions = () => {
    if (activeStep === 1) return preferredLocations;
    else return preferredJobs;
  };
  return (
    <>
      <LandingPageTemplate
        left={
          <>
            <SubBox data-testid="subBox">
              <Image imageSource={Logo}></Image>
              <StepperContainer>
                <EntryStepper
                  location={location}
                  activeStep={activeStep}
                  options={options}
                  handleChange={handleChange}
                  handleOptionsChange={handleOptionsChange}
                  selectedOptions={selectedOptions}
                  handleBack={handleBack}
                  handleNext={handleNext}
                />
              </StepperContainer>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginTop: '112px',
                  marginBottom: '',
                }}
              >
                <ClearAllButton data-testid="LandingPage">
                  <Typography variant="body1" color={'primary.300'}>
                    {SKIP}
                  </Typography>
                </ClearAllButton>
                <hr className={classes.hr} />
              </Box>
            </SubBox>
          </>
        }
        right={
          <StyledBox>
            {getLocationsAQI()}
            <TypoContainer>
              <Typography variant="h3">{typoText}</Typography>
            </TypoContainer>
          </StyledBox>
        }
      />
    </>
  );
}

export default LandingPage;
