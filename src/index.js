
module.exports = function zeros(expression) 
{
  /////////////Считаем пятерки у !//////////////////////////////////////////////////////////////////////////////////
var factorial = function(number) 
{
  //alert("Zahli v ! func");
  var j=1;
  var shet=0;
  var y=5;
  for(var i=0; i<number; i++)
{ 
   //alert("Hislo "+j);
  if(j%y==0)
    { 
      shet++;
      if((j/y)%y==0)
     {
      shet++;
      
     }
    }
    j++;
    //alert(shet); 
}

return shet;
}
/////////////Cчитаем пятерки у !!/////////////////////////////////////////////////////////////////////////////////
var factorial_2 = function(number) 
{
  //alert("Zahli v !! func");
  var j=number/2;
  var shet=0;
  var y=5;
for(var i=0; i<j; i++)
{
  //alert("Hislo    "+number);
  
  if(number%y==0)
    { 
      shet++;
      if((number/y)%y==0)
      {
       shet++;
      }
      
    }
    number=number-2;
    
    //alert(shet);
} 

return shet;
}

/////////////Считаем двойки у !///////////////////////////////////////////////////////////////////////////
var factorial_3 = function(number) 
{
  //alert("Zahli v ! func");
  var j=0;
  var shet=0;
  var y=2;
  for(var i=0; i<number; i++)
   { 
   //alert("Hislo "+j);
     if(j%y==0)
     { 
      shet++;
     }  
    j=j+2;
    //alert(shet); 
  }

return shet;
}


var factorial_4 = function(number) 
{
return 0;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//expression='1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!*1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!';
var mass=expression.split('*'); //разбили строку на массив без *
var newmass = mass.map(function(name) //каждый элемент откинули все кроме цифр
{  return name.replace(/\D/g,'');});

//alert( newmass +" massiv hisel");// получили массив с числами
//alert(mass[0].length);//длинна строки элемента
//alert(mass.length + " kolihestvo elem mass ");


////////////////////Формируем массив кол-ва множителей 5 2 в элементах массива/////////////////////////////////////////
var lastmass_5=[];
var lastmass_2=[];
for(var i=0;i<mass.length;i++)
{  
  if((mass[i].length-newmass[i].length)==1)//если факториал один
  { 
    newmass[i]= +newmass[i];
    lastmass_5[i]=factorial(newmass[i]);
    lastmass_2[i]=factorial_3(newmass[i]);
  }
else // если факториала два
   { 
    newmass[i]= +newmass[i];
    lastmass_5[i]=factorial_2(newmass[i]);
    if((newmass[i]%2)==0){
    lastmass_2[i]=factorial_3(newmass[i]);}
    else{
    lastmass_2[i]=factorial_4(newmass[i]);}
   }
}
//alert( lastmass_5+"mass kol fives" );//массив из количества пятерок в каждом факториале

//alert( lastmass_2+"mass kol two" );//массив из количества пятерок в каждом факториале

var summ5=0;
for(var i=0;i<lastmass_5.length;i++)
{
  lastmass_5[i]= +lastmass_5[i];
  summ5=summ5+lastmass_5[i];

}
  //alert("kolvo fives :  "+summ5);

var summ2=0;
for(var i=0;i<lastmass_2.length;i++)
{
  lastmass_2[i]= +lastmass_2[i];
  summ2=summ2+lastmass_2[i];

}
  //alert("kolvo two :  "+summ2);

if(summ2>summ5){
//alert("ITOG   "+summ5);// итоговое кол-во нулей
return summ5;
}else{
  //alert("ITOG   "+summ2);// итоговое кол-во нулей
  return summ2;
}

}
