import { h } from "preact";

// Component properties: Style, ClickAction, children(default)
// <MyButton > </MyButton>
export function MyButton(props: any){
    /*Logic*/
    return(
      <div>
        <button onClick={props.ClickAction} style={props.Style}>{props.children}</button>
        <p>{props.Hint}</p>
      </div>
    )
  }