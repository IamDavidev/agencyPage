import cone from '../assets/desktop/image-gallery-cone.jpg'
const imgs = {
    cone
}
class ContaineImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
       this.name{
           color:red
       }
    `;
    }

    connectedCallback() {
        this.namecss = this.getAttribute('name')
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ContaineImage.styles}</style>
 <div class='${this.namecss}'>
     ${imgs[this.namecss]}
</div>
    `;
    }
}
customElements.define('containe-image', ContaineImage);