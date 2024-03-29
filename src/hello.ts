const nativeInputSet = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
Object.defineProperty(HTMLInputElement.prototype, 'value', {
    set: function (value) {
        console.log("### set value", value);
        this.setAttribute('value', value);
        nativeInputSet?.call(this, value);
    },
});

const input = document.querySelector('#name') as HTMLInputElement;

input?.addEventListener('input', (event) => {
    input.value = (event.target as HTMLInputElement).value;
});

new MutationObserver((mutations) => {
    console.log("### MutationObserver", input.value);
}).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
});