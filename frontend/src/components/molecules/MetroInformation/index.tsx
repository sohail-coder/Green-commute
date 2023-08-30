import React from 'react';
import {
  METRO_ROUTE,
  METRO_PRICE,
  METRO_DISTANCE,
  METRO_TRAVEL_TIME,
} from '../../../constants/constants';
import Eclipse from 'assets/icons/eclipse.png';
import { Grid, styled, Typography } from '@mui/material';
import Image from 'components/atoms/Image';
import theme from 'theme/index';

const TypographyItem = styled(Grid)({
  color: `${theme.palette.secondary.dark}`,
  paddingBottom: '5px',
});
const RouteDetailsContainer = styled(Grid)({
  color: `${theme.palette.secondary.dark}`,
  paddingBottom: '8px',
});
const IconContainer = styled(Grid)({
  paddingLeft: '10px',
  paddingRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const MetroInformation = () => {
  return (
    <Grid container direction="column">
      <TypographyItem item>
        <Typography variant={'body2'}>{METRO_ROUTE}</Typography>
      </TypographyItem>
      <Grid item>
        <RouteDetailsContainer container>
          <Grid item>
            <Typography variant={'caption'}>{METRO_PRICE} </Typography>
          </Grid>
          <IconContainer item>
            <Image imageSource={Eclipse} />
          </IconContainer>
          <Grid item>
            <Typography variant={'caption'}>{METRO_DISTANCE}</Typography>
          </Grid>
          <IconContainer item>
            <Image imageSource={Eclipse} />
          </IconContainer>
          <Grid item>
            <Typography variant={'caption'}>{METRO_TRAVEL_TIME}</Typography>
          </Grid>
        </RouteDetailsContainer>
      </Grid>
    </Grid>
  );
};
export default MetroInformation;
