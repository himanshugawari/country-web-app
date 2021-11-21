import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';

const styles = {
  alignVertical: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
};

const CountryDetails = () => {
  const country = useSelector((state) => state.selectedCountry);
  return (
    <Table>
      <tbody>
        <tr>
          <td style={{ border: 'none' }} className='center-section'>
            <img
              src={country.flag}
              alt={country.name}
              style={{
                maxHeight: '75px',
                maxWidth: '125px',
              }}
            />
          </td>
          <td style={{ border: 'none' }}>
            <div style={{ ...styles.alignVertical }}>
              <div>COUNTRY</div>
              <h2>{country.name}</h2>
            </div>
          </td>
          <td style={{ border: 'none' }}>
            <div style={{ ...styles.alignVertical }}>
              <div>CONTINENT</div>
              <h2>{country.continent}</h2>
            </div>
          </td>
          <td style={{ border: 'none' }}>
            <div style={{ ...styles.alignVertical }}>
              <div>RANK</div>
              <h2>{country.rank}</h2>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CountryDetails;
