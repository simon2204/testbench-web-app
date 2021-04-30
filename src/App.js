import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import SubmissionForm from './components/SubmissionForm'
import Footer from './components/Footer';

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <SubmissionForm />
        <Footer />
      </div>
  )
}
export default App
