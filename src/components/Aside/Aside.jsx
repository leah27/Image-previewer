import React, { useEffect} from 'react'
import style from './Aside.module.css'
import { useDispatch } from 'react-redux'
import { addImg } from '../../redux/actions/gallery'
import { setCurrentImg } from '../../redux/actions/gallery'
import { reverseObjectKeys, top5Values } from '../../helpers/helpers'

const Aside = ({ gallery, currentImg }) => {
    useEffect(() => {
        sessionStorage.setItem("gallery", JSON.stringify(top5Values(gallery)))
    })
    const dispatch = useDispatch()

    const onUpload = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        let fileName = file.name
        let reader = new FileReader()
        reader.onload = function () {
            let arrayBuffer = new Uint8Array(reader.result)
            const base64String = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => (data.push(String.fromCharCode(byte)), data), []).join(''))
            if (e.target.files.length && sessionStorage.getItem(`${fileName}`) === null) {
                 dispatch(addImg(fileName, `data:${file.type};base64,${base64String}`))
                 sessionStorage.setItem("gallery", JSON.stringify(top5Values(gallery)))
            }
        }
        reader.readAsArrayBuffer(file);
       
    }

    const onSelect = fileName => (e) => {
        e.preventDefault()
        dispatch(setCurrentImg(`${gallery[fileName]}`))
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.gallery}>
                    {Object.keys(gallery).length > 0 ? Object.keys(reverseObjectKeys(gallery))
                        .map(fileName => <div className={`${style.item} ${currentImg === gallery[fileName] ? style.active : ''}`}
                            key={fileName} onClick={onSelect(fileName)}>{fileName}</div>) : ''}
                </div>
                <label className={style.item}>
                    + upload new image
                    <input type="file" name="img" onChange={onUpload} />
                </label>
            </div>
        </div>

    )
}

export default Aside