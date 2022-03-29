spa.$('pdfView', {
    require: 'dataStore',
  
    /*target: '#spaCompContainer_header_1', */
  
    getImage: function(obj) {
      
      //console.log(obj);
      return obj.thumb;
    }, 
  
  });
  
  