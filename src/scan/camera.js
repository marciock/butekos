import {Creator} from   '../../dist/nerdcreator';
import MRow from '../../components/m-row';
import {MCol} from '../../components/m-col';
import {MFab,MFabItem,InitFab} from '../../components/m-fabs';
import {NdSession} from '../../dist/nerdhttp';
import {NdLink} from '../../dist/nerdrouter';
import {LinkView} from '../common/linkview';

import Instascan from  'instascan';
export class BtkCamera extends Creator{

    render(){
        return (
                ` 
                    <m-row>
                      <div class="center-align" >
                        <device type="media" id="media"></device>
                        <video class="responsive-video" id="preview" ></video>
                      </div>
                    </m-row>
                    <m-row>
                      <m-fab color="blue" icon="menu" id="fab">
                        <nd-link url="${this.getProps('cancel-url')}" component="${this.getProps('cancel-component')}"><m-fab-item color="red" url="#/" id="cancelar">block</m-fab-item></nd-link>
                        <m-fab-item color="black" url="#/" id="btcamera">camera_alt</m-fab-item>
                        <m-fab-item color="green" url="#/" id="ok">check</m-fab-item>

                      </m-fab>
                        
                    </m-row>
               

                `
        )
    }
    callBack(){
        const fab=this.querySelector('#fab');
        const cancelar=this.querySelector('#cancelar');
        const ok=this.querySelector("#ok");
        const media=this.querySelector('#media');
        const teste=document.querySelector('#preview');
        const btcamera=document.querySelector('#camera');

        const initFab=new InitFab(fab);

        let linkView=new LinkView();
        const myContent=this.getProps('content');
        const url=this.getProps('url');
        const component=(this.getProps('component'));
       



        media.addEventListener('change',()=>{

            teste.src=media.data;
        })


        let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
         scanner.addListener('scan', function (content) {

            let session=new NdSession();
            session.set(myContent,content);

            if(url !==null && component !==null){
                linkView.url(url);
                linkView.component(component);


            }
           

          alert(session.get(myContent));
          scanner.stop();
        
        });


        Instascan.Camera.getCameras().then(function (cameras) {
         if (cameras.length > 0) {
         scanner.start(cameras[1]);
        } else {
         console.error('No cameras found.');
        }
        }).catch(function (e) {
         console.error(e);
        });

        cancelar.addEventListener('click',()=>{
            scanner.stop();
        });


        btcamera.addEventListener('click',()=>{
            Instascan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                scanner.start(cameras[1]);
               } else {
                console.error('No cameras found.');
               }
               }).catch(function (e) {
                console.error(e);
               });
        }) ;

        media.addEventListener('click',()=>{
          Instascan.Camera.getCameras().then(function (cameras) {
              if (cameras.length > 0) {
              scanner.start(cameras[1]);
             } else {
              console.error('No cameras found.');
             }
             }).catch(function (e) {
              console.error(e);
             });
      });

      
  }
  
}
customElements.define('btk-camera',BtkCamera);
