import React from 'react';
import { Box, Grid, Modal, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Button from 'components/atoms/Button';
import FilterButton from 'components/atoms/FilterButton';
import CheckboxList, { Option } from 'components/molecules/CheckboxList';
import {
  APPLY,
  CLEAR_ALL,
  FILTER,
  Distance,
  DatePosted,
  GreenCommute,
  JobType,
  ExperienceLevel,
  Transport,
} from '../../../constants/constants';
import RadioList from 'components/molecules/RadioList';
const MainContainerGrid = styled(Grid)({
  borderRadius: '8px',
  backgroundColor: 'white',
  padding: '24px 24px 32px 52px',
  boxShadow: '24',
  top: '10%',
  left: '25%',
});

const SubContainerGrid = styled(Grid)({
  justifyContent: 'space-between',
  paddingRight: '30px',
  marginBottom: '38px',
});

export interface FilterPopUpProps {
  open: boolean;
  handleOpen: (val: boolean) => void;
  filterOptions: Option[];
  onSelectCheckBox: (label: string) => void;
  onSelectRadioButton: () => void;
  clearAll: () => void;
  handleClickApply: () => void;
}

const Filter = (props: FilterPopUpProps) => {
  const {
    open,
    handleOpen,
    filterOptions,
    onSelectCheckBox,
    onSelectRadioButton,
    clearAll,
    handleClickApply,
  } = props;

  return (
    <div>
      <Box>
        <FilterButton
          startIcon={<FilterAltOutlinedIcon />}
          onClick={(val: boolean) => handleOpen(val)}
          label={FILTER}
        ></FilterButton>
      </Box>
      <Modal
        open={open}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <MainContainerGrid
          container
          display="flex"
          flexDirection="column"
          md={5.2}
        >
          <Grid item display="flex" alignSelf="flex-end">
            <CloseIcon
              fontSize="small"
              onClick={() => handleOpen(false)}
              cursor="pointer"
              data-testid="closeIcon"
            />
          </Grid>
          <Grid item>
            <SubContainerGrid container>
              <Grid item>
                <CheckboxList
                  options={filterOptions.slice(0, 4)}
                  title={Distance}
                  onSelectCheckBox={(label: string) => onSelectCheckBox(label)}
                />
              </Grid>
              <Grid item>
                <CheckboxList
                  options={filterOptions.slice(4, 8)}
                  title={DatePosted}
                  onSelectCheckBox={(label: string) => onSelectCheckBox(label)}
                />
              </Grid>
              <Grid item>
                <RadioList
                  options={filterOptions.slice(8, 10)}
                  title={GreenCommute}
                  onSelect={onSelectRadioButton}
                />
              </Grid>
            </SubContainerGrid>
          </Grid>
          <Grid item>
            <SubContainerGrid container>
              <Grid item>
                <CheckboxList
                  options={filterOptions.slice(10, 14)}
                  title={JobType}
                  onSelectCheckBox={(label: string) => onSelectCheckBox(label)}
                />
              </Grid>
              <Grid item>
                <CheckboxList
                  options={filterOptions.slice(14, 18)}
                  title={ExperienceLevel}
                  onSelectCheckBox={(label: string) => onSelectCheckBox(label)}
                />
              </Grid>
              <Grid item>
                <CheckboxList
                  options={filterOptions.slice(18, 22)}
                  title={Transport}
                  onSelectCheckBox={(label: string) => onSelectCheckBox(label)}
                />
              </Grid>
            </SubContainerGrid>
          </Grid>
          <Grid item display="flex" alignSelf="flex-end" gap={'16px'}>
            <Button
              variant={'text'}
              label={CLEAR_ALL}
              typographyVariant={'caption'}
              labelColor="primary.300"
              onClick={clearAll}
            />
            <Button
              variant={'contained'}
              label={APPLY}
              typographyVariant={'caption'}
              labelColor="accent.contrastText"
              height="32px"
              width="7.39vw"
              onClick={handleClickApply}
            />
          </Grid>
        </MainContainerGrid>
      </Modal>
    </div>
  );
};
export default Filter;
