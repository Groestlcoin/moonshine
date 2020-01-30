const {
	Constants: {
		actions
	}
} = require("../../ProjectData.json");
const {
	resetKeychainValue
} = require("../utils/helpers");

export const updateSettings = (payload) => ({
	type: actions.UPDATE_SETTINGS,
	payload
});

export const updatePeersList = ({ peerList = [], coin = "groestlcoin"} = {}) => (dispatch) => {
	return new Promise(async (resolve) => {
		const failure = (errorTitle = "", errorMsg = "") => {
			resolve({ error: true, errorTitle, errorMsg });
			return;
		};
		try {
			let peers = [];
			await Promise.all(peerList.map((peer) => {
				try {
					const host = peer[1];
					const port = Number(peer[2][1].replace(/\D/g,''));
					const protocol = "ssl";
					peers.push({ host, port, protocol });
				} catch (e) {}
			}));
			dispatch({
				type: actions.UPDATE_PEERS_LIST,
				payload: {
					coin,
					peers
				}
			});
			resolve({ error: false, data: "" });
		} catch (e) {
			console.log(e);
			failure(e);
		}
		failure();
	});
};

export const wipeDevice = () => (dispatch) => {
	return new Promise(async (resolve) => {
		const failure = (errorTitle = "", errorMsg = "") => {
			resolve({ error: true, errorTitle, errorMsg });
			return;
		};
		try {
			for(let i = 0; i < 100; i++) {
				const key = `wallet${i}`;
				await resetKeychainValue({ key });
				await resetKeychainValue({ key: `${key}passphrase` });
			}
			dispatch({
				type: actions.WIPE_DEVICE
			});
			resolve({ error: false, data: "" });
		} catch (e) {
			console.log(e);
			failure(e);
		}
		failure();
	});
};
