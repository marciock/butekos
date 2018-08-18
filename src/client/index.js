import {Creator} from '../../dist/nerdcreator';

import BtkCamera from '../scan/camera';
export class Cliente extends Creator{

    render(){
        return (
            `
                <btk-camera content="client" 
                cancel-url="#/" 
                cancel-component="btk-home"
                url="#/comanda"
                component="btk-comanda"                
                ></btk-camera>           

            `
        )
    }
}
customElements.define('btk-client',Cliente);