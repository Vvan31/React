import { createAction, createReducer } from '@reduxjs/toolkit';
//action type
export const UPDATE_MOOD = "UPDATE_MOOD";
export const UPDATE_COLOR = "UPDATE_COLOR";
export const UPDATE_SIZE = "UPDATE_SIZE";

const URL = "https://gist.githubusercontent.com/andasan/4f4976c373654f73b0a465a2441c2c91/raw/1b3c99936426b59ba4a92c7afe12fc109e4dbdcd/moods.json"

//action creator
export const updateMood = (payload) => {
    return {
        type: UPDATE_MOOD,
        payload,
    };
}

export const updateColor = (payload) => {
    return {
        type: UPDATE_COLOR,
        payload,
    };
}

export const updateSize = (payload) => {
    return {
        type: UPDATE_SIZE,
        payload,
    };
}

const updateCatMood = createAction(UPDATE_MOOD);
const updateCatColor = createAction(UPDATE_COLOR);
const updateCatSize = createAction(UPDATE_SIZE);
export const MOODS = {
    SAD: "sad",
    HAPPY: "happy",
    SHOCKED: "shocked",
    BLISSFUL: "blissful",
    EXCITED: "excited",
    KO: "ko",
    LOVESTRUCK: "lovestruck",
}
export const COLORS = {
    BLACK: "black",
    WHITE: "white",
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
    YELLOW: "yellow",
    PURPLE: "purple",
    ORANGE: "orange",
    PINK: "pink",
    BROWN: "brown",
    GREY: "grey",
}

/* export const SIZES = {
    SMALL: 100,
    MEDIUM: 200,
    LARGE: 300,
} */

//initial state
const INITIAL_STATE = { 
    mood: MOODS.SAD,
    color: "black",
    size: 100
};

export const moodReducer = createReducer(INITIAL_STATE, {
    [updateCatMood]: (state, action) =>
        ({ ...state, mood: action.payload }),
    [updateCatColor]: (state, action) =>
        ({ ...state, color: action.payload }),
    [updateCatSize]: (state, action) =>
        ({ ...state, size: action.payload
})
});