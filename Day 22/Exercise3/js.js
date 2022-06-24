addCustemer = () => {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let zip = document.getElementById("zip").value;
	let country = document.getElementById("country").value;
	let customer = {
		name: name,
		email: email,
		phone: phone,
		address: address,
		city: city,
		state: state,
		zip: zip,
		country: country
	}
	customers.push(customer);
	console.log(customers);
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("address").value = "";
	document.getElementById("city").value = "";
	document.getElementById("state").value = "";
	document.getElementById("zip").value = "";
	document.getElementById("country").value = "";
}


login = () => {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	for (let i = 0; i < customers.length; i++) {
		if (customers[i].email === email && customers[i].password === password) {
			alert("Login Successful");
			return;
		}
	}
	alert("Login Failed");
}

resetpassword = () => {
	let email = document.getElementById("email").value;
	for (let i = 0; i < customers.length; i++) {
		if (customers[i].email === email) {
			alert("Password Reset Successful");
			return;
		}
	}
	alert("Password Reset Failed");
}

