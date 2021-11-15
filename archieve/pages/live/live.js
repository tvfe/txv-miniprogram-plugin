const txvContext = requirePlugin('tencentvideo');
// txvContext.openLog()
Page({
  onLoad() {
    this.videoContext = txvContext.getTxvContext('txv7');
  },
  data: {
    // sid: 100105100,
    // pid: 56,
    sid: 1603545403, pid: 102774,
    onlineNumber: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1,
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3,
      }],
    tvphide: false,
    extraParam: {
      getReportParam: (cb) => {
        cb(null, {
          hc_qq: '11111111111111',
          sUrl: '22222222222222',
          sRef: '3333333333333',
          vip_type: '344444444444',
          hc_pvid: '55555555555',
          login_type: '6666666666',
          open_id: '7777777777',
          freetype: '888888888',
          lookback: '999999999',
        });
      },
    },
  },
  getLiveStatus(data) {
    this.setData({
      onlineNumber: data.detail.data && data.detail.data.onlineNumber || 0,
    });
  },
  hide() {
    // this.videoContext.play()
    // this.setData({
    //   tvphide:true
    // })
    // this.videoContext.hideVideo()
    // this.videoContext.hideContainer()
  },
  onTimeUpdate() {
  },
  mute() {
    this.videoContext.mute();
  },
  onMuteChange(e){
    console.log(e)
  },
  show() {
    // this.setData({
    //   tvphide: false
    // })
    // this.videoContext.showVideo()
    this.videoContext.showContainer();
  },
  switch() {
    this.setData({
      sid: 1167180501,
      pid: 81834,
    });
  },
  bindInputSid(e) {
    this.tempSid = e.detail.value
  },
  bindInputPid(e) {
    this.tempPid = e.detail.value;
  }
});
