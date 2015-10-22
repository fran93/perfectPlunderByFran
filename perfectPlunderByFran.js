// ==UserScript==
// @name        PerfectPlunderByFran
// @namespace   Ogame Plunder Saqueo Ataque Robo Recursos
// @description Añade la cantidad de naves de carga necesarias para saquear el planeta en el reporte de espionaje.
// @include     http://*/game/index.php?page=messages
// @version     2
// @grant       none
// ==/UserScript==
$(window).load(function() {
		$('#ui-id-14 .msg').each(function() {
		//obtener recursos desde el dom
		var resourcess= $(this).find('.msg_content .compacting:eq(1)').find('span:eq(4)').text();
		resourcess = resourcess.substring(10);
		//quitar los puntos
		resourcess = resourcess.replace('.', '');
		//convertir las comas en puntos
		resourcess = resourcess.replace(',', '.');
		//convertir resourcess a entero
		if(resourcess.indexOf("M") > -1){
			var amount = resourcess.substring(0, str.length - 1);
			amount = parseFloat(resourcess);
			amount*=1000000;
		}else{
			var amount= parseInt(resourcess);
		}
		//obtener porcentaje desde el dom
		var robo= $(this).find('.msg_content .compacting:eq(2)').find('span:eq(0)').text();
		robo = robo.substring(7);
		robo = robo.substring(0, robo.length - 1);
		var percent = parseInt(robo);
		//calcular la cantidad de naves pequeñas y grandes que serán necesarias
		amount = (amount * percent)/100;
		var small = Math.ceil(amount / 5000);
		var big = Math.ceil(amount /25000);
		//imprimir el resultado en el dom
		$(this).find('.msg_content').append("<div> <span class='ctn ctn4 tooltipLeft'>Naves grandes de carga: "+big+"</span>   <span class='ctn ctn4 fright tooltipRight'>Naves pequeñas de carga: "+small+"</span></div>");
	});
});
