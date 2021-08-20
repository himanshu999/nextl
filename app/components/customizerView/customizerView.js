spa.$('customizerView', {
  require: 'dataStore',

  /*target: '#spaCompContainer_header_1', */

  getImage: function(obj) {
	console.log('get image called');
	if(obj.materialJSON !== ""){
		const mat = JSON.parse(obj.materialJSON);	
		return mat.images[0].url;
	}
	return "";
  }, 

});

spa.$extend('customizerView', {

  changeMaterial: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	

	const frame = document.getElementById('customizer-iframe');
	
	const mat = JSON.parse(appData.materials[index].materialJSON);	
	frame.contentWindow.changeMaterial(mat);
	
	
	
  }, 

  saveProduct: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	

	const frame = document.getElementById('customizer-iframe');
	
	
	frame.contentWindow.saveProduct();
	
	
	
  }, 

  loadShoe: function( ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	const id = 'lKSj3JzYh2zqlwFka2FJ';

	const frame = document.getElementById('customizer-iframe');
	
	let productData = undefined;

	firebaseDB.collection("products").doc(id).get().then((doc) => {

		if (doc.exists) {
			productData = doc.data();
			
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}

		frame.contentWindow.loadShoeDesign(productData);


    });
	
	
	
	
	
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


