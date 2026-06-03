console.debug('background Start');

// test= 1 single menu with onclick 
// test = 2 refresh,remove prevents exception 
// test = 3 shows indentation differences, (no icon for msg menu - fixed in daily)

var testRun = 3;

await((async () => {

		await messenger.menus.create({ id: "win1", title: "Fixed win size", contexts: ["browser_action_menu"], visible: true, onclick: test });
		await messenger.menus.create({ id: "win2", title: "Fixed win size, positioned", contexts: ["browser_action_menu"], visible: true, onclick: test2 });
		await messenger.menus.create({ id: "win3", title: "No size, responsive", contexts: ["browser_action_menu"], visible: true, onclick: test3 });
		await messenger.menus.create({ id: "win4", title: "No size, responsive, min size", contexts: ["browser_action_menu"], visible: true, onclick: test4 });


})());

async function test() {
	console.debug('test func');
  await browser.windows.create({url: "/minimalwindow.html", type: "popup", width: 250, height: 140});
}

async function test2() {
	console.debug('test func2');
  await browser.windows.create({url: "/minimalwindow.html", type: "popup", top: 200, left: 200, width: 380, height: 240});
}


async function test3() {
	console.debug('test func3');
  await browser.windows.create({url: "/minimalwindow.html", type: "popup"});
}

async function test4() {
	console.debug('test func4');
  await browser.windows.create({url: "/minimalwindow2.html", type: "popup"});
}