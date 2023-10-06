import React from 'react';
import ReactDOM from 'react-dom/client';
import Zealous from './basic';
import Media, { Forms, Report } from './multiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Zealous/>
  <Media/>
  <Report/>
  <Forms/>
</>
);
