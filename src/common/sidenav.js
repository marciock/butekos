import {Creator} from '../../dist/nerdcreator';
import {MIcon} from '../../components/m-icon';

export class MySideNav extends Creator{

    render(){
        return(
            ` 
                <ul id="slide-out" class="sidenav">
                     <li><a class="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
                </ul>
            `
        )
        
    }
    
}
customElements.define('side-nav',MySideNav);