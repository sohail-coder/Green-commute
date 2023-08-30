import React from 'react';
import { Grid, styled } from '@mui/material';
import Map from 'assets/images/mapview.png';
import Image from 'components/atoms/Image';
import Button from 'components/atoms/Button';
import MetroInformation from '../MetroInformation';

const GridMainContainer = styled(Grid)({
  width: '29.5vw',
  padding: '22px',
});

const MetroCard = () => {
  return (
    <div>
      <GridMainContainer container direction="column">
        <MetroInformation />
        <Grid item>
          <Image imageSource={Map} />
        </Grid>
        <Grid item data-testid="mapsButton">
          <Button
            variant={'text'}
            labelColor={'alpha.main'}
            label={'View in Google Maps'}
            typographyVariant={'caption'}
          ></Button>
        </Grid>
      </GridMainContainer>
    </div>
  );
};

export default MetroCard;
