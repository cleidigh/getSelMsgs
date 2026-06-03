console.debug('background Start');


await((async () => {

	await messenger.menus.create({ id: "gsm1", title: "Test getSelectedMessages", contexts: ["message_list"], visible: true, onclick: gSMTest });


})());

async function gSMTest(info, tab) {
	console.debug('getSelectedMessages mtest func');
	console.debug('info:', info);
	console.debug('tab', tab);
	let gsm1 = await messenger.mailTabs.getSelectedMessages();
	console.debug('gSM first call', gsm1);
	let gsm2 = await messenger.mailTabs.getSelectedMessages();
	console.debug('gSM second call', gsm2);

	let curMailtab = await messenger.mailTabs.getCurrent();
	console.debug('currentMailTab', curMailtab);
	console.debug('currentMailTab id', curMailtab.id);

	let gsmwith_id = await messenger.mailTabs.getSelectedMessages(curMailtab.id);
	console.debug('gSM with current mailTab id', gsmwith_id);


	//await browser.windows.create({url: "/minimalwindow.html", type: "popup", width: 250, height: 140});
}

