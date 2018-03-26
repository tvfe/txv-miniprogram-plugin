const txvContext = requirePlugin("tencentvideo");

Page({
	data: {
		tvphide: false
	},
	onLoad: function (query) {
		console.log('single onload=====================');
		this.txvContext = txvContext.getTxvContext('txv1');
	},
	onUnload() {
	},
	createVideo: function (vid) {
	},

	hide: function () {
		this.setData({
			'tvphide': true
		})
	},
	show: function () {
		this.setData({
			'tvphide': false
		})
	},
	play: function () {
		this.txvContext.play();
	},
	pause: function () {
		this.txvContext.pause();
	},
	requestFullScreen: function () {
		this.txvContext.requestFullScreen();
	},
	exitFullScreen: function () {
		this.txvContext.exitFullScreen();
	},
	playrate: function (e) {
	    this.txvContext.playbackRate(+e.currentTarget.dataset.rate);
	}
});