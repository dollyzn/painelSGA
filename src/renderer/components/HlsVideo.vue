<template>
  <div>
    <video ref="video" width="100%" height="100%" controls loop></video>
  </div>
</template>

<script>
import Hls from 'hls.js'

export default {
  name: 'HlsVideo',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted () {
    const video = this.$refs.video
    video.volume = 0.1
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(this.url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = this.url
      video.addEventListener('loadedmetadata', () => {
        video.play()
      })
    }
  }
}
</script>