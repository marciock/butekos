export class LinkView{

    url(url){

        const path=window.location.href;

        const newPath=path+url;

        window.location.href=url;

    }
    component(component){

        const compo=document.createElement(component);
        const view=document.querySelector('nd-view');

        view.innerHTML=null;

        view.appendChild(compo);

    }
}