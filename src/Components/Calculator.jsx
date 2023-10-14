import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    return (
        <div className="calculator-container">
            <div className="calculator-card">
                <input className="calculator-input" type="text" value={input + (result !== "" ? " = " + result : "")} readOnly />
                <div className="calculator-buttons">
                    <div className="calculator-row">
                        <div className="calculator-button" onClick={() => handleClick("1")}>1</div>
                        <div className="calculator-button" onClick={() => handleClick("2")}>2</div>
                        <div className="calculator-button" onClick={() => handleClick("3")}>3</div>
                        <div className="calculator-button" onClick={() => handleClick("+")}>+</div>
                    </div>
                    <div className="calculator-row">
                        <div className="calculator-button" onClick={() => handleClick("4")}>4</div>
                        <div className="calculator-button" onClick={() => handleClick("5")}>5</div>
                        <div className="calculator-button" onClick={() => handleClick("6")}>6</div>
                        <div className="calculator-button" onClick={() => handleClick("-")}>-</div>
                    </div>
                    <div className="calculator-row">
                        <div className="calculator-button" onClick={() => handleClick("7")}>7</div>
                        <div className="calculator-button" onClick={() => handleClick("8")}>8</div>
                        <div className="calculator-button" onClick={() => handleClick("9")}>9</div>
                        <div className="calculator-button" onClick={() => handleClick("*")}>*</div>
                    </div>
                    <div className="calculator-row">
                        <div className="calculator-button" onClick={() => handleClick("0")}>0</div>
                        <div className="calculator-button" onClick={handleClear}>C</div>
                        <div className="calculator-button" onClick={handleCalculate}>=</div>
                        <div className="calculator-button" onClick={() => handleClick("/")}>/</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Calculator;
