/**
 * Base class for all Once components
 */
export declare abstract class OnceComponent extends HTMLElement {
    protected state: Record<string, any>;
    protected shadow: ShadowRoot;
    constructor();
    connectedCallback(): void;
    protected setState(newState: Record<string, any>): void;
    /**
     * Override this method to define component markup
     */
    protected render(): void;
    /**
     * Optional hook invoked after each render
     */
    protected afterRender?(): void;
}
