import { useReducer } from "react";


const initialState ={
    showText:false,
    changeThemeStyle:false
}

function reducer(state, action) {
    console.log(state);
  switch (action.type) {
    case "HIDE_TEXT":
      return{
        ...state,
        showText:false
      }
    case "SHOW_TEXT":
      return {
        ...state,
        showText:true
      }
    case "CHANGE_THEME":
      return{
        ...state,
        changeThemeStyle: !state.changeThemeStyle
      }
  }
}

export default function useReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {state?.showText?<h2 style={{backgroundColor:state?.changeThemeStyle?'#000':null,color:state?.changeThemeStyle?'yellow':'black'}}>Use Reducer Example</h2>:null}     
      <button onClick={()=> dispatch({type:'HIDE_TEXT'})}>hide Text</button>
      <button onClick={()=> dispatch({type:'SHOW_TEXT'})}>show Text</button>
      <button onClick={()=> dispatch({type:'CHANGE_THEME'})}>change Theme</button>
    </>
  );
}
