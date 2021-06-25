import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChats from './EventDetailedChats';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

const EventDetailPage = () => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader />
          <EventDetailedInfo />
          <EventDetailedChats />
        </Grid.Column>

        <Grid.Column width={6}>
          <EventDetailedSidebar />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventDetailPage;
