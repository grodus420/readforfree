chrome.action.onClicked.addListener(function(tab) {

	async function getCurrentTab(){
		let queryOptions = {active:true, currentWindow: true};
		let tab = await chrome.tabs.query(queryOptions);
		return tab[0].url;
	}
		
	
	async function main() {
	
		let url = await getCurrentTab();
	
		let parsedUrl = url.replace('https://','').replace('http://','').replace('www.','');

		let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/')).slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

		function jumpWall(domain){
		try{

			if (domain.length < 1 || domain === null || domain === undefined) {
				return;
			} else if (domain == 'sltrib.com') {
				/* SLTrib */  
					var css = '.tp-modal-open {overflow: scroll !important}', style = document.createElement('style');
					document.body.appendChild(style);
					style.type = 'text/css';
					style.appendChild(document.createTextNode(css));

					document.querySelector('.tp-modal').style.display = 'none';
					document.querySelector('.tp-backdrop').style.display = 'none'; 
					return;

			} else if (domain == 'theatlantic.com') {
			/* Atlantic */
				document.querySelector('.Paywall_root__ciuNi').style.display = 'none';
				document.body.style.overflow = 'scroll';

				return;
				} 
		} catch (err) {
				throw err;
		}
		

		}

	chrome.scripting.executeScript({

		target: {tabId: tab.id},
		function: jumpWall,
		args: [domain]

	});

	}

main();

});
