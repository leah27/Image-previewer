export const setCurrentImg = (currentImg) => ({
    type: 'SET_CURRENT_IMG',
    payload: currentImg
})

export const addImg = (imgKey, newImg) => ({
    type: 'ADD_IMG',
    imgKey: imgKey,
    payload: newImg
})