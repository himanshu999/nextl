spa.$('customizerView', {
  require: 'dataStore',

  /*target: '#spaCompContainer_header_1',

  getImage: function(obj) {
	
	if(obj.materialJSON !== ""){
		const mat = JSON.parse(obj.materialJSON);	
		return mat.images[0].url;
	}
	return "";
  }, */

});

spa.$extend('customizerView', {

  changeMaterial: function( index ) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	

	const frame = document.getElementById('customizer-iframe');
	
	const mat = JSON.parse(appData.materials[index].materialJSON);	
	frame.contentWindow.changeMaterial(mat);
	
	
	
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


