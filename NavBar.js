import React, { Component } from 'react';
import  ThemeContext  from './ThemeContext';


class NavBar extends Component {
    static contextType= ThemeContext;
    render() {

        const {isDarkTheme , darkTheme ,lightTheme}=this.context; 
        const theme=isDarkTheme ? darkTheme:lightTheme;

        return (
            <nav style={{color:theme.text , background:theme.background}}>
                <h2 className='ui centered header'>Tamil Planer</h2>
                <div className='ui three buttons'>
                    <button className='ui button'>OverView</button>
                    <button className='ui button'>Contact</button>
                    <button className='ui button'>Support</button>
                </div>
            </nav>
        )
    }
}
export default NavBar;