$ (function() {
   var header = document.getElementById("header");
   var headroom= new Headroom(header);
   headroom.init(); 

//menu responsive
//calculo del tamaño
var ancho = $(window).width(),
    enlaces=$('#enlaces'),
    btnMenu=$('#btn-menu'),
    icono=$('#btn-menu .icono');

if (ancho<700) {
    enlaces.hide(); 
    icono.addClass('material-icons');   
}
btnMenu.on('click', function(e){
    enlaces.slideToogle();
    icono.toogleClass('material-icons');
    icono.toogleClass('icn');
});

});
