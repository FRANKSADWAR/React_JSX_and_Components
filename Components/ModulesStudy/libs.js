/**
 *    Module exports and imports in ES6
 * ES6 Modules are stored in files. There is exactly one module per file and one file per module. There are two ways of exporting 
 * things from a module, but they better be used separately
 * 
 */

export const sqrt = Math.sqrt;
export function square(x){
    return x * x;
}
export function diag(x,y){
    return(sqrt(square(x) + square(y)));
}
/**
 * A module can export multiple things by prefixing its declarations with the keyword export. These exports are distinguished
 * by their names and are called named exports.
 */