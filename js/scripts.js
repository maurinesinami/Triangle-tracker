var sidea =parseFloat(prompt("Enter first side"));
var sideb =parseFloat(prompt("Enter second side"));
var sidec =parseFloat(prompt("Enter third side"));
var side =function(a,b,c){
return a+b>c,b+c>a,c+a>b
}
if(sidea === sideb && sideb === sidec && sidec === sidea
){
alert("Equilateral");
}
else if(sidea === sideb && sideb !== sidec || sideb === sidec && sidec !== sidea|| sidec === sidea && sidea !== sideb){
alert("isosceles")
}
else if(sidea !== sideb &&sideb !== sidec && sidec !== sidea
){
alert("scalene")
}
else{
alert("not a definate triangle")
}
