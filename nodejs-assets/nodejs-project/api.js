class API {
	constructor() {
		this.coin = "groestlcoin";
		this.mainClient = {
			bitcoin: false,
			litecoin: false,
			groestlcoin: false, 
			bitcoinTestnet: false,
			litecoinTestnet: false,
			groestlcoinTestnet: false
		};
		this.peer = {
			bitcoin: {},
			litecoin: {},
			groestlcoin: {}, 
			bitcoinTestnet: {},
			litecoinTestnet: {},
			groestlcoinTestnet: {}
		};
		this.peers = {
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: [],
			groestlcoin: [],
			groestlcoinTestnet: [] 
		};
	}

	updateCoin(coin) {
		this.coin = coin;
	};

	updateMainClient(mainClient) {
		this.mainClient = mainClient;
	}

	updatePeer(peer) {
		this.peer = peer;
	}

}

module.exports = new API();