
/*

1.Make the 2nd item have green background color
2.Make the 3rd item invisible


*/


var item=document.querySelector('.list-group-item');
item.style.color='red';


var secondItem=document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var item3=document.querySelector
('.list-group-item:nth-child(3)');
item3.textContent="";



/*  1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
    2.Choose all the odd elements and make their background green using QuerySelectorALL﻿
  */


/*

var item=document.querySelectorAll('.list-group-item');
item[1].style.color='green';


var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
*/