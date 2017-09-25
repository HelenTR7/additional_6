
module.exports = function zeros(expression) 
{
var factorial = function(number) 
{
 if (number <= 0) { // terminal case
 return 1;
 } else { // block to execute
 return (number * factorial(number - 1));
 }
}

var factorial_2 = function(number) 
{
 if (number <= 0)   {  return 1; } 
 else  {  return (number * factorial_2(number - 2)); }
}

expression='10!';
var mass=expression.split('*'); //разбили строку на массив без *

var newmass = mass.map(function(name) //каждый элемент откинули все кроме цифр
{
  return name.replace(/\D/g,'');
});


//alert( newmass );// получили массив с числами
//alert(mass[0].length);//длинна строки элемента
//alert(mass.length);//кол-во элементов массива
var lastmass=[];
for(var i=0;i<mass.length;i++)
{
  if((mass[i].length-newmass[i].length)==1)
  { newmass[i]= +newmass[i];
    lastmass[i]=factorial(newmass[i]);

  }
  else
   {
    newmass[i]= +newmass[i];
    lastmass[i]=factorial_2(newmass[i]);
  }
}
//alert( lastmass );//возведенные в факториал числа массив 120 3 24 48
var mult=1;
for(var i=0;i<lastmass.length;i++)
{
 mult=mult*lastmass[i];
}
//alert(mult);// 414720
var lastnum, zeross=0;
var n=true;

while(n)
{  
  lastnum = mult % 10; /* находим остаток от деления на 10 */
    if(lastnum==0)
    {
    zeross++;
    mult=mult/10;
    }
    else{ n=false;}
}
return(zeross);

}
