import React from 'react'
import NavBar from './NavBar';
import TodoList from './TodoList';
import ThemeContextProvider from './ThemeContext';

 const ContextApp = () => {
  return (
    <div className='App'>
        <div className='ui raised very padded container segment'>
            <ThemeContextProvider>
            <NavBar />
            <TodoList />
            </ThemeContextProvider>
        </div> 

    </div>
  )
}
export default ContextApp;