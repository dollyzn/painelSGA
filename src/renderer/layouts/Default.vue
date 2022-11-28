<template>
  <div class="layout-content" :style="{ 'background-color': pageBgColor, 'color': pageFontColor }">
    <div class="columns is-gapless">
      <div class="column is-multiline featured-column">
        <header class="column">
          <iframe style="width: 100%; height: 100% !important;" :src="config.videoURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </header>
        <footer class="column" :style="{ 'background-color': config.footerBgColor, 'color': config.footerFontColor }">
          <h2 class="title" :style="{ 'color': config.sidebarFontColor }">
            Últimas<br>Senhas<br>Chamadas
          </h2>
          <history :messages="messages" v-if="lastMessage" :fontColor="config.sidebarFontColor"></history>
        </footer>
      </div>
      <div class="column is-one-quarter history-column" :style="{ 'background-color': config.sidebarBgColor, 'color': config.sidebarFontColor }">
        <header>
          <img :src="logoUrl">
          <featured :message="lastMessage" v-if="lastMessage" @blink="playAudio" :fontColor="pageFontColor"></featured>
        </header>
        <footer :style="{ 'background-color': config.clockBgColor, 'color': config.clockFontColor }">
          <clock :locale="config.locale" :dateFormat="'date_format'|trans" :fontColor="config.clockFontColor"></clock>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Clock from '@/components/Clock.vue'
  import Featured from '@/components/Featured.vue'
  import History from '@/components/History.vue'
  import audio from '@/services/audio'
  import speech from '@/services/speech'

  export default {
    name: 'Default',
    components: {
      Clock,
      Featured,
      History
    },
    computed: {
      messages () {
        return this.$store.getters.history
      },
      lastMessage () {
        return this.$store.getters.message
      },
      config () {
        return this.$store.state.config
      },
      logoUrl () {
        return this.config.logo || 'static/images/logo.png'
      },
      pageBgColor () {
        const peso = this.lastMessage.$data ? this.lastMessage.$data.peso : 1
        return peso > 0 ? this.config.pageBgColorPriority : this.config.pageBgColorNormal
      },
      pageFontColor () {
        const peso = this.lastMessage.$data ? this.lastMessage.$data.peso : 1
        return peso > 0 ? this.config.pageFontColorPriority : this.config.pageFontColorNormal
      }
    },
    methods: {
      playAudio () {
        const lang = this.config.locale || 'pt-BR'
        let description = this.$store.getters.message.description
        let title = this.$store.getters.message.title
        let subtitle = this.$store.getters.message.subtitle

        if (!this.$store.state.config.speechLocal) {
          subtitle = ''
        }

        audio.playAlert(this.config.alert)

        if (this.$store.state.config.speechEnable) {
          setTimeout(() => speech.speechAll([
            'Senha',
            description,
            title,
            subtitle
          ], lang), 2000)
        } else {
        }
      }
    }
  }
</script>

<style lang="sass">
  .layout-content
    position: fixed
    width: 100%
    height: 100%
    .columns
      height: 100%

  .clock
    .time
      span
        font-size: 4vw
      span.hours
        font-weight: bold
      span.seconds
        font-style: italic
    .date
      text-align: center
      span
        font-size: 2vw
        font-weight: bold

  .featured-column
      header
        height: 80vh
      footer
        height: 20vh
        width: 100%
        padding: 5vh
        display: flex
        h2
         line-height: 45px
        .history
        .message
          span
            text-align: left
            display: block
          .title
            font-size: 8vh
            font-weight: bold
          .subtitle
            font-size: 4vh
            font-style: italic

  .history-column
    height: 100vh
    img
      display: block
      margin-left: auto
      margin-right: auto
      height: 15vh
    header
      height: 80vh
      padding: 1rem 0
    footer
      height: 30vh
      padding: 1rem 0
      text-align: center
      background: rgba(0,0,0,.1)
    *
      color: #2c3e50
      .featured-message
        text-align: center
        padding-top: 70px
        .title
          font-size: 18vh
          font-weight: bold
        .subtitle
          font-size: 5vh
        .description
          font-size: 5vh
    .title
      text-align: center
      font-weight: bold
    .message
      background-color: transparent
      border-left: 8px solid rgba(0,0,0,.3)
      padding-left: rem
      margin-bottom: 1rem
    .empty
      p
        font-style: italic
        text-align: center
    .history
      .message
        span
          text-align: left
          display: block
        .title
          font-size: 8vh
          font-weight: bold
        .subtitle
          font-size: 4vh
          font-style: italic
</style>
