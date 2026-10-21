export function greet(name){
    return `Hello, ${name}`;
}


export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
