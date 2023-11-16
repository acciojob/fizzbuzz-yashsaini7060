//your JS code here. If required.
var i=1
 
  while(i<20)
  {
    if(i%3==0 && i%5==0)
        alert(`${i}\nFizzBuzz`)
    else if(i%5==0)
        alert(`${i}\nBuzz`)
    else if(i%3==0)
        alert(`${i}\nFizz`)
    i++;
  }
