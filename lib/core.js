/**
 * Base class for all Once components
 */
export class OnceComponent extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        this.afterRender?.();
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
        this.afterRender?.();
    }
    /**
     * Override this method to define component markup
     */
    render() {
        this.shadow.innerHTML = `<p>Override render()</p>`;
    }
}
