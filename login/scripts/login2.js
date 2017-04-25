
/******************************************************/
/*************** 新的登录方法  ***************************/
function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
 }

function nLogin() {
	try {
		var uName = document.getElementById("username");
		
		if(trim(uName.value) == "") {
			$('.errorWords').text('请输入会员账号、手机或邮箱！');
			$('.errorWords').css('visibility', 'visible');
			return;
		}
		
		var uPwd = document.getElementById("password");
		if(uPwd.value == "") {
			$('.errorWords').text('请输入密码！');
			$('.errorWords').css('visibility', 'visible');
			return;
		}
		
		$('.errorWords').css('visibility', 'visible');
		
		var fm = document.getElementById("fm1");
		fm.submit();
		
	} catch(e) {
		alert(e);
	}
}
/******************************************************/