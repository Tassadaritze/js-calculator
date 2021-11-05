import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "0"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const lastChar = this.state.input[this.state.input.length - 1];
        switch (e.target.id) {
            case "clear":
                this.setState({ input: "0" });
                break;
            case "equals":
                this.setState({ input: eval(this.state.input) });
                break;
            case "divide":
                this.setState({ input: this.state.input + "/" });
                break;
            case "multiply":
                this.setState({ input: this.state.input + "*" });
                break;
            case "subtract":
                this.setState({ input: this.state.input + "-" });
                break;
            case "add":
                this.setState({ input: this.state.input + "+" });
                break;
            case "decimal":
                if (lastChar.search(/[0-9]/) !== -1)
                    this.setState({ input: this.state.input + "." });
                break;
            case "zero":
                if (!(this.state.input[0] === "0" && this.state.input.length === 1))
                    this.setState({ input: this.state.input + "0" });
                break;
            case "one":
                this.setState({ input: this.state.input + "1" });
                break;
            case "two":
                this.setState({ input: this.state.input + "2" });
                break;
            case "three":
                this.setState({ input: this.state.input + "3" });
                break;
            case "four":
                this.setState({ input: this.state.input + "4" });
                break;
            case "five":
                this.setState({ input: this.state.input + "5" });
                break;
            case "six":
                this.setState({ input: this.state.input + "6" });
                break;
            case "seven":
                this.setState({ input: this.state.input + "7" });
                break;
            case "eight":
                this.setState({ input: this.state.input + "8" });
                break;
            case "nine":
                this.setState({ input: this.state.input + "9" });
                break;
        }
        this.setState((state) => {
            let clean = state.input.toString();
            if (clean[0] === "0" && clean.search(/[1-9]/) === 1)
                clean = clean[1];
            if (clean) {
                clean = clean.replace(/-(?=-)/g, "");
                clean = clean.replace(/-(?=[/*\-+])/g, "");
                clean = clean.replace(/[/*+](?=[/*+])/g, "");
                clean = clean.replace(/(\.\d*)\./g, "$1");
            }
            return { input: clean };
        });
    }

    render() {
        return (
            <div className="Calculator">
                <div id="display">{this.state.input}</div>
                <button id="clear" onClick={this.handleClick}>C</button>
                <button id="equals" onClick={this.handleClick}>=</button>
                <button id="zero" onClick={this.handleClick}>0</button>
                <button id="divide" onClick={this.handleClick}>/</button>
                <button id="multiply" onClick={this.handleClick}>*</button>
                <button id="seven" onClick={this.handleClick}>7</button>
                <button id="eight" onClick={this.handleClick}>8</button>
                <button id="nine" onClick={this.handleClick}>9</button>
                <button id="subtract" onClick={this.handleClick}>-</button>
                <button id="four" onClick={this.handleClick}>4</button>
                <button id="five" onClick={this.handleClick}>5</button>
                <button id="six" onClick={this.handleClick}>6</button>
                <button id="add" onClick={this.handleClick}>+</button>
                <button id="one" onClick={this.handleClick}>1</button>
                <button id="two" onClick={this.handleClick}>2</button>
                <button id="three" onClick={this.handleClick}>3</button>
                <button id="decimal" onClick={this.handleClick}>.</button>
            </div>
        )
    }
}

export default Calculator;
