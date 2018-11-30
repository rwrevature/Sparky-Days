function rectangle(length1, length2)
    { 
    if (length1<0 || length2<0)
        return("You need positive values for size.")
    else
      if (length1==length2)
        return("Object is a square, area=" + (length1*length2))
      else
      return("Object is area "+(length1*length2))
/*    return length1*length2;*/
    }
    function calculateArea() {
        height=document.getElementById("height");
        width=document.getElementById("width");
        result=document.getElementById("result");
        area=rectangle(height.value,width.value);
        result.innerHTML=area;
    }
