const txvContext = requirePlugin("tencentvideo");

Page({
	data: {
		videos: []
	},
	onLoad (query) {
		let player1 = txvContext.getTxvContext('txv1');
		let player2 = txvContext.getTxvContext('txv2');
		let player3 = txvContext.getTxvContext('txv3');
		let player4 = txvContext.getTxvContext('txv4');
		console.log(player1);
		console.log(player2);
		console.log(player3);
		console.log(player4);
	},
	onShow(){
		var last=txvContext.getLastPlayId()
		if(~["txv1",'txv2','txv3','txv4'].indexOf(last)){
			txvContext.getTxvContext(last).play();
		}
	}
});