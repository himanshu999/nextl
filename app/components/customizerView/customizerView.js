spa.$('customizerView', {
  require: 'dataStore',

});

spa.$extend('customizerView', {

  handleBCardClick: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	const passwordModal = document.getElementById('client-pass-modal');
	passwordModal.style.opacity = 1.0;
	passwordModal.style.zIndex = 100;
	
	console.log(app);
	appData.currentClientIndex = index;
	const passwordInput= document.getElementById('client-password-input');
	
	
	
  }, 

  handleClientPasswordInputChange: function (el){
	
	const clients = appData.clients;
	let currentClientIndex = appData.currentClientIndex;

	if(el.value === clients[currentClientIndex].password){
		
		spa.$hide('clientListing');	
		spa.$show('shoesListing');
	}
	

  }

});


