spa.$('customizerView', {
  require: 'dataStore',

  /*target: '#spaCompContainer_header_1', */

  getImage: function(obj) {
	
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

  showMaterials: function() {
    
	
	document.getElementById('mat-holder').style.display = 'block';
	document.getElementById('saved-holder').style.display = 'none';
	document.getElementById('preset-holder').style.display = 'none';

	const showMatBtn = document.getElementById('showMatBtn');
	const showSavedBtn = document.getElementById('showSavedBtn');
	const showPresetBtn = document.getElementById('showPresetBtn');

	showMatBtn.classList.add('selected');
	showSavedBtn.classList.remove('selected');
	showPresetBtn.classList.remove('selected');
	
  },

  showSavedShoes: function( ) {
    
	
	document.getElementById('mat-holder').style.display = 'none';
	document.getElementById('saved-holder').style.display = 'block';
	document.getElementById('preset-holder').style.display = 'none';

	const showMatBtn = document.getElementById('showMatBtn');
	const showSavedBtn = document.getElementById('showSavedBtn');
	const showPresetBtn = document.getElementById('showPresetBtn');

	showMatBtn.classList.remove('selected');
	showSavedBtn.classList.add('selected');
	showPresetBtn.classList.remove('selected');
	
  },

  showPresetShoes: function(  ) {
    
	
	document.getElementById('mat-holder').style.display = 'none';
	document.getElementById('saved-holder').style.display = 'none';
	document.getElementById('preset-holder').style.display = 'block';

	const showMatBtn = document.getElementById('showMatBtn');
	const showSavedBtn = document.getElementById('showSavedBtn');
	const showPresetBtn = document.getElementById('showPresetBtn');

	showMatBtn.classList.remove('selected');
	showSavedBtn.classList.remove('selected');
	showPresetBtn.classList.add('selected');
	
  },

  loadShoe: function(indexx, presetBool) {
    //return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];

	//const id = 'lKSj3JzYh2zqlwFka2FJ';

	console.log(appData.presetShoes[indexx]);

	let productData; 
	if(presetBool) 
		productData = appData.presetShoes[indexx]
	else
		productData = appData.userProducts[indexx];
	

	const frame = document.getElementById('customizer-iframe');
	
	/*let productData = undefined;

	firebaseDB.collection("products").doc(id).get().then((doc) => {

		if (doc.exists) {
			productData = doc.data();
			
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		} */

		//frame.contentWindow.loadShoeDesign(productData);


   // }); 
	
	
	frame.contentWindow.loadShoeDesign(productData);
	
	
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


