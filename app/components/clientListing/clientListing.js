spa.$('clientListing', {
  require: 'dataStore',

});

spa.$extend('clientListing', {

  handleBCardClick: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	const passwordModal = document.getElementById('client-pass-modal');
	passwordModal.style.opacity = 1.0;
	passwordModal.style.zIndex = 100;
	
	
	
  }

});


