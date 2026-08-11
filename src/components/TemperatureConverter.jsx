import { useState } from "react";
import { convertTemperature } from "../utils/conversion";
import "./TemperatureConverter.css";

const UNITS = ["Celsius", "Fahrenheit", "Kelvin"];

function getSymbol(unit) {
  if (unit === "Celsius") return "°C";
  if (unit === "Fahrenheit") return "°F";
  return "K";
}

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleConvert = (event) => {
    event.preventDefault();
    setError("");
    setResult("");

    try {
      const converted = convertTemperature(temperature, fromUnit, toUnit);
      setResult(`${Number(converted.toFixed(2))} ${getSymbol(toUnit)}`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = () => {
    setTemperature("");
    setFromUnit("Celsius");
    setToUnit("Fahrenheit");
    setResult("");
    setError("");
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult("");
    setError("");
  };

  return (
    <main className="converter-page">
      <div className="converter-card">
        <h1>Temperature Converter</h1>
        <p className="converter-subtitle">
          Convert between Celsius, Fahrenheit, and Kelvin.
        </p>

        <form className="converter-form" onSubmit={handleConvert}>
          <div className="field">
            <label htmlFor="temperature">Temperature</label>
            <input
              id="temperature"
              type="number"
              step="any"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="e.g. 25"
            />
          </div>

          <div className="units-row">
            <div className="field">
              <label htmlFor="from-unit">From</label>
              <select
                id="from-unit"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit} ({getSymbol(unit)})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="swap-btn"
              onClick={handleSwap}
              aria-label="Swap units"
              title="Swap units"
            >
              ⇄
            </button>

            <div className="field">
              <label htmlFor="to-unit">To</label>
              <select
                id="to-unit"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit} ({getSymbol(unit)})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">
              Convert
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        {result && (
          <div className="result-box" role="status">
            <p className="result-label">Result</p>
            <p className="result-value">{result}</p>
          </div>
        )}

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}

export default TemperatureConverter;
