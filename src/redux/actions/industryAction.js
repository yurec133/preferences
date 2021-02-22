import {
  DELETE_FAVORITE_INDUSTRIES,
  REMOVE_EXCLUSIONS_INDUSTRIES,
  RESET_ALL_INDUSTRIES,
  RESET_EXCLUSIONS_INDUSTRIES,
  RESET_FAVORITE_INDUSTRIES,
  SET_AGNOSTIC,
  SET_EXCLUSIONS_INDUSTRIES,
  SET_FAVORITE_INDUSTRIES,
  SET_INDUSTRIES,
  SET_LOADING
} from "../types";

export const setLoading = payload => ({
  type: SET_LOADING,
  payload
});
export const setIndustries = payload => ({
  type: SET_INDUSTRIES,
  payload
});

export const setFavoriteIndustries = payload => ({
  type: SET_FAVORITE_INDUSTRIES,
  payload
});
export const deleteFavoriteIndustries = payload => ({
  type: DELETE_FAVORITE_INDUSTRIES,
  payload
});

export const resetFavoriteIndustries = () => ({
  type: RESET_FAVORITE_INDUSTRIES
});
export const resetExclusionsIndustries = () => ({
  type: RESET_EXCLUSIONS_INDUSTRIES
});
export const resetAllIndustries = () => ({
  type: RESET_ALL_INDUSTRIES
});

export const setExclusions = payload => ({
  type: SET_EXCLUSIONS_INDUSTRIES,
  payload
});

export const removeExclusions = payload => ({
  type: REMOVE_EXCLUSIONS_INDUSTRIES,
  payload
});
export const setAgnostic = payload => ({
  type: SET_AGNOSTIC,
  payload
});
