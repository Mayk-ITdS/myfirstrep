function calc_bmi() 
{
 

 const name=prompt('Imie');
 const weight=prompt('Waga');
 const hight=prompt('Wzrost');
 
 let bmi=weight/hight**2;

 return bmi;

}