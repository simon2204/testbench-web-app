import React, { useEffect, useState } from 'react'

import './SubmissionForm.css'
import UploadArea from './UploadArea'
import axios from 'axios'
// import { saveAs } from 'file-saver'
import loading from './loading.svg'

let entries = { entries:
    [{task: {id: Number, name: String, points: Number}, successful: Boolean}]
}

const SubmissionForm = (props) => {
    const [allTests, setAllTests] = useState([])
    const [test, setTest] = useState('')
    const files = props.files
    const setFiles = props.setFiles
    const [statusText, setStatusText] = useState('')
    const [result, setResult] = useState(entries)

    // load the available tests
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/available_tests'
        })
        .then(resp => {
            if(resp.data) {
                resp.data.sort()
                setAllTests(resp.data)
            }

        })
        .catch(err => console.log(err))
    }, [])

    const onTestChange = evt => {
        setTest(evt.target.value)
    }

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('testName', test)
        files.forEach(file => formData.append('files[]', file))
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/upload',
            data: formData,
            responseType: "json",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: evt => setStatusText('Testdateien werden Hochgeladen...'),
            onDownloadProgress: evt => setStatusText('Feedback wird Heruntergeladen...')
        }).then(response => {
            setStatusText('')
            if(response) {
                setResult(response.data)
            }
        }).catch(err => console.error(err))
        // onUploadProgress: evt => setPercentCompleted(Math.round((evt.loaded * 100) / evt.total))
    }

    if(statusText === '') {
        return (
            <div className="submission-form">
                <label>Praktikumsaufgabe: </label>
                <select value={test} onChange={onTestChange}>
                    <option/>
                    { allTests.map(test => <option key={test} value={test}>{test}</option>) }
                </select>
                <UploadArea 
                    files={files}
                    setFiles={setFiles}
                    disabled={test === ''}
                    disabledMsg="Bitte wählen Sie zuerst eine Praktikumsaufgabe aus."/>
                <button onClick={onSubmit}>Testen</button>
            </div>
        )
    } else {
        return (
            <div className="upload-info">
                <h2>{statusText}</h2>
                <img width='150px' src={loading} alt="Animation" />
            </div>
        )
    }
}
export default SubmissionForm
