<template>
  <div>
    <video ref="video" width="100%" height="100%" controls></video>
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
    if (Hls.isSupported()) {
      const video = this.$refs.video
      const hls = new Hls()
      hls.loadSource(this.url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
      })
    } else if (this.$refs.video.canPlayType('application/vnd.apple.mpegurl')) {
      this.$refs.video.src = this.url
      this.$refs.video.addEventListener('loadedmetadata', () => {
        this.$refs.video.play()
      })
    }
  }
}
</script>