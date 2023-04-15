
//var itemList=document.querySelector('#items');

//itemList.parentNode.style.backgroundColor='red';
//console.log(itemList.parentNode.parentNode.parentNode);

   //firstElementChild
// var itemList=document.querySelector('#items');
// itemList.children[1].style.backgroundColor='yellow';

  //add hello before ITEM1
// var itemList=document.querySelector('#items');
// itemList.firstElementChild.textContent='hello';



// var itemList=document.querySelector('#items');
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSiblingstyle.color='yellow';

//addclass
var newDiv=document.querySelector('div');
newDiv.className="hello";

//addid
newDiv.id="HellO";

//add atribute
newDiv.setAttribute('title','hello div');

//crate textnode

var newDivText=document.createTextNode('hello world');


//addtext ti div

newDiv.appendChild(newDivText);



var container=document.querySelector('header.container')

var title=document.querySelector('header title');

container.insertBefore(newDiv,title);