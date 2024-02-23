function fetchData() {
	fetch('https://statcord.com/api/bots/877644741339144244/stats').then(response => {
		return response.json();
	}).then(data => {
		console.log(data.data[0].guildCount);
		document.querySelector('#server-count').innerHTML = `<p>${data.data[0].servers}+</p>`
		console.log(data.data[0].uerCounst);
		document.querySelector('#user-count').innerHTML = `<p>${data.data[0].users}+</p>`
		console.log(data.data[0].members);
		document.querySelector('#active').innerHTML = `<p>${data.data[0].active}+</p>`
		console.log(data.data[0].commands);
		document.querySelector('#commands').innerHTML = `<p>${data.data[0].commands}+</p>`
		console.log(data.data[0].cpuUsage);
		document.querySelector('#cpuload').innerHTML = `<p>${data.data[0].cpuload}%</p>`
		console.log(data.data[0].ramUsage);
		document.querySelector('#memload').innerHTML = `<p>${data.data[0].memload}%</p>`
	}).catch(error => {
		console.log(error);
	});
}

fetchData();
