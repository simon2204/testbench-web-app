import './TestResult.css'
import CFilesList from "./Components/CFilesList";

function TestResult(props) {
    return (
        <div>
            <h1>Count {props.files.length}</h1>
            <CFilesList files={props.files} />
        </div>
    )
}

export default TestResult;