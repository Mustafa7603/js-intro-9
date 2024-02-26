
function inits(fullName){
    let lastIn = fullName.lastIndexOf(' ') + 1
       return  `${fullName[0]}${fullName.at(lastIn)}`
   }
   console.log(inits('John Doe'));
   console.log(inits('Adam Smith'));
   console.log(inits('Max Marcus Smith'));

// IIFE -- invokes itself right away

( function () {
    console.log('This is an IIFE');
})();
