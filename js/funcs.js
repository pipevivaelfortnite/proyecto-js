function inf() {
	document.getElementById('5580').style.display='none';
	document.getElementById('lul').style.display='block';
}
function lko() {
		var x = $("input").eq(0).val()
		if(x == "") {
			swal("Ups...","No has insertado ningun nombre","error")
		} else {
			enviar3();
		}
	}
	function enviar3(){
		var x = $("input").eq(1).val()
		if(x == "") {
			swal("Ups...","No has insertado ninguna edad","error")
		} else {
			enviar4();
		}
	}
	function enviar4(){
		var x = $("input").eq(2).val()
		if(x == "") {
			swal("Ups...","No has insertado ningun telefono","error")
		} else {
			enviar5();
		}
	}
	function enviar5(){
		var x = $("input").eq(3).val()
		if(x == "") {
			swal("Ups...","No has insertado ningun correo","error")
		} else {
			enviar7();
		}
	}
	function enviar7(){
		var x = $("input").eq(4).val()
		if(x == "") {
			swal("Ups...","No has insertado ninguna contraseña","error")
		} else {
			enviar8();
		}
	}
	function enviar8(){
		var x = $("input").eq(5).val()
		if(x == "") {
			swal("Ups...","No has verificado la contraseña","error")
		} else {
			enviar6();
		}
	}
	function enviar6(){
		var x = $("input").eq(5).val()
		if (x == $("input").eq(4).val()) {
			inf2();
		} else {
			swal("Ups...","Las contraseñas no coinciden","error")
		}
		}
function val5520() {
	var name = document.getElementById('name');
	var years = document.getElementById('years');
	var tele = document.getElementById('telcell');
	var email = document.getElementById('qmail');
	var password = document.getElementById('ppassword');
	var passwordconfirm = document.getElementById('ppassword2');
		lko()
	}
	function inf2(){
		swal("Registro exitoso","Bienvenido","success")

		document.getElementById('lul').style.display='none';
		document.getElementById('2233').style.display='block';
	}
function inl(){
		var name = document.getElementById('name');
		var years = document.getElementById('years');
		var tele = document.getElementById('telcell');
		var email = document.getElementById('qmail');
		var password = document.getElementById('ppassword');
		alert("Nombre : " + name.value + "\nEdad : " + years.value + "\nTelefono : " + tele.value + "\nCorreo Electronico : " + email.value + "\nContraseña : " + password.value);
}