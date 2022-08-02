import React, { ChangeEvent, MouseEvent, useEffect, FC } from 'react'
import style from './Aside.module.css'
import { useDispatch } from 'react-redux'
import { addImg } from '../../redux/actions/gallery.ts'
import { setCurrentImg } from '../../redux/actions/gallery.ts'
import { reverseObjectKeys, top5Values } from '../../helpers/helpers.ts'

type Props = {
    gallery: object,
    currentImg: string
}

const Aside: FC<Props> = ({ gallery, currentImg }) => {
    useEffect(() => {
        top5Values(gallery) !== undefined && sessionStorage.setItem("gallery", JSON.stringify(top5Values(gallery)))
    })
    const dispatch: any = useDispatch()

    const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        const filesLength = (target.files as FileList).length
        let fileName: string = file && file.name
        let reader: any = new FileReader()
        reader.onload = function () {
            let arrayBuffer = new Uint8Array(reader.result)
            const base64String = btoa(new Uint8Array(arrayBuffer).reduce((data: Array<string>, byte: any) => (data.push(String.fromCharCode(byte)), data), []).join(''))
            if (filesLength && sessionStorage.getItem(`${fileName}`) === null) {
                 dispatch(addImg(fileName, `data:${file.type};base64,${base64String}`))
                 sessionStorage.setItem("gallery", JSON.stringify(top5Values(gallery)))
            }
        }
        reader.readAsArrayBuffer(file);
       
    }

    const onSelect = (fileName: string) => (e: MouseEvent<HTMLDivElement>) => {
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