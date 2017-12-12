function equal2(t,r){
	// if(t === r){
	// 	return true;
	// } else{
	// 	return false ;
	// }

	return t === r ;
}


function sr2(a,b){
	return (a+b)/2;

}

function srManyNum(a){
	var arr= a.split (',');
	var sum=0;
	for (var i=0; i<arr.length; i++){
		sum += Number(arr[i]);
	}
	return sum/arr.length;
}

	function testWork(age,exp){
	age=Number(age);
	if(age<30 && age>20 && exp==true){
		return true;

	}
	else{return(false) }
}