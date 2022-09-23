/**
 *    Module exports and imports in ES6
 * ES6 Modules are stored in files. There is exactly one module per file and one file per module. There are two ways of exporting 
 * things from a module, but they better be used separately
 * 
 */

const sqrt = Math.sqrt;
export function square(x){
    return x * x;
}
export function diag(x,y){
    return(sqrt(square(x) + square(y)));
}