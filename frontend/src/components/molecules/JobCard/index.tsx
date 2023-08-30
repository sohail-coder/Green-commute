import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  styled,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Avatar,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from '../../../theme';
import { COMMUTE_ROUTES_AVAILABLE } from '../../../constants/constants';
import Image from 'components/atoms/Image';

export type transport = {
  id: number,
  name: string,
};
interface JobProps {
  company: string;
  title: string;
  postedDate?: string;
  location: string;
  cardType: 'square' | 'rectangle';
  companyLogo: string;
  transport: transport[];
  onClick?: () => void;
}
const SquareCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 16px 17.5px;
  gap: 10px;

  position: relative;
  width: 20.81vw;
  height: 271px;

  background: ${theme.palette.accent?.contrastText};
  border-radius: 12px;
  border-color: white;
`;
const SquareAvatar = styled(Avatar)`
  flex: none;
  order: 0;
  flex-grow: 0;
  height: 45px;
  width: 45px;
  left: 5px;
  top: 5px;
  border-radius: 0px;
  padding: 0px;
`;
const StyledCardHeader = styled(CardHeader)`
  padding: 0px;
`;
const StyledCardContent = styled(CardContent)`
  padding: 0px;
`;
const StyledCardActions = styled(CardActions)`
  display: grid !important;
  padding: 0px;
`;
const SquareCardActionsGrid = styled(Grid)`
  padding-top: 8px;
  margin-left: -0.75rem !important;
  direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

const RectangleGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  padding: '16px 19px',
  justifyContent: 'space-between',
  columnGap: '2px',
  background: theme.palette.accent?.contrastText,
  borderRadius: '12px',
  cursor: 'pointer',
  '&:hover': {
    border: '2px solid',
    borderColor: theme.palette.primary['light'],
  },
});

const RectangleAvatar = styled(Avatar)`
  height: 45px;
  width: 45px;
  left: 5px;
  top: 5px;
  border-radius: 0px;
  padding: 0px;
`;

const RectangleCommuteGrid = styled(Grid)`
  display: flex;
  padding-top: 27px;
`;
const RectangleDateGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
});

const RectangleCardContainer = styled(Box)`
  width: 41.801vw;
`;
const useStyles = makeStyles({
  title: {
    color: `${theme.palette.text.primary}`,
  },
  companyName: {
    color: `${theme.palette.accent?.dark}`,
  },
  location: {
    color: `${theme.palette.text.secondary}`,
  },
  rdate: {
    marginLeft: '28px',
    paddingTop: '10px',
  },
});

const JobCard = (props: JobProps) => {
  const {
    company,
    title,
    postedDate,
    location,
    companyLogo,
    cardType,
    transport,
    onClick,
  } = props;
  const classes = useStyles();

  return cardType === 'square' ? (
    <SquareCard variant="outlined">
      <StyledCardHeader
        avatar={<SquareAvatar src={companyLogo}></SquareAvatar>}
        action={<MoreHorizIcon />}
      />
      <StyledCardContent>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="subtitle1" className={classes.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.companyName}>
              {company}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.location}>
              {location}
            </Typography>
          </Grid>
        </Grid>
      </StyledCardContent>
      <StyledCardActions>
        <Typography variant="caption">{COMMUTE_ROUTES_AVAILABLE}</Typography>
        <Grid
          container
          justifyContent={'space-between'}
          alignItems="center"
          direction={'row'}
          xs={12}
        >
          <Grid item>
            <SquareCardActionsGrid container spacing={3} alignItems="baseline">
              {transport.map((vehicle) => (
                <Grid item key={vehicle.name}>
                  <Image
                    imageSource={require(`assets/icons/${vehicle.name.replace(
                      /'/g,
                      ''
                    )}.png`)}
                  />
                </Grid>
              ))}
            </SquareCardActionsGrid>
          </Grid>
          <Grid item>
            <Typography variant="caption">{postedDate}</Typography>
          </Grid>
        </Grid>
      </StyledCardActions>
    </SquareCard>
  ) : (
    <RectangleCardContainer>
      <RectangleGrid container onClick={onClick}>
        <Grid item md={1}>
          <StyledCardHeader
            avatar={
              <RectangleAvatar
                src={require(`assets/logos/${companyLogo.replace(
                  /'/g,
                  ''
                )}.png`)}
                alt="Company Logo"
              />
            }
          />
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={1} direction="column" padding="0px">
            <Grid item>
              <Typography variant="subtitle1" className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.companyName}>
                {company}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.location}>
                {location}
              </Typography>
            </Grid>
            <Grid item>
              <RectangleCommuteGrid container spacing={3} alignItems="baseline">
                {transport.map((vehicle) => (
                  <Grid item key={vehicle.name}>
                    <Image
                      imageSource={require(`assets/icons/${vehicle.name.replace(
                        /'/g,
                        ''
                      )}.png`)}
                    />
                  </Grid>
                ))}
              </RectangleCommuteGrid>
            </Grid>
          </Grid>
        </Grid>
        <RectangleDateGrid item>
          <Box>
            <MoreHorizIcon />
          </Box>
          <Box>
            <Typography variant="caption">{postedDate}</Typography>
          </Box>
        </RectangleDateGrid>
      </RectangleGrid>
    </RectangleCardContainer>
  );
};
export default JobCard;
