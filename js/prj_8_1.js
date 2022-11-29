function $(id) {
	return document.getElementById(id);
}
var errorflag = "×";
var rightflag = "√";

function checkPassword(n) {
	var psd = $("userpsd").value;
	var repsd = $("userrepsd").value;
	var len_prd = psd.length;
	var len_reprd = repsd.length;
	switch (n) {
		case 1:
			{
				if (len_prd > 20 || len_prd < 6) {
					$("info_password").className = "red_flag";
					$("info_password").innerHTML = "密码长度为6-20个字符";
					$("info_password_flag").className = "red_flag";
					$("info_password_flag").innerHTML = errorflag;
				} else {
					$("info_password_flag").className = "green_flag";
					$("info_password_flag").innerHTML = rightflag;
					$("info_password").className = "info_area";
					$("info_password").innerHTML = "";
				}
				break;
			}
		case 2:
			{
				if (len_reprd > 20 || len_reprd < 6) {
					$("info_repassword").className = "red_flag";
					$("info_repassword").innerHTML = "密码长度为6-20个字符";
					$("info_repassword_flag").className = "red_flag";
					$("info_repassword_flag").innerHTML = errorflag;
				} else {
					$("info_repassword_flag").className = "green_flag";
					$("info_repassword_flag").innerHTML = rightflag;
					$("info_repassword").className = "info_area";
					$("info_repassword").innerHTML = "";
				}
				if (psd != repsd) {
					$("info_repassword").className = "red_flag";
					$("info_repassword").innerHTML = "密码与确认密码不同！";
					$("info_repassword_flag").className = "red_flag";
					$("info_repassword_flag").innerHTML = errorflag;
				} else {
					$("info_repassword_flag").className = "green_flag";
					$("info_repassword_flag").innerHTML = rightflag;
					$("info_repassword").className = "info_area";
					$("info_repassword").innerHTML = "";
				}
				break;
			}
	}
}

function checkName() {
	var name = $("username").value;
	name_len = name.length;
	if ((name_len < 4 || name_len > 20) || name_len == 0 || (name_len > 0 && name_len < 4)) {
		$("info_name").className = "red_flag";
		$("info_name").innerHTML = "用户名非空，且长度为4-20个字符";
		$("info_name_flag").className = "red_flag";
		$("info_name_flag").innerHTML = errorflag;
	} else {
		$("info_name_flag").className = "green_flag";
		$("info_name_flag").innerHTML = rightflag;
		$("info_name").className = "info_area";
		$("info_name").innerHTML = "";
	}
}

function displayInfo() {
	$("info_name").className = "black_flag";
	$("info_name").innerHTML = "4-20个字符,由小写字母、中文、数字组成";
}

function displayPsd() {
	$("info_password").className = "black_flag";
	$("info_password").innerHTML = "密码为6-20个字符，可由英文、数字及符号组成";
}

function displayRePsd() {
	$("info_repassword").className = "black_flag";
	$("info_repassword").innerHTML = "密码为6-20个字符，可由英文、数字及符号组成";
}
