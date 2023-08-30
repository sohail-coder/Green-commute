import React from 'react';
import { Stack, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import theme from 'theme/index';
interface TemplateProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
const useStyles = makeStyles({
  stack: {
    height: window.innerHeight,
  },
});

const LeftContainer = styled(Box)`
width: 60vw;
height: auto;
background: white;
align-items: center,
display: flex,
flex-direction: column,
`;
const RightContainer = styled(Box)`
width: 40vw;
height: auto;
background: ${theme.palette.secondary.dark};
align-items: center,
justifyContent: center,
display: flex,
`;

const LandingPageTemplate = ({ left, right }: TemplateProps) => {
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" className={classes.stack} data-testid="template1">
        <LeftContainer>{left}</LeftContainer>
        <RightContainer>{right}</RightContainer>
      </Stack>
    </>
  );
};

export default LandingPageTemplate;
