import React, { Component } from 'react'
import  ThemeContext  from './ThemeContext';

 class TodoList extends Component {
  static contextType= ThemeContext;

  render() {
    const {isDarkTheme , darkTheme ,lightTheme}=this.context; 
    const theme=isDarkTheme ? darkTheme:lightTheme;

    return (
      <div className='ui list' style={{color:theme.text , background:theme.background,height:'140px',textAlign:'center'}}>
          <p className='item'>Need to buy books</p>
          <p className='item'>Prepare for Interview</p>
          <p className='item'>Plan a tour</p>

      </div>
    )
  }
}
export default TodoList;