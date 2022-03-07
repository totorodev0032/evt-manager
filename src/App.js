import { useState } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from './components/events/eventDashboard/EventDashboard';
import Navbar from './components/nav/Navbar/Navbar';
import Home from './components/Home/Home';
import EventDetailPage from './components/events/eventDetailsPage/EventDetailPage';
import EventForm from './components/events/eventForm/EventForm';
import Sandbox from './components/sandbox/Sandbox';
function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
    console.log(selectedEvent);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventDashboard} />
        <Route exact path="/sandbox" component={Sandbox} />
        <Route exact path="/events/:id" component={EventDetailPage} />
        <Route path="/createEvent" component={EventForm} />
      </Container>
    </>
  );
}

export default App;
