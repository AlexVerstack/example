function authenticate(login,password){
	if(login === 'login' && password === 'password'){
	   return 'We were logged in';
	}else{
	   return 'login is incorrect';

	}
}

