spa.$('clientListing', {
  require: 'dataStore',

});

spa.$extend('clientListing', {

  handleBCardClick: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	const passwordModal = document.getElementById('client-pass-modal');
	passwordModal.style.opacity = 1.0;
	passwordModal.style.zIndex = 100;
	
	console.log(app);
	appData.currentClientIndex = index;
	const passwordInput= document.getElementById('client-password-input');
	
	window.firebaseDB.collection("shoes").where("client", "==", appData.currentClientIndex).get().then((querySnapshot) => {
		
		querySnapshot.docs.forEach((doc) => {

			const shoe = { ...doc.data(), id: doc.id };

			appData.shoes = [];
			appData.shoes.push(shoe);

		})
		
	});
	
	
  }, 

  handleClientPasswordInputChange: function (el){
	
	const clients = appData.clients;
	let currentClientIndex = appData.currentClientIndex;

	if(el.value === clients[currentClientIndex].password){
		
		spa.$hide('clientListing');
		spa.$render('shoesListing');	
		spa.$show('shoesListing');
	}
	

  }

});


