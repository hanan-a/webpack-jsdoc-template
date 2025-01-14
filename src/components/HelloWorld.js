/**
 * Creates a Hello World element
 * @param {string} name The name to say hello to. Will default to 'World'
 * @returns {HTMLElement} The hello world element
 */
export function HelloWorld(name = 'World') {
    const element = document.createElement('h1');
    element.textContent = `Hello ${name}!`;
    return element;
}
