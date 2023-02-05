import React, { useState } from 'react';
import Drawer from 'rc-drawer';
// import motionProps from './motion';
type Props = {}

export default function App2({}: Props) {
  const [open, setOpen] = useState(false);
  const onChange = (bool: boolean) => {
    // console.log('change: ', bool);
  };
  const onTouchEnd = () => {
    setOpen(false);
  };
  const onSwitch = () => {
    setOpen(c => !c);
  };
  return (
    <div>
      <Drawer
        onChange={onChange}
        open={open}
        // defaultOpen
        onClose={onTouchEnd}
        handler={false}
        level={null}
        afterOpenChange={(c: boolean) => {
          console.log('transitionEnd: ', c);
        }}
        placement="right"
        // width={400}
        width="60%"
        // Motion
        // {...motionProps}
      >
        content
      </Drawer>
      <div>
        <button onClick={onSwitch}>打开</button>
      </div>
    </div>
  )
}