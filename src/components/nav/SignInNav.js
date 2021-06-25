import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';

const SignInNav = ({ signOut }) => {
  return (
    <>
      <Menu.Item position="right">
        <Icon name="user" />
        <Dropdown pointing="top left" text="Bob">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/createEvent"
              text="Create Event"
              icon="plus"
            />

            <Dropdown.Item text="My Profile" icon="user" />

            <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </>
  );
};

export default SignInNav;
