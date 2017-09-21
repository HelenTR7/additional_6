module.exports = function zeros(expression) 
{

var factorial = function(number) {
 if (number <= 0) {  return 1; } 
 else { return (number * factorial(number - 1)); }
};

var factorial_2 = function(number) {
 if (number <= 0)  	{  return 1; } 
 else  {  return (number * factorial(number - 2)); }
};


	var i; 
	var mult=1;
	var mass=expression.split('*');//сделали массив
  for(i=0; i<mass.length;i++) //проверяем каждый элемент массива
  {
    var num = parseInt(mass[i].replace(/\D+/g,""));//ост только цифры
     if((mass.length-num.length)==1)//кол-во !=1
     {	mult=mult*factorial(num);  }
     else  
     { mult=mult*factorial_2(num); }
  }


  var rez;
  while(var a=true)
  { 
  	for(i=1; i<mult.length;i++)
   {
  	if(mult.charAt(mult.length-i)==0){rez++;}
   }
  }
  return rez;
}
