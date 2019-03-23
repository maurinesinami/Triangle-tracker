function triangleTracker(){
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
alert("Isosceles")
}
else if(sidea !== sideb &&sideb !== sidec && sidec !== sidea && sidea+sideb>sidec && sideb + sidec >sidea && sidea + sidec > sideb
){
alert("Scalene")
}
else{
alert("Not a definate triangle")
}
}
