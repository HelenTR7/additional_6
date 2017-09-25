
module.exports = function zeros(expression) 
{
  /////////////Считаем нули у !//////////////////////////////////////////////////////////////////////////////////
var factorial = function(number) 
{
  var shet=0;
  var x=2;
  var y=5;
for(var i=0; i<number; i++)
{
  if(number%x==0)
    { shet=shet+(number/x); }
    x=x*2;
}
for(var i=0; i<number; i++)
{
  if(number%y==0)
    { shet=shet+(number/y); }
    y=y*5;

}
//alert(shet); 
return shet;
}
/////////////Cчитаем нули у !!/////////////////////////////////////////////////////////////////////////////////
var factorial_2 = function(number) 
{
  var shet=0;
  var y=10;
for(var i=1; i<number; i++)
{
  if(i%y==0)
    { 
      shet++;
    }
} 
//alert(shet);
return shet;
}

/////////////Считаем 2 посл цифры чисел произведения в ! числа///////////////////////////////////////////////////
var factorial_3 = function(number) 
{
  
 var lastnum=0;
 var p=1;
 for(var i=1;i<=number;i++)
 {
   p=p*i;
   if(p%10==0)
   {
    p=p/10;
   }
 }

 lastnum=p%100;
//alert(lastnum);
return lastnum; 
}

////////////////Считаем 2 посл цифры в !! факториале числа///////////////////////////////////////////////////////
var factorial_4 = function(number) 
{
 var p=1;
 for(var i=number;i>0;i=i-2)
 {
   p=p*i;
   if(p%10==0)
   {
    p=p/10;
   }
 }
 var lastnum;
 lastnum=p%100;//берем 2 посл цифры
//alert(lastnum);
return lastnum; 

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//expression='45!*28!*63!';
var mass=expression.split('*'); //разбили строку на массив без *
var newmass = mass.map(function(name) //каждый элемент откинули все кроме цифр
{  return name.replace(/\D/g,'');});

//alert( newmass +" massiv hisel");// получили массив с числами
//alert(mass[0].length);//длинна строки элемента
//alert(mass.length + " kolihestvo elem mass ");


////////////////////Формируем массив кол-ва нулей в элементах массива/////////////////////////////////////////
var lastmass=[];
for(var i=0;i<mass.length;i++)
{  
  if((mass[i].length-newmass[i].length)==1)//если факториал один
  { 
    newmass[i]= +newmass[i];
    lastmass[i]=factorial(newmass[i]);
  }
  else // если факториала два
   { 
    if ((newmass[i]%2)==0)
    {
    newmass[i]= +newmass[i];
    lastmass[i]=factorial_2(newmass[i]);
    }
  }

}

//alert( lastmass+"mass kol nulei" );//массив из количества нулей в каждом факториале


////////////Формируем массив двух посл цифр факториалов///////////////////////////////////////////////////////
var lastmassnum=[];
for(var i=0;i<mass.length;i++)
{  
 
  if((mass[i].length-newmass[i].length)==1)//если факториал один
  { 
    newmass[i]= +newmass[i];
    lastmassnum[i]=factorial_3(newmass[i]);//получили массив посл цифр
   
  }
   else // если факториала два
   { 
    newmass[i]= +newmass[i];
    lastmassnum[i]=factorial_4(newmass[i]);
   }
}
//alert(lastmassnum+"massiv last");
////////////Количество нулей от произведения//////////////////////////////////////////////////////////////////

var mult=1, shet2=0;
for(var i=0;i<lastmassnum.length;i++)
{
 mult=mult*lastmassnum[i];
}
for(var i=0;i<lastmassnum.length;i++)
{
while(mult%10==0)
   {
    mult=mult/10;
    shet2++;
   }
 }
//alert(shet2+"kol-vo nul ot proizv");



////////////////////////////////////////////////////////////////////////////////////////////////////////////



var summ=0;
for(var i=0;i<lastmass.length;i++)
{
 summ=summ+lastmass[i];
}
//alert(summ+shet2+"ITOG");// 414720
return summ+shet2;/////////////////////////////////////////////////////////////

}
