const txvContext = requirePlugin('tencentvideo');
const config = require('../../modules/config');
// txvContext.openLog()   //开启日志，默认关闭

const urlArray = [
  'http://113.105.166.112/vhot2.qqvideo.tc.qq.com/ATansi7jyPMRU26OOX5RFoC8d6g78WL-ctbpsx_GbNDg/e0354z3cqjp.mp4?vkey=99F9B2FE4C287F6CBEA3F17D3D6A080E1FAAB6DF943B3D8EC0B64782D7C09413ED1B1FC87B263883F26C5EF4C65F09C400546E0AA418B16D9F90B64EE0FD0474E02663B2D2ABB8DA542E8A1CCBF3AB049B520D3BB9DB4B3D50A2FA067265D584&br=60&fmt=auto&level=0&platform=4210801&sdtfrom=v4169',
  'http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/p0382yhi66i.mp4?vkey=6BBD48A5852831CAA4651146A676F67E5F9752E488CA6AA07448B10D274F27C94A625BE59922F52B8DA0924F44D40B03A9745A1A195DA69583EFAB9B1DB593C24742CB3A47511A68FC2CF607D6D4F01BEB635D26AAC3D4CB1C02618D90BE223A&br=60&fmt=auto&level=0&platform=4210801&sdtfrom=v4169',
  'http://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/k0379ogcfrh.mp4?vkey=30C5067FB8B3DE4AE0235145A79734FE549FFED70CD61AB57EC3FACF9C5F673E439F795AD13F4B2D4ED77DAF6A950D8BC62C4A7AE75561DD683C0CD94656E293F98B43E99DC4B122CC6FC7E0D0CC07DDA53E33F849EA7378C4D1FFD3D4C43F40&br=60&fmt=auto&level=0&platform=4210801&sdtfrom=v4169',
  'http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/p0127cmrg1m.mp4?vkey=720343A995C1A6455181EAF8309A856AAD22C9E67DD9A20FEFF876742A8AF0B4A744417A042D50DB398AA4E0533F8DDF26EE80F8BD7B5150E8118B33AA4FBED007A34E8784A0DCDF94473FD5B3D24C2817305DAD2F496AD1B56E6B40B3DA6572&br=60&fmt=auto&level=0&platform=4210801&sdtfrom=v4169',
];
const vidArray = [
  'e0354z3cqjp',
  'p0382yhi66i',
  'k0379ogcfrh',
  'p0127cmrg1m',
];
const isLeftSpace = true;

