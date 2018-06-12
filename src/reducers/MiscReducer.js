import {SET_CONFIG} from "../consts"

const MiscReducer = (state = '', action) => {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                testReduce: {
                    test:true
                }
            }
        default:
            return state
    }
}

export default MiscReducer








