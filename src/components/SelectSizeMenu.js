import React, { Component } from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';


const options = [
  { value: '', label: '', color: '#00B8D9', isFixed: true },
  { value: '10', label: '10 x 10', color: '#FF5630' },
  { value: '15', label: '15 x 15', color: '#FF8B00' },
  { value: '20', label: '20 x 20', color: '#FFC400' }
];

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const params = {
      target: {
        name: this.props.name,
        value: e.value
      }
    }
    this.props.handleChange(params);
  }

  render() {
    return (
      <Select
        onChange={this.onChange}
        defaultValue={options[0]}
        options={options}
        styles={colourStyles}
      />
    );
  }
}
