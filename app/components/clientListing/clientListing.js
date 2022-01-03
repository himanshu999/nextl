spa.$('clientListing', {
  require: 'dataStore',

});

spa.$extend('clientListing', {

  handleBCardClick: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	appData.currentClientLogoURL = appData.clients[index].thumbURL;
	spa.$render('clientListing');	

	setTimeout(() => {

		const passwordModal = document.getElementById('client-pass-modal');
		passwordModal.style.opacity = 1.0;
		passwordModal.style.zIndex = 100;
		
		console.log(app);
		appData.currentClientIndex = index;
		const passwordInput= document.getElementById('client-password-input');

		window.firebaseDB.collection("shoes").where("client", "==", appData.currentClientIndex).get().then((querySnapshot) => {
			console.log(appData.currentClientIndex.toString());
			querySnapshot.docs.forEach((doc) => {
	
				const shoe = { ...doc.data(), id: doc.id };
	
				appData.shoes = [];
				appData.shoes.push(shoe);
	
			})
			
		});

	}, 200);
	
	
	

	
	
	
  }, 

  handleClientPasswordInputChange: function (el){
	
	const clients = appData.clients;
	let currentClientIndex = appData.currentClientIndex;

	if(el.value === clients[currentClientIndex].password){
		
		appData.currentClientName = clients[currentClientIndex].name;
		spa.$hide('clientListing');
		spa.$render('shoesListing');	
		spa.$show('shoesListing');

	}
	

  }, 

  goBack: function(){

		spa.$hide('clientListing');
		spa.$render('first');	
		spa.$show('first');
  }, 

  goBackFromModal: function(){
	document.getElementById('client-pass-modal').style.opacity = 0;
	document.getElementById('client-pass-modal').style.zIndex = -1;
	
  }, 

  togglePassVisibility: function(){
	  const inputEl = document.getElementById('client-pass-ipg').children[0].children[0];

	  if (inputEl.type === "password") {
		inputEl.type = "text";
	  } else {
		inputEl.type = "password";
	  }
  }

});


