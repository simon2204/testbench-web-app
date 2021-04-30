import React from 'react'

import './UploadFile.css'
import docImg from './document.svg' 
import cross from './criss-cross.svg'

const UploadFile = (props) => {

    return (
        <div className="upload-file">
            <img className="remove" src={cross} alt="Datei entfernen" onClick={props.onDelete} />
            <div className="icon" >
                <img src={docImg} alt="Datei Icon" />
            </div>
            <label>{props.fileName}</label>
        </div>
    )

}
export default UploadFile