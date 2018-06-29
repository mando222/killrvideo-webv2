import {SET_CONFIG,TOGGLE_WHAT_IS_THIS,SHOW_TOUR} from "../consts"


export const toggleWhatIsThis = (toggleWhatIsThis) => {
    return {
        type: TOGGLE_WHAT_IS_THIS,
        open: toggleWhatIsThis
    }
}

export const toggleTour = (toggleTour) => {
    return {
        type: SHOW_TOUR,
        tourActive: toggleTour
    }
}

