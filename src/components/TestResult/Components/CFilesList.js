import React, {useEffect, useState} from "react";
import CSyntaxHighlighter from "./CSyntaxHighlighter";
import { Collapse } from 'antd';
const { Panel } = Collapse;


function CFilesList({files}) {
    const [code, setCode] = useState([])


    useEffect(() => {
        files.forEach(function (file) {
            const reader = new FileReader()

            reader.onabort = () => console.log('File reading was aborted')
            reader.onerror = () => console.log('File reading has failed')
            reader.onload = () =>  setCode(codes => [...codes, reader.result])

            reader.readAsText(file)
        })
    }, [files]);

    function highLightedCFiles() {
        return code.map(function (file, key) {
            return (
                <Panel header="main.c" key={key}>
                    <CSyntaxHighlighter code={file}/>
                </Panel>)
        })
    }

    return (
        <div style={{padding: "20px"}}>
            <Collapse bordered={false} defaultActiveKey={['1']}>
                { code.length > 0 && highLightedCFiles() }
            </Collapse>
        </div>
    )
}

export default CFilesList;
