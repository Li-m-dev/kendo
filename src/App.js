import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import logo from './logo.svg';
import './App.css';

import nutrition from './nutrition.json';

class App extends Component {
  state = {
    data: nutrition,
    habitsOptions: [
      'Drink 1 Cup of Water',
      '1 Hour of Coding',
      '10 Pushups',
      'Eat Something Healthy',
      '1 Hour of Reading',
      '10 Minutes of Meditation'
    ]
  }
  render() {
    return (
      <div className="App">
      <h1> Health Things</h1>
      <div className="healthy-habits"></div>
      <div className="add-habits">
        <DropDownList data={this.state.habitsOptions}/>
        <NumericTextBox/>
        <Button>Add Habit</Button>
      </div>
      <div className="nutrition-grid">
        <Grid data={this.state.data}>
          <Column field="Description" title='Food'/>
          <Column field="Measure" title='Amount'/>
          <Column field="Protein(g)Per Measure" title='Food'/>
          <Column field="Carbohydrate, by difference(g) Per Measure" title='Food'/>
        </Grid>
      </div>
      </div>
    );
  }
}

export default App;
