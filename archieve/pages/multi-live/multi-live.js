const txvContext = requirePlugin('tencentvideo');

Page({
  onLoad() {
  },
  data: {
    isNeedMutex: false,
    isHiddenStop: false,
  },
  onFullScreen(e) {
    console.log('!!!!!!', e.detail);
  },
});
