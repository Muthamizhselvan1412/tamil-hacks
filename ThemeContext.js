import React , {createContext} from 'react';

export const ThemeContext= createContext();

class ThemeContextProvider extends React.Component{
    state={
        isDarkTheme:true,
        darkTheme:{
            text:'#fff',
            background:'#5c5c5c'

        },
        lightTheme:{
            text:'#222',
            background:'green'
        }
    }

render(){
    return(
        <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
        </ThemeContext.Provider>
    )
}
}
export default ThemeContextProvider;