import React from 'react';
import { Box, styled } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import theme from 'theme/index';
import MetroCard from 'components/molecules/MetroCard';
import { CabDetailsCard } from 'components/molecules/CabDetailCard';
import Image from 'components/atoms/Image';
import Bus from 'assets/icons/Bus.png';
import Car from 'assets/icons/Cab.png';
import Metro from 'assets/icons/Metro.png';
import Scooter from 'assets/icons/Scooter.png';
import Ola from 'assets/logos/Ola.png';
import Uber from 'assets/logos/Uber.png';
import Rapido from 'assets/logos/Rapido.png';
import MetroSelected from 'assets/icons/MetroSelected.png';
import CarSelected from 'assets/icons/CarSelected.png';
import MetroInformation from 'components/molecules/MetroInformation';

const data = [
  {
    id: 'CabData1001',
    logoUrl: `${Ola}`,
    company: 'Ola',
    fare: 45,
  },
  {
    id: 'CabData1002',
    logoUrl: `${Uber}`,
    company: 'Uber',
    fare: 45,
  },
  {
    id: 'CabData1003',
    logoUrl: `${Rapido}`,
    company: 'Rapido',
    fare: 45,
  },
];

const MainContainer = styled(Box)`
  width: 28vw;
`;

const TabsContainer = styled(Box)`
  height: 63px;
  border-bottom: 1px solid;
  border-color: ${theme.palette.grey[100]};
`;

const MetroContentBox = styled(Box)`
  margin-left: -35px;
  margin-top: -10px;
`;

const CabContentBox = styled(Box)`
  margin-left: -12px;
  margin-top: 0px;
  padding: 8px 0px;
`;

const TransportTabs = () => {
  const [value, setValue] = React.useState('Metro');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <MainContainer>
      <TabContext value={value}>
        <TabsContainer>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{
              sx: {
                display: 'none',
              },
            }}
          >
            <Tab icon={<Image imageSource={Scooter} />} disabled />
            <Tab
              icon={
                value === 'Metro' ? (
                  <Image imageSource={MetroSelected} />
                ) : (
                  <Image imageSource={Bus} />
                )
              }
              value="Metro"
              data-testid="Metro"
            />
            <Tab
              icon={
                value === 'Cab' ? (
                  <Image imageSource={CarSelected} />
                ) : (
                  <Image imageSource={Car} />
                )
              }
              value="Cab"
              data-testid="Cab"
            />
            <Tab icon={<Image imageSource={Metro} />} disabled />
          </TabList>
        </TabsContainer>
        <TabPanel value="Metro">
          <MetroContentBox>
            <MetroCard />
          </MetroContentBox>
        </TabPanel>
        <TabPanel value="Cab">
          <MetroInformation />
          {data.map((cabData) => (
            <CabContentBox key={cabData.company}>
              <CabDetailsCard
                src={cabData.logoUrl}
                serviceName={cabData.company}
                price={cabData.fare}
              />
            </CabContentBox>
          ))}
        </TabPanel>
      </TabContext>
    </MainContainer>
  );
};
export default TransportTabs;
