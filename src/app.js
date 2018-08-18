import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import {NdView} from  '../dist/nerdrouter';

import NavBar from './common/navbar';
import Home from './home/index';
import Client from './client/index';
import Comanda from './comanda/index';


export class Apps extends Creator{

  
  render(){
    
  
    return (
      `
       <nav-bar></nav-bar>
        <nd-view><btk-home></btk-home></nd-view>
        
      `
    )
  }
  
  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  