import {creator, Creator} from '../../dist/nerdcreator';
import {MFab,MFabItem,InitFab} from '../../components/m-fabs';

export class FabMenu extends Creator{

    render(){
        return (
            ` 
              <m-fab color="purple" icon="menu">
                <m-fab-item color="red" url="#">block</m-fab-item>
                <m-fab-item color="orange" url="#" id="add">add</m-fab-item>
                
              </m-fab>

            `
        )
    }
    callBack(){
      const fab=this.querySelector('m-fab');
      const init=new InitFab(fab);

      
    }
}
customElements.define('fab-menu',FabMenu);
