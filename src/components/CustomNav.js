import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import Title from './Title';
import { selectedType } from '../redux/countryActions';

const styles = {
  onHover: { cursor: 'pointer' },
};

const CustomNav = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selectedType);

  const onTypeSelect = (type) => {
    if (selected !== type) {
      dispatch(selectedType(type));
    } else {
      dispatch(selectedType(''));
    }
  };

  return (
    <Navbar expand='md' light>
      <NavbarBrand href='/'>
        <Title title='COUNTRY' />
      </NavbarBrand>
      <Nav className='me-auto' navbar>
        <NavItem>
          <NavLink
            onClick={() => onTypeSelect('add')}
            style={{ ...styles.onHover }}
            className={selected === 'add' ? 'selected-type' : ''}
          >
            ADD
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            onClick={() => onTypeSelect('update')}
            style={{ ...styles.onHover }}
            className={selected === 'update' ? 'selected-type' : ''}
          >
            UPDATE
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink
            onClick={() => onTypeSelect('delete')}
            style={{ ...styles.onHover }}
            className={selected === 'delete' ? 'selected-type' : ''}
          >
            DELETE
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>Himanshu Gawari</NavbarText>
    </Navbar>
  );
};

export default CustomNav;
