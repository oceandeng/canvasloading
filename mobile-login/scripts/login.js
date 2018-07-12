(function(){
	$('#forgetPassword').on('tap', function(){
		forgetPasswordDialog()
	})

	function forgetPasswordDialog(){
		var forgetPassword = new Dialog({
			'id': 'forgetPasswordCon',
			'type': 'popup',
			'lock': true,
			'width':'90%',
			'closeButton': false,
			'animation':'animated bounceInDown',
			'contentStyle': {
				'background': '#fff',
				'border-radius': '5px'
			},
			'onReady': function(){
	
			},
			'addFlashFn': function(_this){

			}
		});
	
		$('#closeForgetPassword').on('tap', function(){
			forgetPassword.close()
		})
	
		return forgetPassword
	}
	
	$('#serviceAgreementBtn').on('tap', function(){
		serviceAgreementDialog()
	})

	function serviceAgreementDialog(){
		var serviceAgreement = new Dialog({
			'id': 'serviceAgreement',
			'type': 'popup',
			'lock': true,
			'width':'100%',
			'bottom': '0px',
			'closeButton': false,
			'animation':'animated bounceInUp',
			'contentStyle': {
				'background': '#fff',
				'border-radius': '5px'
			},
			'onReady': function(){
	
			},
			'addFlashFn': function(_this){

			}
		});

		$('#closeBtn').on('tap', function(){
			serviceAgreement.close()
		})
	}

	$('.error-close').on('tap', function(){
		$('.errors-info').remove()
	})
})()
