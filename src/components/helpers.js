export function createMarkup(content) {
    return {__html: content};
}

export function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}