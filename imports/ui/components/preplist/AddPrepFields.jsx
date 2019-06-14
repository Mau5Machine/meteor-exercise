import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';


export const TaskNameField = (props) => {
  return (
    <input type="text" name="Task Name" placeholder="Task Name" />
  );
}

export const CategorySelectMenu = (props) => {
  return (
    <label>
      Category
      <select>
        <option defaultValue="">Choose a Category</option>
        <option value="sauces">Sauces</option>
        <option value="proteins">Proteins</option>
        <option value="salads">Salads</option>
      </select>
    </label>
  );
}

export const ShiftCheckBoxes = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={props.name} checked={props.checked} onChange={props.onChange} />
);


export const PriorityRadioButtons = (props) => {
  return (
    <RadioGroup name="priority" selectedValue={props.selectedValue} onChange={props.handleChange}>
      <Radio value="high" />High
      <Radio value="med" />Medium
      <Radio value="low" />Low
    </RadioGroup>
  );
}