import {
  LOAD_COUNTRY_DATA,
  LOAD_CONTINENT_DATA,
  SELECTED_COUNTRY,
  SELECTED_TYPE,
  ADD_COUNTRY_DATA,
  DELETE_COUNTRY_DATA,
} from './countryTypes';

export const loadCountryData = (countries) => {
  return {
    type: LOAD_COUNTRY_DATA,
    payload: {
      countries: countries,
    },
  };
};

export const loadContinentData = (continents) => {
  let continentsArray = continents.map((item) => item.continent);
  let uniqueContinents = new Set(continentsArray);
  let finalContinents = Array.from(uniqueContinents);
  return {
    type: LOAD_CONTINENT_DATA,
    payload: {
      continents: finalContinents,
    },
  };
};

export const selectedCountry = (country) => {
  return {
    type: SELECTED_COUNTRY,
    payload: {
      selectedCountry: country,
    },
  };
};

export const selectedType = (type) => {
  return {
    type: SELECTED_TYPE,
    payload: {
      selectedType: type,
    },
  };
};

export const addCountry = (country) => {
  return {
    type: ADD_COUNTRY_DATA,
    payload: {
      country: country,
    },
  };
};

export const deleteCountry = (rank) => {
  return {
    type: DELETE_COUNTRY_DATA,
    payload: {
      rank: rank,
    },
  };
};
