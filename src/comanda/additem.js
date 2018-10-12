import {Creator} from '../../dist/nerdcreator';
import {MRow} from '../../components/m-row';
import {MInput} from '../../components/m-forms';
import {MFloat} from '../../components/m-float';
import {MIcon} from '../../components/m-icon';

export class AddItem extends Creator{

    render(){
        return(
            `
            <div id="add-item" class="modal">
              <div class="modal-content">
                <m-row>
                    <m-input col="s6" id="opt" type="number" tabindex="0">OPT</m-input>
                    <m-input col="s6" id="qtd" type="number" edit="1"  tabindex="1"></m-input>
                </m-row>
              <div>
              
              
            </div>

            `
        )
    }
    callBack(){
      const modal=document.getElementById('add-item');
     const opt=document.getElementById('opt');
     const qtd=document.getElementById('qtd');

     opt.addEventListener("keypress",(e)=>{
        if (e === 13) { 
            qtd.focus();
          }
     })
        

      
       
      
    }
}
customElements.define('add-item',AddItem);