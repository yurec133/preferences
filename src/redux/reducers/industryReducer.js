import {
  DELETE_FAVORITE_INDUSTRIES,
  SET_EXCLUSIONS_INDUSTRIES,
  SET_FAVORITE_INDUSTRIES,
  SET_INDUSTRIES,
  SET_LOADING,
  REMOVE_EXCLUSIONS_INDUSTRIES,
  SET_AGNOSTIC,
  RESET_FAVORITE_INDUSTRIES,
  RESET_ALL_INDUSTRIES,
  RESET_EXCLUSIONS_INDUSTRIES
} from "../types";

const initialState = {
  industries: [],
  favoriteIndustries: [],
  exclusionIndustries: [],
  agnostic: false,
  isLoading: true
};

export const industriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INDUSTRIES: {
      const industriesDiff = state.industries.filter(
        e => !~state.favoriteIndustries.indexOf(e)
      );
      return {
        ...state,
        industries: !!state.favoriteIndustries.length
          ? industriesDiff
          : action.payload,
        isLoading: false
      };
    }

    case SET_FAVORITE_INDUSTRIES: {
      const itemArray = Array.isArray(action.payload);
      return {
        ...state,
        favoriteIndustries: itemArray
          ? action.payload
          : [...state.favoriteIndustries, action.payload],
        industries: [
          ...state.industries.filter(item => item.id !== action.payload.id)
        ],
        isLoading: false
      };
    }
    case DELETE_FAVORITE_INDUSTRIES: {
      return {
        ...state,
        favoriteIndustries: [
          ...state.favoriteIndustries.filter(item => item.id !== action.payload)
        ],
        industries: [
          ...state.industries,
          ...state.favoriteIndustries.filter(item => item.id === action.payload)
        ],
        isLoading: false
      };
    }
    case SET_EXCLUSIONS_INDUSTRIES: {
      return {
        ...state,
        exclusionIndustries: action.payload.value,
        industries: [
          ...state.industries.filter(item => item.id !== action.payload.valueId)
        ],
        isLoading: false
      };
    }
    case REMOVE_EXCLUSIONS_INDUSTRIES: {
      return {
        ...state,
        industries: [...state.industries, action.payload],
        isLoading: false
      };
    }
    case RESET_FAVORITE_INDUSTRIES: {
      return {
        ...state,
        favoriteIndustries: []
      };
    }
    case RESET_EXCLUSIONS_INDUSTRIES: {
      return {
        ...state,
        exclusionIndustries: []
      };
    }
    case RESET_ALL_INDUSTRIES: {
      return {
        ...state,
        exclusionIndustries: [],
        favoriteIndustries: []
      };
    }
    case SET_AGNOSTIC: {
      return {
        ...state,
        agnostic: action.payload
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};
