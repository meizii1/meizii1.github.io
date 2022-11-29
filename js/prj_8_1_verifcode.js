var code;
function createCode(){
	code="";
	var codeLength=4;
	var checkCode=document.getElementById("checkCode");
	var codeChars=new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for(var i=0;i<codeLength;i++){
		var charNum=Math.floor(Math.random()*codeChars.length);
		code+=codeChars[charNum];
	}
	if(checkCode)
	{
		checkCode.className="code";
		checkCode.innerHTML=code;
	}
}

function $(id){
	return document.getElementById(id);
}

function validateCode(){
	var inputCode=document.getElementById("inputCode").value;
	if(inputCode.length<=0){
		alert("请输入验证码！");
		$("info_code").className="red_flag";
		$("info_code").innerHTML=errorflag;
		$("info_code_flag").className="info_area black_flag";
		$("info_code_flag").innerHTML="请输入验证码！";
	}else if(inputCode.toUpperCase()!=code.toUpperCase())
	{
		alert("验证码输入有误！");
		$("info_code").className="red_flag";
		$("info_code").innerHTML=errorflag;
		$("info_code_flag").className="info_area black_flag";
		$("info_code_flag").innerHTML="验证码输入有误！";
	}else{
		alert("验证码正确！");
		$("info_code_flag").className="info_area";
		$("info_code_flag").innerHTML="";
		$("info_code").className="green_flag";
		$("info_code").innerHTML=rightflag;
	}
