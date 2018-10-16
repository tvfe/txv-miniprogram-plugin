const txvContext = requirePlugin("tencentvideo");
const config = require('../../modules/config')

Page({
	data: {
		tvphide: false,
		vid: 'l0025mppim4',
		changingvid: '',
		controls: !!config.get('controls'),
		autoplay: !!config.get('autoplay'),
		playState: '',
		showProgress1: true,
		width:"100%",
    	height:"auto"
	},
	onLoad: function (query) {
		this.setData({
			controls: !!config.get('controls'),
			autoplay: !!config.get('autoplay')
		})
		this.txvContext = txvContext.getTxvContext('txv0');
	},
	createVideo: function (vid) {
	},
	hideControls: function () {
		config.set('controls', false)
		wx.reLaunch({
			url: './single'
		})
	},
	showControls: function () {
		config.set('controls', true)
		wx.reLaunch({
			url: './single'
		})
	},
	enableAutoplay: function () {
		config.set('autoplay', true)
		wx.reLaunch({
			url: './single'
		})
	},
	disableAutoplay: function () {
		config.set('autoplay', false)
		wx.reLaunch({
			url: './single'
		})
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
	seek: function() {
		this.txvContext.seek(10);
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
	},

	onStateChange: function(e) {
		this.setData({
			playState: e.detail.newstate
		})
	},
	onTimeUpdate: function(e) {
	},
	changeVertVid: function () {
		this.setData({
			vid: 'h0026v0vvl6'
		})
	},
	changeVid: function(e) {
		this.setData({
			vid: e.detail.value
		});
	},
	showProgress(){
	    this.setData({
	      showProgress1:true
	    })
	},
	hideProgress() {
	    this.setData({
	      showProgress1: false
	    })
	},
	onFullScreenChange: function () {
		console.log('onFullScreenChange!!!')
	}
});