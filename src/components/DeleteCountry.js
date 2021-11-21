import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, FormGroup } from 'reactstrap';
import { deleteCountry, selectedType } from '../redux/countryActions';

const DeleteCountry = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  return (
    <div>
      <h3 className='center-section'>DELETE COUNTRY</h3>
      <Form>
        <FormGroup>
          <Label for='country' style={{ width: '100%', textAlign: 'center' }}>
            Select Country To Delete
          </Label>
          <Input
            id='country'
            name='select'
            type='select'
            onChange={(e) => {
              dispatch(deleteCountry(Number(e.target.value)));
              dispatch(selectedType(''));
            }}
          >
            <option value=''>--select--</option>
            {countries &&
              countries.map((item) => (
                <option key={item.rank} value={item.rank}>
                  {item.name}
                </option>
              ))}
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};

export default DeleteCountry;
