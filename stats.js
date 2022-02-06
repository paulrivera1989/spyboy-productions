function fetchData() {
	fetch('https://api.statcord.com/v3/877644741339144244').then(response => {
		return response.json();
	}).then(data => {
		console.log(data.data[0].servers);
		document.querySelector('#server-count').innerHTML = `<p>${data.data[0].servers}+</p>`
		console.log(data.data[0].users);
		document.querySelector('#user-count').innerHTML = `<p>${data.data[0].users}+</p>`
		console.log(data.data[0].active);
		document.querySelector('#active-count').innerHTML = `<p>${data.data[0].active}+</p>`
	}).catch(error => {
		console.log(error);
	});
}

fetchData();
