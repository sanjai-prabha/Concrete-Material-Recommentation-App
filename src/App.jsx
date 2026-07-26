import React, { useState } from "react";

function App() {
  const [structure, setStructure] = useState("");
  const [strength, setStrength] = useState("");
  const [exposure, setExposure] = useState("");
  const [result, setResult] = useState("");

  function recommend() {
    if (structure === "Dam") {
      setResult(
        "Cement: Low Heat Cement\nAggregate: Durable coarse aggregate\nAdmixture: Fly Ash\nReason: Suitable for massive structures"
      );
    } 
    else if (exposure === "Severe") {
      setResult(
        "Cement: PPC/PSC\nAggregate: Good quality aggregate\nAdmixture: Silica Fume\nReason: Better durability"
      );
    } 
    else {
      setResult(
        "Cement: OPC/PPC\nAggregate: Fine + Coarse aggregate\nAdmixture: Fly Ash"
      );
    }
  }

  return (
    <div>
      <h1>Concrete Material Recommendation App</h1>

      <h3>Structure Type</h3>
      <select onChange={(e)=>setStructure(e.target.value)}>
        <option>Select</option>
        <option>Building</option>
        <option>Bridge</option>
        <option>Dam</option>
        <option>Pavement</option>
      </select>

      <h3>Strength</h3>
      <select onChange={(e)=>setStrength(e.target.value)}>
        <option>M20</option>
        <option>M25</option>
        <option>M30</option>
        <option>M40</option>
      </select>

      <h3>Exposure Condition</h3>
      <select onChange={(e)=>setExposure(e.target.value)}>
        <option>Mild</option>
        <option>Moderate</option>
        <option>Severe</option>
      </select>

      <br/><br/>

      <button onClick={recommend}>
        Recommend Material
      </button>

      <h2>Result</h2>
      <p>{result}</p>

    </div>
  );
}

export default App;
