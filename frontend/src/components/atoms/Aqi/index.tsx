import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import AQI from 'assets/Vector.png';
import theme from 'theme/index';

interface AqiProps {
  aqi: number;
}

const StyledTypography = styled(Typography)({
  textAlign: 'center',
  position: 'relative',
  top: '64px',
  bottom: '62px',
});

const Aqi = (props: AqiProps) => {
  const { aqi } = props;
  return (
    <Box
      height="174px"
      width="174px"
      style={{
        backgroundImage: `url(${AQI})`,
      }}
    >
      <StyledTypography color={theme.palette.primary.dark} variant="h1">
        {aqi}
      </StyledTypography>
    </Box>
  );
};
export default Aqi;
