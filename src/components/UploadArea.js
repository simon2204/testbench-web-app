import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './UploadArea.css'
import doc from './document.svg'
import UploadFile from './UploadFile'

const UploadArea = (props) => {
    const files = props.files
    const setFiles = props.setFiles
    
    let disabled = props.disabled ?? false

    const onDrop = useCallback(acceptedFiles => {
        // remove files that already exist
        acceptedFiles = acceptedFiles
            .filter(f => !files.includes(f))

        // sort files by their names
        const newFiles = [...files, ...acceptedFiles]
                            .sort((f1, f2) => f1.name.localeCompare(f2.name))

        setFiles(newFiles)
    }, [files, setFiles])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: onDrop,
        disabled: disabled
    })

    const deleteFile = (evt, fileToDelete) => {
        const newFiles = files.filter(file => file !== fileToDelete)
        setFiles(newFiles)
        evt.stopPropagation()
    }
    
    return (
        <div className="upload-area" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="heading">{
                disabled ? (props.disabledMsg || "Der Bereich ist deaktiviert") :
                (isDragActive 
                    ? "Lassen Sie die Dateien fallen" 
                    : "Ziehen Sie Ihre Dateien in den markierten Bereich oder klicken Sie um welche Auszuwählen.")
            }</p>
            <div className="selected-files">
                { files.length === 0 && <img className="empty-files" alt="Empty File" src={doc} />}
                { files.map(f => (<UploadFile key={f.name} fileName={f.name} onDelete={evt => deleteFile(evt, f)} />)) }
            </div>
        </div>
    )
}
export default UploadArea