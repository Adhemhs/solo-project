var currentMenu=[
  { productName:'espresso',
  priceOnTND:1.5,
  source:'./product/espresso.jpg'
  },{
    productName:'americano coffe',
    priceOnTND:1.7,
    source:'./product/americano-coffe.jpg'
  },{
    productName:'brewed coffe',
    priceOnTND:3,
    source:'./product/brewed-coffee.jpg'
  },{
    productName:'cappuccino',
    priceOnTND:2.5,
    source:'./product/cappuccino.jpg'
  },{
    productName:'strawberry cake',
    priceOnTND:4,
    source:'./product/strawberry-cake.jpg'
  },{
    productName:'mojito',
    priceOnTND:4,
    source:'./product/mojito.jpg'
  },{
    productName:'orange juice',
    priceOnTND:3.3,
    source:'./product/orange-juice.jpg'
  },{
    productName:'soft drinks',
    priceOnTND:2.5,
    source:'./product/soft-drinks.jpg'
  }
  ];
  var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} ;
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}


 $('#quote').click(function(){
     $('#quote').remove()
  });

 

 


var displayProd = function (array){
    each(array,function(e,i){
    var img = $(`<img class="my products" id ="exc" src=${e.source}>`)
       $("#col").append(img)
     })
    };
      var prod= currentMenu;
     displayProd(prod);

  
  var hello = $('li1');

hello.click(function(){

  console.log(hello.val())
});



function makeObject(name,price){
  var obj={};
obj.name=name 
obj.price=price 
return obj
} 






// var renderBill=function()
// 

// var chooseProd= function(array){
  
// }


var price= currentMenu[0].priceOnTND

console.log(price)


