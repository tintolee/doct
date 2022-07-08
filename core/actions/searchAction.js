import * as CONSTANTS from '../constants'

export const updateSearch = ({searchObj, from, searchType, visitType}) => {
  return({
    type: CONSTANTS.UPDATE_SEARCH,
    searchObj,
    from,
    searchType,
    visitType
  })
}

export const updateResult = (result, useAlternative, alternativeResult, resultGroupPratice) => {
  console.log(resultGroupPratice)
  return({
    type: CONSTANTS.UPDATE_RESULT,
    result,
    loading: false,
    useAlternative,
    alternativeResult,
    resultGroupPratice
  })
}

export const updateSlotChoosen = (slotsChoosen) => {
  return({
    type: CONSTANTS.UPDATE_SLOTCHOOSEN,
    slotsChoosen,
  })
}

export const clearSearch = () => {
  return({
    type: CONSTANTS.CLEAR_SEARCH,
    searchObj: null,
    result: [],
    from: null,
    searchType: null,
    loading: false,
    visitType: null,
    slotsChoosen: [],
    useAlternative: false,
    alternativeResult: [],
    resultGroupPratice: []
  })
}

export const startSearchLoading = () => {
  return({
    type: CONSTANTS.START_SEARCH_LOADING,
    loading: true
  })
}