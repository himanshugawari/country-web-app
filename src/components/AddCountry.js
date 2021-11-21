import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Label, Input, FormText, Button } from 'reactstrap';
import { addCountry, selectedType } from '../redux/countryActions';

const AddCountry = () => {
  const continentsList = useSelector((state) => state.continents);
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [flag, setFlag] = useState('');
  const [flagImage, setFlagImage] = useState(null);
  const [continent, setContinent] = useState('');
  const [rank, setRank] = useState('');

  const [check, setCheck] = useState({
    name: false,
    flag: false,
    rank: false,
    continent: false,
  });

  const onChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'name') {
      setName(value);
      if (value.length >= 3 && value.length <= 20)
        setCheck((prevState) => ({ ...prevState, name: false }));
      else setCheck((prevState) => ({ ...prevState, name: true }));
    }
    if (name === 'continent') {
      setContinent(value);
      if (value === '')
        setCheck((prevState) => ({ ...prevState, continent: true }));
      else setCheck((prevState) => ({ ...prevState, continent: false }));
    }
    if (name === 'rank') {
      setRank(value);
      if (countries.find((item) => item.rank === Number(value)))
        setCheck((prevState) => ({ ...prevState, rank: true }));
      else setCheck((prevState) => ({ ...prevState, rank: false }));
    }
    if (name === 'flag') {
      if (e.target.files.length > 0) {
        const { files } = e.target;
        const localImageUrl = window.URL.createObjectURL(files[0]);
        setFlagImage(localImageUrl);
        setFlag(value);
        if (
          ['.jpg', '.jpeg', '.png'].some((v) => files[0].name.includes(v)) &&
          (files[0].size / 1024 / 1024).toFixed(4) < 4
        ) {
          setCheck((prevState) => ({ ...prevState, flag: false }));
        } else {
          setCheck((prevState) => ({ ...prevState, flag: true }));
        }
      } else {
        setFlagImage(null);
        setFlag('');
        setCheck((prevState) => ({ ...prevState, flag: true }));
      }
    }
  };

  const handleCountrySubmit = () => {
    let country = {
      name: name,
      flag: flagImage,
      continent: continent,
      rank: Number(rank),
    };
    dispatch(addCountry(country));
    dispatch(selectedType(''));
  };

  return (
    <div>
      <h3 className='center-section'>ADD COUNTRY</h3>
      <Table>
        <tbody>
          <tr>
            <td style={{ border: 'none' }} className='center-section'>
              <Label for='name' style={{ width: '100%', textAlign: 'center' }}>
                Country
              </Label>
            </td>
            <td style={{ border: 'none' }}>
              <Input
                bsSize='sm'
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={onChangeData}
              />
              {check.name && (
                <FormText color='danger' style={{ fontSize: '1rem' }}>
                  Min. 3 to Max. 20 characters allowed.
                </FormText>
              )}
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }} className='center-section'>
              <Label
                for='continent'
                style={{ width: '100%', textAlign: 'center' }}
              >
                Continent
              </Label>
            </td>
            <td style={{ border: 'none' }}>
              <Input
                bsSize='sm'
                id='continent'
                name='continent'
                type='select'
                value={continent}
                onChange={onChangeData}
              >
                <option value=''>--select--</option>
                {continentsList &&
                  continentsList.map((item, key) => (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  ))}
              </Input>
              {check.continent && (
                <FormText color='danger' style={{ fontSize: '1rem' }}>
                  Mandatory
                </FormText>
              )}
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }} className='center-section'>
              <Label for='rank' style={{ width: '100%', textAlign: 'center' }}>
                Rank
              </Label>
            </td>
            <td style={{ border: 'none' }}>
              <Input
                bsSize='sm'
                id='rank'
                name='rank'
                type='number'
                onKeyDown={(e) =>
                  ['e', 'E', '+', '-', '.'].includes(e.key) &&
                  e.preventDefault()
                }
                value={rank}
                onChange={onChangeData}
              />
              {check.rank && (
                <FormText color='danger' style={{ fontSize: '1rem' }}>
                  Rank already present.
                </FormText>
              )}
            </td>
          </tr>
          <tr>
            <td style={{ border: 'none' }} className='center-section'>
              <Label for='flag' style={{ width: '100%', textAlign: 'center' }}>
                Flag
              </Label>
            </td>
            <td style={{ border: 'none' }}>
              <Input
                bsSize='sm'
                id='flag'
                name='flag'
                type='file'
                accept='.jpg,.jpeg,.png'
                value={flag}
                onChange={onChangeData}
              />
              {check.flag && (
                <FormText color='danger' style={{ fontSize: '1rem' }}>
                  Only allowed JPG/JPEG/PNG within 4MB.
                </FormText>
              )}
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan='2'>
              <Button
                color='primary'
                outline
                disabled={!Object.values(check).every((item) => item === false)}
                style={{ display: 'block', width: '100%' }}
                onClick={handleCountrySubmit}
              >
                Submit
              </Button>
              {true && (
                <FormText color='danger' style={{ fontSize: '1rem' }}>
                  * All fields mandatory.
                </FormText>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AddCountry;
