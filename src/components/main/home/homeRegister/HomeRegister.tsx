import React from 'react';
import "./homeRegister.scss";
import RenderRegisterButton from '../../../header/renderItems/renderRegisterButton/RenderRegisterButton';

function HomeRegister() {
  return (
   <div className='homeSection__container-register'>
    <RenderRegisterButton className='homeSection__container-button'/>
   </div>

  );
}

export default HomeRegister;