/*Avoiding global scope pollution — Any variables declared inside an IIFE stay scoped to that function only. They don't leak into the global scope, which prevents naming conflicts with other scripts or libraries running on the same page. */

(function chai(){ //named iife
    console.log(`db connected`);
}) (); // ; is used to end the iife here only as it doent know ehn to end

(()=>{
    console.log(`db connected`);
})();

((name)=>{
    console.log(`db connected ${name}`);
})(`Shakti`);


