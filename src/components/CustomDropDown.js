import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { selectedCountry } from '../redux/countryActions';

const CustomDropDown = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const handleCountryChange = (e) => {
    let value = e.target.value;
    if (value !== '') {
      let country = countries.find((item) => item.rank === Number(value));
      dispatch(selectedCountry(country));
    } else {
      dispatch(selectedCountry({}));
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label for='country' style={{ width: '100%', textAlign: 'center' }}>
          Select Country
        </Label>
        <Input
          id='country'
          name='select'
          type='select'
          onChange={handleCountryChange}
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
  );
};

export default CustomDropDown;
