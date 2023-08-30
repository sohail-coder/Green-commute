import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import theme from 'theme/index';
import Image from 'components/atoms/Image';
import Logo from 'assets/logos/GreenCommuteLogoWhite.png';
import Avatar from 'assets/images/Avatar.png';
import message from 'assets/icons/message.png';
import notification from 'assets/icons/notification.png';

interface HeaderProps {
  location: string;
}

const MainContainerGrid = styled(Grid)`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.palette.primary.main};
  align-items: center;
  justify-content: space-between;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
  padding: 0px 30px 5px 0px;
`;

const LocationIcon = styled(RoomOutlinedIcon)`
  color: white;
`;

const LocationTypography = styled(Typography)`
  color: white;
`;
export const Header = (props: HeaderProps) => {
  const { location } = props;
  return (
    <MainContainerGrid container direction="row">
      <Grid item xs={6}>
        <Grid container justifyContent="space-between">
          <Grid item data-testid="Logo">
            <Image imageSource={Logo}></Image>
          </Grid>
          <Grid item>
            <StyledBox>
              <LocationIcon />
              <LocationTypography variant="body1">
                {location}
              </LocationTypography>
            </StyledBox>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container alignItems={'center'} justifyContent="space-evenly">
          <Grid item data-testid="message">
            <Image imageSource={message}></Image>
          </Grid>
          <Grid item>
            <Image
              imageSource={notification}
              data-testid="notification"
            ></Image>
          </Grid>
          <Grid item>
            <Image imageSource={Avatar} data-testid="Avatar"></Image>
          </Grid>
        </Grid>
      </Grid>
    </MainContainerGrid>
  );
};
