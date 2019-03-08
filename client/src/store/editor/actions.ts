import {actionTypes} from './types';
import * as types from './types'

export const setTitle = (payload:types.setTitlePayload) => {
    return {
        type: actionTypes.SET_TITLE,
        payload: payload
    }
}