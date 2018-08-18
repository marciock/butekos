import {Creator} from '../../dist/nerdcreator';

import {MRowContainter} from '../../components/m-row-container';

import Icon from '../common/icon';

export class Home extends Creator{

    render(){
        return(
            `<div style="margin-top:10em;">
            <m-row-container >

              <btk-icon url="#/scan" component="btk-client" src="./img/comanda.png" title="Nova Comanda"></btk-icon>
            </m-row-container>
            </div>
         `
        )
    }
    
}
customElements.define('btk-home',Home);