
module.exports = function zeros(expression) 
{
var factorial = function(number) //считаем нули у !
{
  var shet=0;
  var x=2;
  var y=5;
for(var i=0; i<number; i++)
{
  if(number%x==0)
    { 
    shet=shet+(number/x);
    }
    x=x*2;
}
for(var i=0; i<number; i++)
{
  if(number%y==0)
    { 
    shet=shet+(number/y);
    }
    y=y*5;


}//alert(shet); 
  return shet;
}


var factorial_2 = function(number) //считаем нули у !!
{
  var shet=0;
  var x=2;
  var y=10;
for(var i=0; i<number; i++)
{
  if(number%x==0)
    { 
    shet=shet+(number/x);
    }
    x=x*2;
}
for(var i=0; i<number; i++)
{
  if(number%y==0)
    { 
    shet=shet+(number/y);
    }
    y=y*10;


}//alert(shet); 
  return shet;
}
////////////////////////
var factorial_3 = function(number) 
{
 var p=1;
 for(var i=1;i<number;i++)
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


var factorial_4 = function(number) 
{
 var p=1;
 for(var i=number;i>0;i--)
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



/////////////////////////////////



//expression='45!*28!*63!';
var mass=expression.split('*'); //разбили строку на массив без *
var newmass = mass.map(function(name) //каждый элемент откинули все кроме цифр
{  return name.replace(/\D/g,'');});

//alert( newmass +" massiv hisel");// получили массив с числами
//alert(mass[0].length);//длинна строки элемента
//alert(mass.length + " kolihestvo elem mass ");
var lastmass=[];
  
  ////////////////////////////////////////
var lastmassnum=[];
for(var i=0;i<mass.length;i++)//кол-во элементов массива пробегаем
{  
 
  if((mass[i].length-newmass[i].length)==1)//если факториал один
  { 
    newmass[i]= +newmass[i];
    lastmassnum[i]=factorial_3(newmass[i]);//получили массив посл цифр
   // alert(lastmassnum[i]+"massiv last");
  }
   else // если факториала два
   { 
    newmass[i]= +newmass[i];
    lastmassnum[i]=factorial_4(newmass[i]);
   }
}



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




///////////////////////////////////////



  
  
  
for(var i=0;i<mass.length;i++)//кол-во элементов массива пробегаем
{  
  if((mass[i].length-newmass[i].length)==1)//если факториал один
  { 
    newmass[i]= +newmass[i];
    lastmass[i]=factorial(newmass[i]);//считаем нули каждого элемента массива

  }
  else // если факториала два
   { if ((newmass[i]%2)==0){
    newmass[i]= +newmass[i];
    lastmass[i]=factorial_2(newmass[i]);}
  }
}

//alert( lastmass );//массив из количества нулей в каждом факториале
var summ=0;
for(var i=0;i<lastmass.length;i++)
{
 summ=summ+lastmass[i];
}
//alert(summ);// 414720
return summ+shet2;

}
