import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from 'theme/index';
import { Divider, styled } from '@mui/material';
import MenuItemComponent from 'components/molecules/MenuItem';
import Setting from 'assets/icons/Setting.png';
import dashboard from 'assets/icons/dashboard.png';
import Contact from 'assets/icons/Contact.png';
import searchSkill from 'assets/icons/searchSkill.png';
import savejobs from 'assets/icons/Save.png';
import PracticeTest from 'assets/icons/PracticeTest.png';
import NewsEvents from 'assets/icons/NewsEvents.png';
import NeedHelp from 'assets/icons/NeedHelp.png';
import RecommendedJobs from '../RecommendedJobs';
import HP from 'assets/logos/HP.png';
import Instagram from 'assets/logos/Instagram.png';
import BMW from 'assets/logos/BMW.png';
import Myntra from 'assets/logos/Myntra.png';
import Twitter from 'assets/logos/Twitter.png';
import Wipro from 'assets/logos/Wipro.png';
import ActiveSearchSkill from 'assets/icons/ActiveSearchSkill.png';
import ActiveSavedJobs from 'assets/icons/ActiveSavedJobs.png';
import {
  Filters,
  FIND_JOBS,
  SAVED_JOBS,
  SOMETHING_WENT_WRONG,
} from '../../../constants/constants';
import SearchBar from '../SearchBar';
import { getSavedJobs } from 'components/services/SavedJobs';
import JobsList from '../JobsList';
import Filter from '../FilterPopUp';
import {
  filterJobs,
  getFilteredJobResults,
} from 'components/services/JobsServices';
import { Option } from 'components/molecules/CheckboxList';
import { transport } from 'components/molecules/JobCard';

export let selectedFilters: string[] = [Filters[8].value];
export let selectedDistanceFilters: string[] = [];
export const jobData = [
  {
    id: 0,
    company: 'Myntra',
    title: 'User Experience Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: Myntra,
    postedDate: '36 min ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Metro' },
      { id: 3, name: 'Bus' },
    ],
  },
  {
    id: 1,
    company: 'BMW',
    title: 'Product Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: BMW,
    postedDate: '10 days ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Cab' },
      { id: 3, name: 'Bus' },
    ],
  },
  {
    id: 2,
    company: 'Instagram',
    title: 'User Experience Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: Instagram,
    postedDate: '36 min ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Cab' },
    ],
  },
  {
    id: 3,
    company: 'HP',
    title: 'User Experience Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: HP,
    postedDate: '46 days ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Metro' },
      { id: 3, name: 'Bus' },
      { id: 3, name: 'Cab' },
    ],
  },
  {
    id: 4,
    company: 'Twitter',
    title: 'User Experience Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: Twitter,
    postedDate: '1 week ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Metro' },
      { id: 3, name: 'Bus' },
    ],
  },
  {
    id: 5,
    company: 'Wipro',
    title: 'Product Designer',
    location: 'Hitech city, Hyderabad - 500072',
    companyLogo: Wipro,
    postedDate: '10 days ago',
    transport: [
      { id: 1, name: 'Scooter' },
      { id: 2, name: 'Metro' },
      { id: 3, name: 'Bus' },
    ],
  },
];

const nameLabel = [
  {
    imageName: `${dashboard}`,
    activeImageName: `${dashboard}`,
    labelName: 'Dashboard',
    values: 0,
    disabled: false,
  },
  {
    imageName: `${searchSkill}`,
    activeImageName: `${ActiveSearchSkill}`,
    labelName: 'Find Jobs',
    values: 1,
    disabled: true,
  },
  {
    imageName: `${savejobs}`,
    activeImageName: `${ActiveSavedJobs}`,
    labelName: 'Saved Jobs',
    values: 2,
    disabled: true,
  },
  {
    imageName: `${PracticeTest}`,
    activeImageName: `${PracticeTest}`,
    labelName: 'Practice Test',
    values: 3,
    disabled: false,
  },
  {
    imageName: `${NewsEvents}`,
    activeImageName: `${NewsEvents}`,
    labelName: 'News & Events',
    values: 4,
    disabled: false,
  },
];

