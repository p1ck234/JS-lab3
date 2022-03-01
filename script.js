function time()
{ 
 var d=new Date(); 
 var h=d.getHours();
 var m=d.getMinutes();
 var s=d.getSeconds();
 if (h<10) document.getElementById('h').innerHTML='0'+h
 else document.getElementById('h').innerHTML=h;
 if (m<10) document.getElementById('m').innerHTML='0'+m
 else document.getElementById('m').innerHTML=m;
 if (s<10) document.getElementById('s').innerHTML='0'+s
 else document.getElementById('s').innerHTML=s;
 setTimeout('time()',1000)
}
function date()
{
   var today = new Date(); 
   var birthday = new Date(2003, 2, 28); 
   var days = (birthday.getTime(2003,2,28)-today.getTime())/(24*60*60*1000) 
   var result = Math.abs(Math.round(days));
   document.getElementById('result').innerHTML=result;

   var one = new Date ("February 28 2023 00:00:00"); 
   var remaining = one - today; 
   remaining /= 1000; 
   remaining /= 60; 
   remaining /= 60; 
   remaining /= 24; 
   document.getElementById('resultYear').innerHTML=Math.ceil(remaining);

   switch (one.getDay("February 28 2023 00:00:00")) {
      case 0:
        result = "Воскресенье"
        break;
      case 1:
         result = "Понедельник"
        break;
      case 2:
         result = "Вторник"
        break;
      case 3:
         result = "Среда"
        break;
      case 4:
         result = "Четверг"
        break;
      case 5:
         result = "Пятница"
        break;
      case 6:
         result = "Суббота"
        break;
    }
    document.getElementById('resultDay').innerHTML=result;
   // let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]; 
   // let a = days[date.getDay(2022, 9,3)]; 
   // document.getElementById('resultDay').innerHTML=a;
}