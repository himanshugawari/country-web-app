import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import { data } from './resources/data';

import CustomNav from './components/CustomNav';
import CustomDropDown from './components/CustomDropDown';
import { loadCountryData, loadContinentData } from './redux/countryActions';
import CountryDetails from './components/CountryDetails';
import AddCountry from './components/AddCountry';
import DeleteCountry from './components/DeleteCountry';

function App() {
  const dispatch = useDispatch();
  const countrySelected = useSelector((state) => state.selectedCountry);
  const selectedtype = useSelector((state) => state.selectedType);

  useEffect(() => {
    dispatch(loadCountryData(data.countries));
    dispatch(loadContinentData(data.countries));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className='container'>
      <Row>
        <Col>
          <CustomNav />
        </Col>
      </Row>

      <Row>
        <Col className='center-section'>
          <CustomDropDown />
        </Col>
      </Row>

      {countrySelected &&
        countrySelected.name !== undefined &&
        countrySelected.name !== null && (
          <Row>
            <Col className='center-section'>
              <CountryDetails />
            </Col>
          </Row>
        )}

      {selectedtype && selectedtype === 'add' && (
        <Row>
          <Col className='center-section'>
            <AddCountry />
          </Col>
        </Row>
      )}

      {selectedtype && selectedtype === 'delete' && (
        <Row>
          <Col className='center-section'>
            <DeleteCountry />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
