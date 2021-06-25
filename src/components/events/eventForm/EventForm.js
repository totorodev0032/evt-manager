import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react';

const EventForm = ({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValue] = useState(initialValues);

  function handleSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'admin',
          attendees: [],
        });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content="Create new Event" />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            type="text"
            placeholder="Event title"
            name="title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            placeholder="Catergory"
            name="category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
