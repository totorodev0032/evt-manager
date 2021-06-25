import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignInNav from '../SignInNav';
import SignOutNav from '../SignOutNav';

const Navbar = ({ setFormOpen }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            Eventio
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />
          {authenticated ? (
            <Menu.Item>
              <Button
                as={NavLink}
                to="/createEvent"
                positive
                inverted
                content="Create Event"
                onClick={() => setFormOpen(true)}
              />
            </Menu.Item>
          ) : (
            ''
          )}
          {authenticated ? (
            <SignInNav signOut={handleSignOut} />
          ) : (
            <SignOutNav setAuthenticated={setAuthenticated} />
          )}
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
