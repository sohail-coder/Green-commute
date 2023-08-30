import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'components/atoms/Image';
import React from 'react';
interface MenuItemProps {
  text: string;
  iconName: string;
  color?: string;
  imageBackgroundColor?: string;
}

const MenuItemComponent = (props: MenuItemProps) => {
  const { text, iconName, color, imageBackgroundColor } = props;

  const BoxStyle = styled(Box)(() => ({
    borderRadius: '50%',
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: `${imageBackgroundColor}`,
    marginLeft: '44px',
  }));

  const TypographyStyle = styled(Typography)(() => ({
    whiteSpace: 'nowrap',
    textTransform: 'none',
    marginTop: '7.9px',
    marginLeft: '12px',
  }));

  const GridStyle = styled(Grid)(() => ({
    padding: '11px',
  }));

  return (
    <Grid container direction="row">
      <BoxStyle>
        <GridStyle item>
          <Image imageSource={iconName} imageWidth="18px" imageHeight="18px" />
        </GridStyle>
      </BoxStyle>
      <Grid item>
        <TypographyStyle variant="body2" color={color}>
          {text}
        </TypographyStyle>
      </Grid>
    </Grid>
  );
};

export default MenuItemComponent;


