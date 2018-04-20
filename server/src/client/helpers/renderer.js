import React from 'react';
import { renderToString } from 'React-dom/server';
import Home from '../components/Home';

export default () => {
  const content = renderToString(<Home />);
  
  return `
   <html>
   <head></head>
   <body>
     <div id="root">${content}</div>
     <script src="bundle.js"></script>
   </body>
   </html>
  `;
}