import {
  LOAD_COUNTRY_DATA,
  LOAD_CONTINENT_DATA,
  SELECTED_COUNTRY,
  SELECTED_TYPE,
  ADD_COUNTRY_DATA,
  DELETE_COUNTRY_DATA,
} from './countryTypes';

const initialData = {
  countries: [],
  continents: [],
  selectedCountry: {},
  selectedType: '',
};

export const countryReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOAD_COUNTRY_DATA:
      return {
        ...state,
        countries: action.payload.countries,
      };
    case LOAD_CONTINENT_DATA:
      return {
        ...state,
        continents: action.payload.continents,
      };
    case SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload.selectedCountry,
      };
    case SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload.selectedType,
      };
    case ADD_COUNTRY_DATA:
      let newCountry = action.payload.country;
      return {
        ...state,
        countries: [...state.countries, newCountry],
      };
    case DELETE_COUNTRY_DATA:
      let country = state.countries.filter(
        (item) => item.rank !== action.payload.rank
      );
      let sameAsSelectedCountry =
        state.selectedCountry.rank === action.payload.rank ? true : false;
      return {
        ...state,
        countries: [...country],
        ...(sameAsSelectedCountry && {
          selectedCountry: {},
        }),
      };

    default:
      return state;
  }
};
