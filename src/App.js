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
    habitId: 0,
    habitName: '',
    habitIteration: 0,
    habits: [],
    habitsOptions: [
      'Drink 1 Cup of Water',
      '1 Hour of Coding',
      '10 Pushups',
      'Eat Something Healthy',
      '1 Hour of Reading',
      '10 Minutes of Meditation'
    ]
  }

  handleNameChange = (e) => {
    this.setState({
      habitName: e.target.value
    })
  }
  handleIterationChange = (e) => {
    this.setState({
      habitIteration: e.target.value
    })
  }
  handleAddHabit = (e) =>{
    this.setState({
      habits: this.state.habits.concat([{
        key: this.state.habitId,
        name: this.state.habitName,
        iterations: this.state.habitIteration
      }]), 
      habitId: this.state.habitId + 1
    })
  }
  render() {
    const habitsDisplay = this.state.habits.map(habit => {
      return (
        <ul>
          <li key={habit.habitId}>
          <h3>{habit.name}</h3>
          <div className="iterations-area">
            {[...Array(habit.iterations)].map((iteration, i)=>{
              return <input type="radio" key={i}/>
            })}
          </div>
          </li>
        </ul>
      )
    })
    return (
      <div className="App">
      <h1> Healthy Things</h1>
      <div className="healthy-habits">
        {habitsDisplay}
      </div>
      <div className="add-habits">
        <DropDownList data={this.state.habitsOptions}
          value={this.state.habitName}
          onChange={this.handleNameChange}
        />
        <NumericTextBox
          format='0'
          min={0}
          max={22}
          value={this.state.habitIteration}
          onChange={this.handleIterationChange}
        />
        <Button primary={true} onClick={this.handleAddHabit}>Add Habit</Button>
      </div>
      <div className="nutrition-grid">
        <Grid data={this.state.data}>
          <Column field="Description" title='Food'/>
          <Column field="Measure" title='Amount'/>
          <Column field="Protein(g)Per Measure" title='Food'/>
          <Column field="Carbohydrate, by difference(g)Per Measure" title='Sugar'/>
        </Grid>
      </div>
      </div>
    );
  }
}

export default App;
