import React, {useEffect, useState} from "react";
import CSyntaxHighlighter from "./CSyntaxHighlighter";

function CFilesList({files}) {
    const [code, setCode] = useState([])

    useEffect(() => {
        const reader = new FileReader()
        reader.onabort = () => console.log('File reading was aborted')
        reader.onerror = () => console.log('File reading has failed')
        reader.onload = () =>  setCode(codes => [...codes, reader.result])
        files.forEach(function (file) {
            reader.readAsText(file)
        })
    }, [files]);

    function highLightedCFiles() {
        return code.map(function (files, key) {
            return <CSyntaxHighlighter code={files} key={key}/>
        })
    }

    return (
        <div>
            { code.length > 0 && highLightedCFiles() }
        </div>
    )
}

export default CFilesList;