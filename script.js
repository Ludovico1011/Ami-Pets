function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "T:/1B-DS/PedroRenan/PetShop/menuwhite36.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "T:/1B-DS/PedroRenan/PetShop/closewhite36.svg";
    }
}

	



var contador = 1; 
var img1="T:/Vinicius e Pedro/Pasta trabalho pet shop/Imagens trabalho pet shop/amipromo1.png";
var img2="T:/1B-DS/PedroRenan/PetShop/amipromo2.png";
var img3="T:/1B-DS/PedroRenan/PetShop/amipromo3.png";
var tempo=2000; 
var exibir=setInterval("Exibindo()",tempo);
  


	  
		function Exibindo() 
		{  
			document.images["slide"].src=eval("img"+contador);
			document.getElementById("v"+contador).checked=true;
				  
			if (contador<3)
				contador++;
			else
				contador=1;
		}
				
	 	function Muda(x)
		{
			clearInterval(exibir);
			contador=x;
			exibir=setInterval("Exibindo()",tempo); 
		}
    