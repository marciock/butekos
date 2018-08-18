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
                    <m-input col="s6" id="opt" >OPT</m-input>
                    <m-input col="s6" id="qtd" type="number" >QTD</m-input>
                </m-row>
              <div>
              
              
            </div>

            `
        )
    }
    callBack(){
      const modal=document.getElementById('add-item');
      const qtdInput=this.querySelector('#qtd>input');
      qtdInput.value="1";
      
    }
}
customElements.define('add-item',AddItem);