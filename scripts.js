
	const handleFormSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
  		const formDataArr = [...formData.entries()];
		const reqData = {id: "499cce7a-bada-4e52-8e17-4a05f1e85077", data: {}};
		for (let i = 0; i < formDataArr.length; i++) {
			const field = formDataArr[i];
			reqData.data[field[0]] = field[1];
		}
		console.log(reqData);
		console.log(JSON.stringify(reqData));
		fetch('', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqData)
		})
		   .then(response => response.json())
		   .then(response => {
				console.log(JSON.stringify(response));
				var snackbar = document.getElementByID("snackbar");
				snackbar.className = "show";
  				setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 5000);
		   })

		return false;
	}
	