//  function find(n){
// if(n<=1){
// return
// }
// find(n-1)
// console.log(n);
// find(n-1)
// }
// find(4)

function f(n){
    if(n<=1){
        return 1
    }
    return n*f(n-1)
}
console.log(f(5));