import React from 'react';

const AppButton = ({ btnClickCb, children, btnClass }) =>
  <button type='button' className={btnClass} onClick={btnClickCb}>{children}</button>

export default AppButton;
