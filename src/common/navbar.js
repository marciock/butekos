import {Creator} from '../../dist/nerdcreator';

import {MNavBar,MNavOpt} from '../../components/m-navbar';

import MySideNav from './sidenav';

export class NavBar extends Creator{

    render(){
        return (
            `<m-navbar text-logo="Butekos" logo-align="center"  menu-align="right" color="red">
               <m-nav-opt url="#"><m-nav-opt>

            </m-navbar>
           <side-nav></side-nav>
            

           
            `
        )
    }
    callBack(){

       const navbar=this.querySelector('m-navbar');
       

       navbar.addEventListener("click",()=>{
        navbar.setAttribute('data-target','slide-out')
        navbar.classList.add('sidenav-trigger')

       })


        

    }
}
customElements.define('nav-bar',NavBar);
