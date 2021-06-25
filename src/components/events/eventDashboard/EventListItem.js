import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Item, Segment, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
          </Item>
          <Item.Content>
            <Item.Header content={event.title} />
            <Item.Description>Hosted by {event.hostedBy} </Item.Description>
          </Item.Content>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span> {event.description} </span>
        <Button
          onClick={() => deleteEvent(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`events/${event.id}`}
          color="teal"
          floated="right"
          content="view"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
