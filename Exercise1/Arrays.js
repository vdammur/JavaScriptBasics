var arr = [1,2,3,true,"string"]
console.log(arr[0]);
var arr2 = []

var langs = ["JS", "Java", "C"]


var capatials = []
capatials["India"] = "Delhi"
capatials["USA"] = "Washington"
capatials["France"] = "Paris"

for(var key in capatials){
  console.log(key, capatials[key]);
}

var arr3 = []
arr3["Name"] = "venky"
arr3["Age"]= 29
arr3["Country"]="India"
arr3["City"]="Bangalore"

//console.log(arr3);

var queryStr = "?"

for (var key in arr3){
  queryStr += key + "=" + arr3[key] + " & "
}

queryStr = queryStr.substring(1,queryStr.length - 2)
console.log(queryStr);
