import React from 'react';
import "./homeRegister.scss";
import RenderRegisterButton from '../../../header/renderItems/renderRegisterButton/RenderRegisterButton';

function HomeRegister() {
  return (
   <div className='homeSection__container-register'>
    <RenderRegisterButton />
   </div>

  );
}

export default HomeRegister;