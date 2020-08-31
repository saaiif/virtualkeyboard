import React from 'react';
import ReactDom from 'react-dom';
import KeyboardedInput from './KeyboardedInput';
import './Keyboard.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      customMapping: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@', '*sh'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.com', '*bs'],
      ],
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValue1Change = this.handleValue1Change.bind(this);
    this.handleValue2Change = this.handleValue2Change.bind(this);
    this.handleValue3Change = this.handleValue3Change.bind(this);
    this.handleFocusButtonClicked = this.handleFocusButtonClicked.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);

    this.input7ref = null;
  }

  handleValueChange(val) {
    this.setState({ value: val });
  }

  handleValue1Change(val) {
    this.setState({ value1: val });
  }

  handleValue2Change(val) {
    this.setState({ value2: val });
  }
  handleValue3Change(val) {
    this.setState({ value3: val });
  }

  handleFocusButtonClicked() {
    this.input7ref.focus();
  }

  handleOnFocus() {
    this.handleValue3Change('');
  }

  render() {
    return (
      <div >
        <h1>Virtual Keyboard</h1>
      <div className="virtualInputs">
        <p>Date</p>
        <KeyboardedInput
          value={this.state.value}
          onChange={(value) => {
            this.handleValueChange(value);
          }}
          required
          enabled
        />


        <p>Time</p>
        <KeyboardedInput
          value={this.state.value1}
          onChange={(value) => {
            this.handleValue1Change(value);
          }}
          // defaultKeyboard={this.state.customMapping}
          enabled
        />


        <p>Name</p>
        <KeyboardedInput
          value={this.state.value2}
          onChange={(value) => {
            this.handleValue2Change(value);
          }}
          enabled
          // keyboardClassName="testme"
        />

        <p>Details</p>
        <KeyboardedInput
          value={this.state.value3}
          onChange={(value) => {
            this.handleValue3Change(value);
          }}
          onFocus={this.handleOnFocus}
          enabled
        />

        </div>
      </div>
    );
  }
}