const nameLabel2 = [
  {
    imageName: `${NeedHelp}`,
    labelName: 'Need Help ?',
    values: 5,
    disabled: false,
  },
  {
    imageName: `${Contact}`,
    labelName: 'Contact us',
    values: 6,
    disabled: false,
  },
  {
    imageName: `${Setting}`,
    labelName: 'Settings',
    values: 7,
    disabled: false,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabStyle = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  "& button[aria-selected='true']": {
    borderRight: '4px solid #1B877A',
    background: theme.palette.secondary.dark,
  },
  borderColor: 'divider',
  color: theme.palette.primary.main,
  height: '100vw',
  width: '19.76vw',
}));
const BoxStyle = styled(Box)(() => ({
  flexGrow: 1,
  bgcolor: 'background.paper',
  display: 'flex',
}));

const DividerStyle = styled(Divider)(() => ({
  marginTop: '16px',
  marginBottom: '16px',
  color: theme.palette.grey[200],
  width: '15.08vw',
  marginLeft: '25px',
}));

const MainTabContainer = styled(TabPanel)(() => ({
  backgroundColor: `${theme.palette.grey[100]}`,
  height: 'auto',
  width: '80.234vw',
}));

const JobsContainer = styled(Box)(() => ({
  width: '72.548vw',
  marginLeft: '43.99px',
  marginTop: '40px',
}));

const SearchAndFilterContainer = styled(Box)(() => ({
  marginTop: '8px',
  display: 'flex',
  gap: '11px',
}));

const RecommendedJobsContainer = styled(Box)(() => ({
  marginTop: '36px',
}));

const SavedJobsContainer = styled(Box)(() => ({
  marginTop: '20px',
}));

