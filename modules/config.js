module.exports = {
	set: function (key, value) {
		wx.setStorageSync(key, value)
	},
	get: function (key) {
		var v = wx.getStorageSync(key)
		return v
	}
}