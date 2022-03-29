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

  getPDF: function (){
	

	const pdfModal = document.getElementById('pdf-modal');
	pdfModal.style.opacity = 1.0;
	pdfModal.style.zIndex = 10000;


	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.saveProduct();
	
	setTimeout(() => {
		frame.contentWindow.getPDF();

		setTimeout(() => {
			spa.$render('pdfView');
			spa.$show('pdfView');
			/*pdfModal.style.opacity = 1;
			pdfModal.style.zIndex = 10000;*/
	
		}, 300);
	
		setTimeout(() => {
			html2pdf().from(document.getElementById('spaCompContainer_pdfView_1').children[0]).save();
		}, 5000) ;

	}, 600);
	
	

    setTimeout(() => {
		
		spa.$hide('pdfView');
		setTimeout(() => {
			pdfModal.style.opacity = 0;
			pdfModal.style.zIndex = -1;
		}, 500)
		

	}, 6000);	
	
	

  }, 

  handleShare: function() {
	  const frame = document.getElementById('customizer-iframe');
	  frame.contentWindow.saveProduct();
	  
	  setTimeout(() => {

		const pid = appData.currentProductID;

	  	const url = `${window.location.href}threecode/viewer2.html?pid=${pid}`;

		window.showToast('Shareable URL copied To Clipboard');  
	  
		navigator.clipboard.writeText(url);


	  }, 2000);
	  
  }, 

  toggleDropDown: function(elid) {
	const el = document.getElementById(elid);
	const parentEl = document.querySelectorAll(`[data-d-id='${elid}']`)[0];
	
	if(el.style.display === 'none'){
		el.style.display = 'block';
		parentEl.children[0].classList.remove('fa-angle-left');
		parentEl.children[0].classList.add('fa-angle-down');
	}else{
		el.style.display = 'none';
		parentEl.children[0].classList.remove('fa-angle-down');
		parentEl.children[0].classList.add('fa-angle-left');
	}
	
}, 

changeCamPosition: function(posName){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.changeCamPosition(posName);
}, 

resetShoeDesign: function(){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.resetShoeDesign();
}, 

undoFunction : function(){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.undoFunction();
}, 

redoFunction : function(){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.redoFunction();
}, 

zoomIn : function(dollyScale){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.dollyIn(dollyScale);
}, 

zoomOut : function(dollyScale){
	const frame = document.getElementById('customizer-iframe');
	frame.contentWindow.dollyIn(dollyScale);
}

});


