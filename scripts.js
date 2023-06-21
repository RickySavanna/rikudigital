
	const handleFormSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
  		const formDataArr = [...formData.entries()];
		const reqData = {id: "a8adf968-2a74-43a0-b15b-9b1b000f5b86", data: {}};
		for (let i = 0; i < formDataArr.length; i++) {
			const field = formDataArr[i];
			reqData.data[field[0]] = field[1];
		}
		console.log(reqData);
		console.log(JSON.stringify(reqData));
		fetch('https://api.usestyle.ai/api/v1/send-email', {
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
	