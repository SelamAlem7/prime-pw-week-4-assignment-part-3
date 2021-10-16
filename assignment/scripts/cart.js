console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ) {
    basket.push ( item );
    return true;
  }
console.log( 'Adding mango (expect true)', addItem( 'mango'));
console.log(`Basket is now ${basket}`);

console.log( 'Adding guava (expect true)', addItem( 'guava'));
console.log(`Basket is now ${basket}`);

console.log( 'Adding peach (expect true)', addItem( 'peach'));
console.log(`Basket is now ${basket}`);

console.log( 'Adding avocado (expect true)', addItem( 'avocado'));
console.log(`Basket is now ${basket}`);

console.log(basket);
//////////////////////////////////////////////////////////////////

function listItems( basket ){
  for( let i =0; i < basket.length; i++){
    console.log(basket[i]);
  }
}
console.log(listItems(basket));

//////////////////////////////////////////////////////////////////


function empty( basket ){
  while( basket.length){
      basket.pop();
  }
}
 console.log(empty(basket));
