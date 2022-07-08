import * as CONSTANTS from '../constants'

const initialState = {
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
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.START_SEARCH_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case CONSTANTS.UPDATE_SEARCH:
      return {
        ...state,
        searchObj: action.searchObj,
        from: action.from,
        searchType: action.searchType,
        visitType: action.visitType
      }
    case CONSTANTS.UPDATE_SLOTCHOOSEN:
      return {
        ...state,
        slotsChoosen: action.slotsChoosen,
      }
    case CONSTANTS.UPDATE_RESULT:
      return {
        ...state,
        result: action.result,
        loading: action.loading,
        useAlternative: action.useAlternative,
        alternativeResult: action.alternativeResult,
        resultGroupPratice: action.resultGroupPratice
      }
    case CONSTANTS.CLEAR_SEARCH:
      return {
        ...state,
        searchObj: action.searchObj,
        from: action.from,
        searchType: action.searchType,
        result: action.result,
        loading: action.loading,
        visitType: action.visitType,
        slotsChoosen: action.slotsChoosen,
        useAlternative: action.useAlternative,
        alternativeResult: action.alternativeResult,
        resultGroupPratice: action.resultGroupPratice
      }
    default:
      return state
  }
}