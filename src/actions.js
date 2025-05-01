import {FILTER_ROBOTS} from "./constants"

export const setSearchField = text => ({
    type: FILTER_ROBOTS,
    payload: text
})