const JobsListConainer = styled(Box)(() => ({
  marginTop: '36px',
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

type CompanyInfo = {
  name: string;
  about: string;
  image: string;
};

type LocationInfo = {
  name: string;
  address: string;
  aqi: number;
};

type SkillInfo = {
  name: string;
};

export type JobInfo = {
  id: string;
  company: CompanyInfo;
  experience: number;
  title: string;
  location: LocationInfo;
  postedDate: string;
  transports: transport[];
  skill: SkillInfo;
  distance: number;
};

export type SkillAndLocation = {
  value: string;
  label: string;
};

const SideNavComponent = () => {
  const [value, setValue] = React.useState<number>(1);
  const [savedStatus, setSavedStatus] = React.useState<boolean>(false);
  const [searchStatus, setSearchStatus] = React.useState<boolean>(false);
  const [recommendedStatus, setRecommendedStatus] =
    React.useState<boolean>(true);

  const [skill, setSkill] = React.useState<SkillAndLocation>({
    label: '',
    value: '',
  });
  const [location, setLocation] = React.useState<SkillAndLocation>({
    label: '',
    value: '',
  });

  const [open, setOpen] = React.useState<boolean>(false);

  const [jobsData, setJobsData] = React.useState<JobInfo[]>([]);

  const [savedJobsData, setSavedJobsData] = React.useState<JobInfo[]>([]);

  const [filterOptions, setFilterOptions] = React.useState<Option[]>(Filters);

  const handleOpen = (val: boolean) => {
    setOpen(val);
  };
  const distanceFilters = Filters.slice(0, 4);

  const onSelectCheckBox = (label: string) => {
    const filtersContainer = filterOptions;

    filtersContainer.forEach((option) => {
      if (option.label === label) {
        option.checked = !option.checked;
        if (option.checked) {
          selectedFilters.push(option.label);
        } else {
          const index = selectedFilters.indexOf(option.label);
          selectedFilters.splice(index, 1);
        }
        setFilterOptions([...filtersContainer]);
      }
    });
  };
  const onSelectRadioButton = () => {
    const filterContainer = filterOptions;
    const value = filterContainer[8].value;
    const index = selectedFilters.indexOf(value);

    if (filterContainer[8].checked) {
      filterContainer[8].checked = false;
      filterContainer[9].checked = !filterContainer[8].checked;
      selectedFilters.splice(index, 1);
    } else {
      filterContainer[8].checked = true;
      filterContainer[9].checked = !filterContainer[8].checked;
      selectedFilters.push(value);
    }
    setFilterOptions([...filterContainer]);
  };

  const clearAll = () => {
    const defaultValues = filterOptions;
    defaultValues.forEach((option) => {
      if (option.label !== 'Yes') {
        option.checked = false;
      }
    });
    selectedFilters = [Filters[8].value];
    selectedDistanceFilters = [];
    setFilterOptions([...defaultValues]);
  };

  const handleClickApply = async () => {
    selectedDistanceFilters = [];
    distanceFilters.forEach((filter) => {
      if (selectedFilters.includes(filter.label)) {
        selectedDistanceFilters.push(filter.value);
      }
    });
    if (selectedDistanceFilters.length > 0) {
      const filteredData = getFilteredJobResults(
        selectedDistanceFilters[selectedDistanceFilters.length - 1],
        jobsData
      );
      setJobsData(filteredData);
    } else {
      getSearchAndFilteredJobsResult();
    }

    handleOpen(!open);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSavedStatus(!savedStatus);
  };

  const onSearchClick = () => {
    setRecommendedStatus(false);
    getSearchAndFilteredJobsResult();
    setSearchStatus(!searchStatus);
  };

  const clearAllChips = () => {
    clearAll();
    handleClickApply();
    handleOpen(false);
  };

  const getSearchAndFilteredJobsResult = async () => {
    const jobsPromise = await filterJobs(skill.label, location.label);
    setJobsData(jobsPromise);
  };

  const recommendStatusJobsRender = (
    recommendedStatus: boolean
  ): React.ReactElement | undefined => {
    if (recommendedStatus === true) {
      return (
        <RecommendedJobsContainer>
          <RecommendedJobs jobDataList={jobData} />
        </RecommendedJobsContainer>
      );
    }
  };

  React.useEffect(() => {
    getSavedJobs()
      .then((res: JobInfo[]) => {
        setSavedJobsData(res);
      })
      .catch(() => {
        console.log(SOMETHING_WENT_WRONG);
      });
  }, [savedStatus]);

  return (
    <BoxStyle>
      <TabStyle
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        {nameLabel.map(
          ({ imageName, labelName, values, disabled, activeImageName }) => {
            return (
              <Tab
                key={labelName}
                label={
                  values !== value ? (
                    <MenuItemComponent
                      iconName={imageName}
                      text={labelName}
                      imageBackgroundColor={theme.palette.grey[100]}
                    />
                  ) : (
                    <MenuItemComponent
                      iconName={activeImageName}
                      text={labelName}
                      color={theme.palette.primary.main}
                      imageBackgroundColor={theme.palette.secondary.dark}
                    />
                  )
                }
                {...a11yProps(values)}
                disabled={!disabled}
              />
            );
          }
        )}
        <DividerStyle></DividerStyle>
        {nameLabel2.map(({ imageName, labelName, values, disabled }) => {
          return (
            <Tab
              key={labelName}
              label={
                <MenuItemComponent iconName={imageName} text={labelName} />
              }
              {...a11yProps(values)}
              disabled={!disabled}
            />
          );
        })}
      </TabStyle>
      <MainTabContainer value={value} index={0}></MainTabContainer>
      <MainTabContainer value={value} index={1} data-testid="find-jobs">
        <JobsContainer>
          <Typography variant="h3" color={theme.palette.text.primary}>
            {FIND_JOBS}
          </Typography>
          <SearchAndFilterContainer>
            <SearchBar
              handleClick={onSearchClick}
              onSkillChange={(
                _event: any,
                value: React.SetStateAction<SkillAndLocation>
              ) => setSkill(value)}
              onLocationChange={(
                _event: any,
                value: React.SetStateAction<SkillAndLocation>
              ) => setLocation(value)}
            />
            <Filter
              open={open}
              handleOpen={handleOpen}
              filterOptions={filterOptions}
              onSelectCheckBox={onSelectCheckBox}
              onSelectRadioButton={onSelectRadioButton}
              clearAll={clearAll}
              handleClickApply={handleClickApply}
            />
          </SearchAndFilterContainer>
          {recommendStatusJobsRender(recommendedStatus)}
          {jobsData.length > 0 ? (
            <JobsListConainer>
              <JobsList
                savedStatus={savedStatus}
                searchData={jobsData}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
                onClearAllClick={clearAllChips}
                filterData={selectedFilters}
              />
            </JobsListConainer>
          ) : null}
        </JobsContainer>
      </MainTabContainer>
      <MainTabContainer value={value} index={2}>
        <JobsContainer>
          <Typography variant="h3" color={theme.palette.text.primary}>
            {SAVED_JOBS}
          </Typography>
          <SavedJobsContainer>
            <JobsList
              filterData={[]}
              savedStatus={savedStatus}
              searchData={savedJobsData}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              onClearAllClick={clearAllChips}
            />
          </SavedJobsContainer>
        </JobsContainer>
      </MainTabContainer>
    </BoxStyle>
  );
};

export default SideNavComponent;
