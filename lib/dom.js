/**
 * DOM helpers for template rendering
 */
export function html(strings, ...values) {
    const template = document.createElement('template');
    const htmlString = strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '');
    template.innerHTML = htmlString.trim();
    return template.content.firstElementChild;
}
