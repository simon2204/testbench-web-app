import './FileUpload.css'

import Navbar from "./Components/Navbar";
import SubmissionForm from "./Components/SubmissionForm";
import Footer from "./Components/Footer";

function FileUpload(props) {
    return (
        <div className="file-upload">
            <Navbar />
            <SubmissionForm
                files={props.files}
                setFiles={props.setFiles}
                setEntries={props.setEntries}
                entries={props.entries}
            />
            <Footer />
        </div>
    )
}

export default FileUpload;