Page({
  data: {
    tvphide: false,
    vid: 'x3201pj9kbg',
    // vid: "u08805086mc",       //竖屏视频
    // vid:'s3030i3qu7a',    // 报错视频
    // vid: 'e0354z3cqjp1',
    // vid: 'p0382yhi66i',   //这个视频id在vivo Y51
    // vid: 'g0831n1hwnk',   //短视频id
    // vid:'d01575j3hi1',    //长视频id
    extraParam: {
      // chid:1006,
      // scene:1,
      // qwer:1
      autoplay: true,
      onAfterGetInfo(err, data) {
        // err.message ="小程序暂不支持该视频播放，请使用最新版本App观看~"
        // console.log(1111111,err.code,data)
      },
    },
    changingvid: '',
    controls: true || !!config.get('controls'),
    autoplay: true || !!config.get('autoplay'),
    playState: '',
    showProgress1: true,
    options: { getCurrentPages },
    width: '100%',
    height: 'auto',
    isNeedMutex: true,
    isHiddenStop: false,
    defn: config.get('defn') || '超清',
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1,
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3,
    }],
    videoInfo: {
      // url: 'http://121.9.201.14/vlive.qqvideo.tc.qq.com/AnicdJYb46yrKonKLdV_5KBo-ZrMAxo67eQl1PzNDRwg/p020184d79o.p201.1.mp4?vkey=3ABFA4E02939B01F885D28CEE689DC974A8DC253648207F99594B19F6BACC46BC7143C88A2B02072592C7E912180633E746E961A403C11F483E26666C893889B2F56E87010EA0E06194177531E724C2E1DC7DDF92907BC8CE0977DF3CFE0B561DC8206EA9E363BFC&platform=other&sdtfrom=&fmt=shd&level=0',
      duration: '22.72',
      dltype: 1,
      vecDefn: [{ cname: '标清;(270P)', selected: false, name: 'msd', id: 100701 },
        { cname: '高清;(480P)', selected: true, name: 'mp4', id: 2 }],
    },
  },
  onLoad(query) {
    // this.setData({
    // 	controls: !!config.get('controls'),
    // 	autoplay: !!config.get('autoplay'),

    // })
    console.log('22222222', config.get('defn'));
    this.txvContext = txvContext.getTxvContext('txv0');
    // console.log(this.txvContext, this.txvContext.startCasting());
    // wx.createIntersectionObserver().relativeToViewport().observe('#test', (res) => {
    // 	console.log(res, 111111111)
    // })

    // setTimeout(() => {
    // 	this.setData({
    // 		vid: 'g0831n1hwnk'
    // 	}, 2000)
    // })
  },
  onUnload() {
  },
  onShow() {
    // var last = txvContext.getLastPlayId()
    // if (last === 'txv0') {
    // 	this.txvContext.play();
    // }
  },
  createVideo(vid) {
  },
  hideControls() {
    config.set('controls', false);
    wx.reLaunch({
      url: './single',
    });
  },
  showControls() {
    config.set('controls', true);
    wx.reLaunch({
      url: './single',
    });
  },
  enableAutoplay() {
    config.set('autoplay', true);
    wx.reLaunch({
      url: './single',
    });
  },
  disableAutoplay() {
    config.set('autoplay', false);
    wx.reLaunch({
      url: './single',
    });
  },
  toggleVideoWithVoice() {
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.txvContext.hideVideoWithVoice();
    } else {
      this.txvContext.showVideoWithVoice();
    }
  },
  toggleVideoWithoutVoice() {
    this.isHiddenWithoutVoice = !this.isHiddenWithoutVoice;
    if (this.isHiddenWithoutVoice) {
      this.txvContext.hideContainer();
    } else {
      this.txvContext.showContainer();
    }
  },
  loadedmetadata(e) {
    console.log(111, e);
  },
  controlsToggle(e) {
  },
  hide() {
    // this.setData({
    // 	'tvphide': true
    // })
    // this.txvContext.hideVideo();
    // this.txvContext.hideContainer()
    this.txvContext.hideVideoWithVoice();
  },
  show() {
    // this.setData({
    // 	'tvphide': false
    // })
    // this.txvContext.showVideo();
    // this.txvContext.showContainer()
    this.txvContext.showVideoWithVoice();
  },
  seek() {
    this.txvContext.seek(10);
    this.txvContext.pause();
  },
  play() {
    this.txvContext.play();
  },
  pause() {
    this.txvContext.pause();
  },
  requestFullScreen() {
    this.txvContext.requestFullScreen();
  },
  exitFullScreen() {
    this.txvContext.exitFullScreen();
  },
  playrate(e) {
    this.txvContext.playbackRate(+e.currentTarget.dataset.rate);
  },
  replay() {
    // this.txvContext.replay(this.data.vid)
    this.setData({
      vid: isLeftSpace ? `${this.data.vid} ` : ` ${this.data.vid}`,
    });
  },
  onStateChange(e) {
    console.log(111, e.detail);
    this.setData({
      playState: e.detail.newstate,
    });
  },
  onEnded(e) {
    console.log(11111111, e);
  },
  onTimeUpdate(e) {
  },
  changeVertVid() {
    this.setData({
      vid: 'h0026v0vvl6',
    });
  },
  changeVid(e) {
    // if (e.detail.value.match(/^\w{11}$/)) {
    this.setData({
      vid: e.detail.value,
    });
    // }
  },
  showProgress() {
    this.setData({
      showProgress1: true,
    });
  },
  hideProgress() {
    this.setData({
      showProgress1: false,
    });
  },
  onFullScreenChange() {
    console.log('onFullScreenChange!!!');
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value;
  },
  sendDanmu() {
    this.txvContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor(),
    });
  },
  switchDefn(e) {
    const defn = e.detail.value;
    if (!defn) return;
    config.set('defn', defn);
    setTimeout(() => {
      wx.reLaunch({
        url: './single',
      });
    }, 100);
  },
  switchUrl(e) {
    this.start = this.start || 0;
    this.setData({
      videoInfo: Object.assign({}, this.videoInfo, { url: urlArray[this.start] }),
      vid: vidArray[this.start],
    });
    this.start = (++this.start) % 4;
  },
});


function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? `0${color}` : color;
    rgb.push(color);
  }
  return `#${rgb.join('')}`;
}
