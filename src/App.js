import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisteredBillers from './project/RegisteredBillers';
import ConvertToEMI from './project/ConvertToEmi';
import CovertToEMISubmitButton from './project/ConvertToEmiSubmit';
import AutoDebitInstructions from './project/AutoDebitInstructions';




function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<RegisteredBillers />} />
        <Route exact path="/emi" element={<ConvertToEMI />} />
        <Route exact path="/submit" element={<CovertToEMISubmitButton />} />
        <Route exact path="/autodebit" element={<AutoDebitInstructions />} />

      </Routes>
    </div>
  );
}

export default App;
