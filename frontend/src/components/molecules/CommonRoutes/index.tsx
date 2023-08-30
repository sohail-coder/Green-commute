import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import Image from 'components/atoms/Image';
import nestedCircle from 'assets/images/nestedCircle.png';
import location from 'assets/images/location.png';
import swap from 'assets/images/swap.png';

interface CommonRoutesProps {
  from: string;
  to: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0px 2px 8px rgba(125, 125, 125, 0.12)',
  padding: '18px 16px',
  '& .typographyStyle': {
    fontWeight: 500,
  },
  '& .dot': {
    height: '4px',
    width: '4px',
    background: `${theme.palette.grey['400']}`,
    borderRadius: '4px',
  },
}));

const CommonRoutes = (props: CommonRoutesProps) => {
  const { from, to } = props;
  return (
    <StyledBox>
      <Grid container alignItems={'center'}>
        <Grid item container xs={11}>
          <Grid item container alignItems={'center'} columnGap="4px" mb="4px">
            <Image imageSource={nestedCircle} />
            <Typography variant="caption" className="typographyStyle">
              {from}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            rowSpacing={2}
            mb="6px"
            ml="10px"
          >
            <Grid item>
              <div className="dot"></div>
            </Grid>
            <Grid item>
              <div className="dot"></div>
            </Grid>
            <Grid item>
              <div className="dot"></div>
            </Grid>
          </Grid>
          <Grid item container alignItems={'center'} columnGap="4px">
            <Image imageSource={location} />
            <Typography variant="caption" className="typographyStyle">
              {to}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Image imageSource={swap} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CommonRoutes;
