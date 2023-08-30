import React from 'react';
import {
  CardActions,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import { APPROXIMATE_PRICE } from '../../../constants/constants';

interface CabDetailsCardProps {
  src: string;
  serviceName: string;
  price: number;
}

const StyledCard = styled(Card)`
  padding: 8px;
  box-shadow: 0px 2px 8px rgba(125, 125, 125, 0.12);
  width: 26.35vw;
  align-items: center;
`;

const GridMainContainer = styled(Grid)`
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
const GridSubContainer = styled(Grid)`
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
const GridItem = styled(Grid)`
  align-items: center;
  padding: 0px;
`;
const StyledCardHeader = styled(CardHeader)`
  padding: 0px 0px 0px 0px;
  align-items: center;
`;
const ButtonGridItem = styled(Grid)`
  align-items: center;
  padding: 0px;
  justify-content: flex-end;
`;
export const CabDetailsCard = (props: CabDetailsCardProps) => {
  const { src, serviceName, price } = props;
  return (
    <StyledCard>
      <GridMainContainer container>
        <Grid item>
          <GridSubContainer container spacing={12}>
            <GridItem item>
              <StyledCardHeader avatar={<Image imageSource={src} />} />
            </GridItem>
            <Grid item>
              <CardContent>
                <Typography>{serviceName}</Typography>
                <Typography>
                  {APPROXIMATE_PRICE} {price}
                </Typography>
              </CardContent>
            </Grid>
          </GridSubContainer>
        </Grid>
        <ButtonGridItem item>
          <CardActions>
            <Button
              variant="text"
              label="Book Now"
              labelColor="alpha.main"
              typographyVariant={'caption'}
            ></Button>
          </CardActions>
        </ButtonGridItem>
      </GridMainContainer>
    </StyledCard>
  );
};
