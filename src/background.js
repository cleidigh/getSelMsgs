console.debug('background Start');


await((async () => {

		await messenger.menus.create({ id: "gsm1", title: "Test getSelectedMessages", contexts: ["message_list"], visible: true, onclick: gSMTest });


})());

async function gSMTest(info, tab) {
	console.debug('test func');
	console.debug('info:', info);
	console.debug('tab', tab);
	let gsm = await messenger.mailTabs.getSelectedMessages();
	console.debug('gSM 1', gsm);

  //await browser.windows.create({url: "/minimalwindow.html", type: "popup", width: 250, height: 140});
}

