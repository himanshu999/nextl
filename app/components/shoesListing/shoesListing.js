let currentClientIndex = -1;

spa.$('shoesListing', {
  require: 'dataStore',


});

spa.$extend('shoesListing', {

   handleShoeCardClick : function (index) {
	
	spa.$hide('shoesListing');
	//spa.$render('customizerView');
	window.appData.currentShoeIndex = index;

	window.loadPresetShoes();
	window.loadUserSavedShoes();

	setTimeout(() => {

		console.log(appData.products);

		spa.$render('customizerView', {

			target: '#spaCompContainer_header_1',
	  
			getImage: function(obj) {
		  
			  if(obj.materialJSON !== ""){
				  const mat = JSON.parse(obj.materialJSON);	
				  return mat.images[0].url;
			  }
			  
			  return "";
			},
	  
		  }); 

		  setTimeout(() => {
			window.frames[0].loadMaterials();
		}, 5000);

	}, 2000);
	
	

	
	
	//spa.$show('customizerView');
	
   }, 

   goBack: function(){
	   spa.$hide('shoesListing');
	   spa.$render('clientListing');  
	   spa.$show('clientListing');
   }
  

});


