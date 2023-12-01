
import { h } from "preact";

import { MyButton } from './button/index';
import { useState } from 'preact/hooks';

export function Content() {

  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount(count + 1);
  }

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h3>My first experiment in VDOM Oracle JET Project!</h3>
      <MyButton Style={{color:'green'}} ClickAction={clicked} Hint='Press the button above'>GO</MyButton>
    </div>
  );
};


