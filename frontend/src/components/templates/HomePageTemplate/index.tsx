import { Box } from '@mui/system';
import React from 'react';

interface HomePageTemplateProps {
  header?: React.ReactNode;
  sideNav?: React.ReactNode;
  body?: React.ReactNode;
}
const HomePageTemplate = ({ header, sideNav }: HomePageTemplateProps) => {
  return (
    <Box data-testid="template2">
      <Box>{header}</Box>
      <Box>{sideNav}</Box>
    </Box>
  );
};

export default HomePageTemplate;
