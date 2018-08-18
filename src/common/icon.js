import {Creator} from '../../dist/nerdcreator';
import {NdLink} from '../../dist/nerdrouter';
import {MCol} from '../../components/m-col';


export class Icon extends Creator{

    render(){
        return(
            `
              <m-col s="12" style="text-align:center;">
                <nd-link url="${this.getProps('url')}" component="${this.getProps('component')}">
                  <img src="${this.getProps('src')}" height="128em" width="128em">
                  <p>${this.getProps('title')}</p>
                </nd-link>
              </m-col>

            `
        )
    }
}
customElements.define('btk-icon', Icon);