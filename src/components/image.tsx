import React, { useRef } from 'react'


export default function Image(props: any) {
    const imgRef = useRef<HTMLImageElement | null>(null)
    const { handleClickImg } = props;

    return (
        <img {...props} ref={imgRef} onClick={(e) => {
            handleClickImg(e, imgRef)
        }} />
    )
}