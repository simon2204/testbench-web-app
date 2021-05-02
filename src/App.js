import React, {useState} from 'react';
import "antd/dist/antd.css";
import './App.css';
import FileUpload from "./components/FileUpload/FileUpload";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TestResult from "./components/TestResult/TestResult";

function App() {
    const [files, setFiles] = useState([]);
    const [entries, setEntries] = useState([]);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/test-result">Test Result</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/test-result">
                        <TestResult files={files} entries={entries}/>
                    </Route>
                    <Route path="/">
                        <FileUpload
                            files={files}
                            setFiles={setFiles}
                            setEntries={setEntries}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
