import React, { Component } from 'react';
import { TaskNameField, CategorySelectMenu, PriorityRadioButtons, ShiftCheckBoxes } from './AddPrepFields';
import checkboxes from '../../../config/checkboxes';


export default class AddPrepTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map()
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TaskNameField /><br />
          <CategorySelectMenu /><br />
          <React.Fragment>
            {
              checkboxes.map(item => (
                <label key={item.key}>
                  {item.name}
                  <ShiftCheckBoxes
                    name={item.nam}
                    checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleChange} />
                </label>
              ))
            }
          </React.Fragment>
        </form>
      </div>
    );
  }
}