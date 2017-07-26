/**
 * 公用接口请求方法
 * @deferred
 */
(function(){
	function ajaxFn(params, url, type){
		var deferred = $.Deferred()

		$.ajax({
			type: type,
			url: url,
			data: params,
	        headers: {
	            // 'Access-Control-Allow-Origin': '*',
	            // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp",
	            "X-Requested-With": "XMLHttpRequest",
	            "Access-Control-Allow-Credentials": true
	        },
			// 将XHR对象的withCredentials设为true
			xhrFields: {
				withCredentials: true
			},
			dataType: 'json',
	        success: function(result) {
	            if(result.status == "999"){
	                // window.location.href = decodeURIComponent(result.location);
	                //获取url中的参数
	                function geturlRequest(url){
	                    var theRequest = new Object();
	                    if (url.indexOf("?") != -1) {
	                        var str = url.substr(url.indexOf("?")+1);
	                        strs = str.split("&");
	                        for(var i = 0; i < strs.length; i ++) {
	                            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
	                        }
	                    }
	                    return theRequest;
	                }
	                var toLocation=result.location.split("?")[0];
	                var requestArr=geturlRequest(result.location);
	                if(requestArr.service){
	                    var service = decodeURIComponent(requestArr.service);
	                    var serviceParams = geturlRequest(service);
	                    var serviceUrl = service.split("?")[0];
	                    if(!$.isEmptyObject(serviceParams)){
	                        var k=0;
	                        for(var i in serviceParams){
	                            serviceUrl += k==0 ? "?" : "&";
	                            serviceUrl += i+"="+encodeURIComponent(serviceParams[i]);
	                            k++;
	                        }
	                        serviceUrl += "&";
	                    }else{
	                        serviceUrl += "?";
	                    }
	                    serviceUrl += ('backurl=' + encodeURIComponent(window.location.href));
	                    requestArr.service = encodeURIComponent(serviceUrl);
	                }
	                var j=0;
	                for(var i in requestArr){
	                    toLocation += j==0 ? "?" : "&"
	                    toLocation += i + "=" + requestArr[i];
	                    j++
	                }
	                console.log(toLocation);
	                window.location.href = toLocation;
	            }else if(result.status == 101 || result.status == 102){
	                deferred.resolve(result);
	            }else{
	                deferred.resolve(result);
	            }
	        },
	        error: function(){
	        	deferred.reject();
	        }

		})

		return deferred
	}

	// post请求
	CEBOSS.api.$post = function(params, url){
		return ajaxFn(params, url, 'post')
	}

	// get请求
	CEBOSS.api.$get = function(params, url){
		return ajaxFn(params, url, 'get')
	}

})()


// http://bmadev.ceboss.cn:18080/SalesManager/interfaces/privilegeApi/getTopMenu.action