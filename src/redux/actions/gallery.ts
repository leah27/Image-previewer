type SetCurrentImgActionType = {
    type: string,
    payload: string
}

type AddImgImgActionType = {
    type: string,
    imgKey: string,
    payload: string
}

export const setCurrentImg = (currentImg: string):SetCurrentImgActionType => ({
    type: 'SET_CURRENT_IMG',
    payload: currentImg
})

export const addImg = (imgKey:string, newImg:string):AddImgImgActionType => ({
    type: 'ADD_IMG',
    imgKey: imgKey,
    payload: newImg
})