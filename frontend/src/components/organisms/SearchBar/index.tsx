import React from 'react';
import { Box, Stack, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import theme from 'theme/index';
import WorkBag from 'assets/icons/workBag.png';
import MapPin from 'assets/icons/MapPin.png';
import search from 'assets/icons/search.png';
import Image from 'components/atoms/Image';
import {
  SEARCH_SKILLS,
  LOCATION,
  SEARCH_SKILLS_LIST,
  SEARCH_LOCATIONS,
} from '../../../constants/constants';
import SearchAutocomplete from 'components/molecules/SearchAutoComplete';
import { SkillAndLocation } from '../SideNav';
const useStyles = makeStyles({
  input: {
    '&::placeholder': {
      fontweight: 500,
      fontsize: '14px',
      lineheight: '22px',
    },
  },
  stack: {
    backgroundColor: theme.palette.accent?.contrastText,
    borderRadius: '32px',
    width: '61.2vw',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
  },
  workIcon: {
    paddingleft: '20px',
  },
  icon: {
    marginLeft: '100px',
  },
  autoComplete: {
    width: '30vw',
  },
  autoCompleteLocation: {
    width: '25vw',
  },
});

interface Searchprops {
  handleClick?: () => void;
  onSkillChange: (_event: any, value: React.SetStateAction<SkillAndLocation>) => void;
  onLocationChange: (_event: any, value: React.SetStateAction<SkillAndLocation>) => void;
}
const MainContainer = styled(Box)`
  height: 36px;
  display: flex;
  direction: row;
  align-items: center;
`;
const SubContainer = styled(Box)`
  height: 36px;
  width: 29.86vw;
  display: flex;
  direction: row;
  border-right: 1px solid;
  border-color: ${theme.palette.grey[400]};
  align-items: center;
`;
const MapPinIconContainer = styled(Box)`
  padding-left: 27px;
`;
const IconContainer = styled(Box)`
  padding-left: 20px;
`;
function SearchBar(props: Searchprops) {
  const { handleClick, onSkillChange, onLocationChange } = props;
  const classes = useStyles();
  return (
    <Stack direction="row" className={classes.stack} data-testid="searchBar">
      <MainContainer>
        <SubContainer>
          <IconContainer>
            <Image imageSource={WorkBag}></Image>
          </IconContainer>
          <SearchAutocomplete
            options={SEARCH_SKILLS_LIST}
            placeholder={SEARCH_SKILLS}
            name="skills"
            width="25vw"
            handleChange={onSkillChange}
          />
        </SubContainer>
        <MapPinIconContainer>
          <Image imageSource={MapPin}></Image>
        </MapPinIconContainer>
        <SearchAutocomplete
          options={SEARCH_LOCATIONS}
          placeholder={LOCATION}
          name="location"
          width="25vw"
          handleChange={onLocationChange}
        />
        <Fab
          color="primary"
          aria-label="search"
          onClick={handleClick}
          data-testid="iconButton"
          size="medium"
          sx={{ marginLeft: '12px' }}
        >
          <Image imageSource={search}></Image>
        </Fab>
      </MainContainer>
    </Stack>
  );
}

export default SearchBar;
