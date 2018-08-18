import {Creator} from '../../dist/nerdcreator';
import {MHeader} from '../../components/m-header';
import {MContainer} from '../../components/m-container';
import {NdSession} from '../../dist/nerdhttp';

import FabMenu from './fabmenu';
import AddItem  from './additem';



export class Comanda extends Creator{

    render(){

        let session=new NdSession();

        let client=session.get('client');
        let comanda=session.set('comanda','');

        return (
            `<div>
                <m-container>
                    <m-header h="5">${client}</m-header>
                    <div >
                        <ul id="conteudo">
                        </ul>
                    <div>
                </m-container>
                <div id="scan">
                </div>

                <fab-menu></fab-menu>
                <add-item></add-item>
            </div>
            `
        )
    }
    callBack(){
        
        const div=this.querySelector('#scan');
        const add=this.querySelector('#add');
        const conteudo=this.querySelector('#conteudo');
        const item=document.getElementById('add-item');
        

        add.addEventListener('click',()=>{
            item.style.display='block';
           //let li=document.createElement('li');

           //li.innerHTML=mensagem;
           //conteudo.appendChild(li);

        })

       


    }
}
customElements.define('btk-comanda',Comanda);