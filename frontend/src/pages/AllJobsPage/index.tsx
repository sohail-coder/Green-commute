import { Header } from 'components/organisms/Header';
import SideNavComponent from 'components/organisms/SideNav';
import HomePageTemplate from 'components/templates/HomePageTemplate';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface UserLocation {
  userLocation: string;
}

const AllJobsPage = () => {
  const location = useLocation();
  const state = location.state as UserLocation;

  return (
    <div data-testid="alljobs-page">
      <HomePageTemplate
        header={<Header location={state.userLocation} />}
        sideNav={<SideNavComponent />}
      />
    </div>
  );
};

export default AllJobsPage;
