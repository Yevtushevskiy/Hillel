var a = prompt("введите числа через запятую");
var arr = a.split(',');
var sum=0;
for(var i =0 ; i< arr.length ; i++){
	sum += Number(arr[i]);
	alert("i = " + i + " sum = " + sum );
}
var sr = sum/arr.length; 
alert(sr);