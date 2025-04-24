/**
 * Base class for all Once components
 */
export abstract class OnceComponent extends HTMLElement {
  protected state: Record<string, any> = {};
  protected shadow: ShadowRoot;

  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  public connectedCallback(): void {
    this.render();
    this.afterRender?.();
  }

  protected setState(newState: Record<string, any>): void {
    this.state = { ...this.state, ...newState };
    this.render();
    this.afterRender?.();
  }

  /**
   * Override this method to define component markup
   */
  protected render(): void {
    this.shadow.innerHTML = `<p>Override render()</p>`;
  }

  /**
   * Optional hook invoked after each render
   */
  protected afterRender?(): void;
}
