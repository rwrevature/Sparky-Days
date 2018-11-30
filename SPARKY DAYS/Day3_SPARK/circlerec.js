const pi=3.14159
function circle(d)
    { 
    if (d<0)
        return("You need positive values for size.")
    else
         return("Object is area "+(d*d/4*pi))
  }
    function calculateArea() {
        d=document.getElementById("diameter");
        result=document.getElementById("result");
        area=circle(d.value,);
        result.innerHTML=area
    }
