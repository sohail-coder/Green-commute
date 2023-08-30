import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import TextInput from 'components/atoms/Input';
import AutoCompleteDropDown from 'components/molecules/AutoCompleteDropDown';
import {
  AUTO_COMPLETE_PLACEHOLDERS,
  GREEN_COMMUTE_PART1,
  GREEN_COMMUTE_PART2,
  STEPPER_QUESTIONS,
  steps,
  STEPS_COLOR,
} from '../../../constants/constants';
import Button from 'components/atoms/Button';
import theme from 'theme/index';

const StyledGrid = styled(Grid)({
  justifyContent: 'space-between',
  '& .css-109hce5-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
    color: `${STEPS_COLOR}`,
  },
  '& .css-109hce5-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
    color: `${STEPS_COLOR}`,
  },
  '& .typographyActive': {
    color: `${STEPS_COLOR}`,
  },
  '& .typography': {
    color: `${theme.palette.text.primary}`,
  },
  '& .stepper': {
    columnGap: '40px',
  },
  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: 'white', // circle's number (ACTIVE)
  },
});

interface EntryStepperProps {
  location: string;
  activeStep: number;
  options: string[];
  // eslint-disable-next-line no-unused-vars
  handleChange?: (args: React.ChangeEvent<HTMLInputElement>) => void;
  handleOptionsChange?: (
    // eslint-disable-next-line no-unused-vars
    args: React.ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line no-unused-vars
    values: React.SetStateAction<string[]>
  ) => void;
  selectedOptions: () => string[];
  handleBack?: () => void;
  handleNext?: () => void;
}
const EntryStepper = (props: EntryStepperProps) => {
  const {
    location,
    activeStep,
    options,
    handleChange,
    handleOptionsChange,
    selectedOptions,
    handleBack,
    handleNext,
  } = props;

  return (
    <StyledGrid
      container
      direction="column"
      rowGap="50px"
      data-testid="stepper"
    >
      <Grid item>
        <Stepper activeStep={activeStep} connector={null} className="stepper">
          {steps.map((step: string, index: number) => (
            <Step key={step}>
              <StepLabel>
                <Typography
                  variant="subtitle1"
                  className={
                    index <= activeStep ? 'typographyActive' : 'typography'
                  }
                >
                  {step}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item>
        <Typography variant="h1">
          {' '}
          {GREEN_COMMUTE_PART1}
          <br></br>
          {GREEN_COMMUTE_PART2}
        </Typography>
      </Grid>
      <Grid item container direction="column" rowGap="36px">
        <Grid item>
          <Typography variant="subtitle1" sx={{ mb: '8px' }}>
            {STEPPER_QUESTIONS[activeStep]}
          </Typography>
          {activeStep === 0 ? (
            <TextInput
              data-testid="textfieldtest"
              value={location}
              onChange={handleChange}
              placeholder={AUTO_COMPLETE_PLACEHOLDERS[activeStep]}
            ></TextInput>
          ) : (
            <AutoCompleteDropDown
              options={options}
              placeHolder={AUTO_COMPLETE_PLACEHOLDERS[activeStep]}
              handleOptionsChange={handleOptionsChange}
              values={selectedOptions()}
            />
          )}
        </Grid>
        <Grid item container columnGap="10px">
          {activeStep > 0 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              label="Back"
              labelColor="primary"
              typographyVariant={'body1'}
              height="46px"
              width="140px"
            />
          )}
          <Button
            variant="contained"
            label="Next"
            onClick={handleNext}
            labelColor="#fff"
            typographyVariant={'body1'}
            height="46px"
            width="140px"
          />
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default EntryStepper;
