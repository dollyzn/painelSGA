<template>
  <div class="container">
    <div class="columns">
      <div class="column is-2-desktop is-3-tablet is-3-mobile column-menu">
        <aside class="menu">
          <img src="static/images/logo.png">

          <hr>

          <router-link to="/">
            <span class="icon">
              <i class="fa fa-chevron-left"></i>
            </span>
            {{ 'menu.go_back'|trans }}
          </router-link>

          <p class="menu-label">
            {{ 'menu.general'|trans }}
          </p>

          <ul class="menu-list">
            <li>
              <a @click="showTab('interface')">
                {{ 'menu.interface'|trans }}
              </a>
            </li>
            <li>
              <a @click="showTab('server')">
                {{ 'menu.server'|trans }}
              </a>
            </li>
            <li>
              <a @click="showTab('services')" v-if="unities.length">
                {{ 'menu.services'|trans }}
              </a>
            </li>
            <li>
              <a @click="showTab('sound')">
                {{ 'menu.sound'|trans }}
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div class="heading">
          <h1 class="title">
            {{ 'settings.title'|trans }}
          </h1>
          <h2 class="subtitle">
            {{ 'settings.subtitle'|trans }}
          </h2>
        </div>

        <hr>

        <form @submit.prevent="save" v-if="tab==='interface'">
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.locale'|trans }}
                </label>
                <div class="control is-expanded has-icons-left">
                  <span class="select is-fullwidth">
                    <select v-model="config.locale">
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="pt_BR">Português (Brasil)</option>
                    </select>
                  </span>
                  <span class="icon is-left">
                    <i class="fa fa-globe"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.logo'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="url" placeholder="https://" v-model="config.logo">
                </div>
              </div>
            </div>
          </div>

          <h3 class="title">Mídia</h3>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">
                  Vídeo
                </label>
                <div class="control">
                  <button class="button is-medium" type="button" @click.prevent="selectFile">Escolher arquivo</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  Link M3U8
                </label>
                <div class="control">
                  <input class="input is-medium" type="url" placeholder="https://" v-model="config.videoM3URL">
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">
                  Canais Listados
                </label>
                <div class="control">
                  <div class="select">
                    <select v-model="config.videoM3URL">
                      <option value=""></option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/interativafm/_definst_/interativafm/playlist.m3u8">Radios ao Vivo FM</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8">SBT Interior SP</option>
                      <option value="https://stmv1.transmissaodigital.com/cidadeverdenovo/cidadeverdenovo/playlist.m3u8">SBT - TV Cidade Verde - (PI)</option>
                      <option value="https://stream.amsolution.net.br:8443/live/60ce4ae4b9d4c/index.m3u8">SBT - TV Difusora (MA)</option>
                      <option value="https://cdn-cdn-iguacu.ciclano.io:1443/cdn-iguacu/cdn-iguacu/playlist.m3u8">SBT Rede Massa (PR)</option>
                      <option value="https://streaming.portaltvparaense.com.br/hls/rtp.m3u8">SBT TV Paraense (PA)</option>
                      <option value="https://livefocamundo.com:8081/tvguajaraonline2/index.m3u8">SBT TV Guajará (PA)</option>
                      <option value="http://evpp.mm.uol.com.br:1935/ne10/ne10.smil/playlist.m3u8">SBT - TV Jornal (PE)</option>
                      <option value="http://evpp.mm.uol.com.br/ne10/ne10-tvjornal-caruaru-video-web.sdp/playlist.m3u8">SBT - TV Jornal Caruaru (PE)</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-8379/LVW8379_rIq6ZYiIiA/playlist.m3u8">SBT TV Aratu (BA)</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/playlist.m3u8">RecordTV MT</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-10841/LVW10841_mT77z9o2cP/playlist.m3u8">RecordTV MT 2</option>
                      <option value="https://59f2354c05961.streamlock.net:1443/portaldatropical/_definst_/portaldatropical/playlist.m3u8">RecordTV RN</option>
                      <option value="https://caikron.com.br:19360/criciuma/criciuma.m3u8">RecordTV NDTV SC</option>
                      <option value="https://5cf4a2c2512a2.streamlock.net:443/rbatv/rbatv/playlist.m3u8">Band Pará - RBA TV</option>
                      <option value="https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/playlist.m3u8">RedeTV! TV Arapuan HD (PB)</option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/tvpampa/_definst_/tvpampa/playlist.m3u8">TV Pampa - RedeTV! RS</option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/redetvro/_definst_/redetvro/playlist.m3u8">RedeTV! Tocantins</option>
                      <option value="https://5a2b083e9f360.streamlock.net/tvpantanal/tvpantanal.sdp/playlist.m3u8">RedeTV! TV Pantanal (MT)</option>
                      <option value="https://srv1.zcast.com.br/kpoptv/kpoptv/playlist.m3u8">Kpop TV Play</option>
                      <option value="https://stream.ichibantv.ga:3764/hybrid/play.m3u8">Geekdot</option>
                      <option value="https://tv02.zas.media:1936/murilotv/murilotv/playlist.m3u8">Murilo TV</option>
                      <option value="https://stmv1.srvif.com/canalstart/canalstart/playlist.m3u8">Start - WebTV</option>
                      <option value="https://stmv1.srvif.com/xtremetv/xtremetv/playlist.m3u8">XTreme</option>
                      <option value="https://stmv1.srvif.com/animetv/animetv/playlist.m3u8">Anime TV - WebTV</option>
                      <option value="https://stmv.video.expressolider.com.br/loadingtv/loadingtv/playlist.m3u8">Loading - Web TV</option>
                      <option value="https://stmv.video.expressolider.com.br/ghostv/ghostv/playlist.m3u8">Ghost - WebTV</option>
                      <option value="https://stmv1.srvif.com/jetsontv/jetsontv/playlist.m3u8">Jetsons - Webtv</option>
                      <option value="https://stmv1.paineltv.net/redeclonetv/redeclonetv/playlist.m3u8">Rede Clone - WebTV</option>
                      <option value="https://stmv1.srvif.com/tvliberal/tvliberal/playlist.m3u8">TV Liberal - WebTV</option>
                      <option value="http://stream.foratedio.com/foratedio/foratedio/playlist.m3u8">Fora do Tédio</option>
                      <option value="https://video02.logicahost.com.br/tvc21/tvc21/playlist.m3u8">TV Gazeta SP - Araçatuba</option>
                      <option value="https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8">Record News</option>
                      <option value="https://5cf4a2c2512a2.streamlock.net/rbtv/rbtv/playlist.m3u8">Rede Brasil (SP)</option>
                      <option value="https://stream.ichibantv.ga:3827/hybrid/play.m3u8">TV Cidade (RJ)</option>
                      <option value="https://5ad482a77183d.streamlock.net/operacaotbomt.com/operacaotbomt.com/playlist.m3u8">Brasil Oeste (MT)</option>
                      <option value="https://video02.kshost.com.br/adauton7191/adauton7191/playlist.m3u8">TV Várzea Grande (MT)</option>
                      <option value="http://sevensp.homelinux.com/live/index.m3u8">TV MAIS NEWS</option>
                      <option value="https://video02.logicahost.com.br/tvguara23/tvguara23/playlist.m3u">TV Cultura - TV Guará (MA)</option>
                      <option value="https://streaming03.zas.media:1936/tvfuturo/tvfuturo/playlist.m3u8">TV Cultura - TV Futuro (RJ)</option>
                      <option value="http://www.portalcultura.com.br/playerhtml/funtelpa/tv_funtelpa/playlist.m3u8">Cultura Pará</option>
                      <option value="https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8">Catve - Cultura (PR)</option>
                      <option value="https://ebocast.ebosystems.com.br:3456/hybrid/play.m3u8">Rede Metrópole</option>
                      <option value="https://live.mediastreaming.com.br/playtvhd/playtv.stream/playlist.m3u8">Play TV</option>
                      <option value="http://200.189.113.201/hls/tve.m3u8">Paraná Turismo</option>
                      <option value="https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8">Kuriakos Kids</option>
                      <option value="http://stream2.ba.gov.br/hls-live/livepkgr/_definst_/irdeb/pgm-1.m3u8">TVE Bahia</option>
                      <option value="https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8">Retrô Cartoon</option>
                      <option value="https://ebocast.ebosystems.com.br:3070/live/awtvlive.m3u8">AWTV</option>
                      <option value="https://stmv1.srvif.com/webvintage/webvintage/playlist.m3u8">Vintage TV</option>
                      <option value="https://v4-slbps-sambavideos.akamaized.net/live/3282%2C8114%2Cec4b5a296d97fa99bf990662f5b4f8e1%3Bbase64np%3BMc8VDxqNjXKCAf8%21/amlst%3AMc_tFgfGiHOdQXPB/chunklist_.m3u8">Rede Minas</option>
                      <option value="https://stmv1.srvif.com/tvu/tvu/playlist.m3u8">TV União (CE)</option>
                      <option value="https://5a1c76baf08c0.streamlock.net/familia/smil:familia.smil/playlist.m3u8">Rede Família</option>
                      <option value="https://5c483b9d1019c.streamlock.net/8022/8022/playlist.m3u8">TV Brasil - Joinville</option>
                      <option value="http://streaming.procergs.com.br:1935/tve/stve/playlist.m3u8">TVE RS</option>
                      <option value="https://video01.logicahost.com.br/tvzonadamata/tvzonadamata/playlist.m3u8">TV Zona da Mata - TV Brasil</option>
                      <option value="https://video01.soultv.com.br/darkflix/darkflix/playlist.m3u8">DarkFlix HD</option>
                      <option value="https://bitcdn-kronehit.bitmovin.com/v2/hls/playlist.m3u8">KroneHIT</option>
                      <option value="http://hz1.teleport.cc/HLS/HD.m3u8">1Mus</option>
                      <option value="https://stream.ichibantv.ga:3230/hybrid/play.m3u8">MAIS UM</option>
                      <option value="http://stream.mediawork.cz/retrotv/smil:retrotv2.smil/playlist.m3u8">Retrô TV</option>
                      <option value="https://streamcdnc1-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8">Capital TV</option>
                      <option value="https://streamcdnc2-4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8">M2O</option>
                      <option value="http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8">Music Top</option>
                      <option value="http://stmv1.transmissaodigital.com/ronald6259/ronald6259/playlist.m3u8">FDR - Futura (CE)</option>
                      <option value="http://video01.kshost.com.br/tv31966/tv31966/playlist.m3u8">Rede Brasil - TV Marajoara (PA)</option>
                      <option value="https://cast.cdnseguro.com:19360/8092/8092.m3u8">TopTV</option>
                      <option value="https://cast.cdnseguro.com:19360/8094/8094.m3u8">Kiss TV - Indisponível</option>
                      <option value="https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8">All Sports</option>
                      <option value="https://5f593df7851db.streamlock.net/evangelizar/tv/playlist.m3u8">TV Evangelizar</option>
                      <option value="https://cvd1.cds.ebtcvd.net/live-redevida/smil:redevida.smil/playlist.m3u8">Rede Vida</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-9716/LVW9716_HbtQtezcaw/playlist.m3u8">TV Aparecida</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-10024/ngrp:LVW10024_H3QLdAY6kx_all/playlist.m3u8">Rede Século 21</option>
                      <option value="https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8">Novo Tempo</option>
                      <option value="https://srv4.zcast.com.br/redetvoficial/redetvoficial/playlist.m3u8">Rede UTV</option>
                      <option value="https://5ad482a77183d.streamlock.net/cleuzaviamorena.com/cleuzaviamorena.com/playlist.m3u8">Via Morena</option>
                      <option value="https://59d39900ebfb8.streamlock.net/8040/8040/playlist.m3u8">TV Pantanal MS - WebTV</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-9715/LVW9715_12B26T62tm/chunklist.m3u8">Adesso TV</option>
                      <option value="https://stmv1.srvif.com/tvriomadeira/tvriomadeira/playlist.m3u8">TV Rio Madeira - WebTV</option>
                      <option value="https://59f2354c05961.streamlock.net:1443/tvdasartes/_definst_/tvdasartes/playlist.m3u8">TV Vale das Artes - WebTV</option>
                      <option value="https://novo.bitstreaming.info:1936/8032/8032/playlist.m3u8">Rede TV Sul - WebTV</option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/tvmax/_definst_/tvmax/playlist.m3u8">TV MAX</option>
                      <option value="https://596639ebdd89b.streamlock.net/datavideo01/datavideo01/chunklist.m3u8">RDC</option>
                      <option value="https://livefocamundo.com:8081/tvaracati/index.m3u8">TV Aracati</option>
                      <option value="https://59f2354c05961.streamlock.net:1443/tvdigitalbirigui/_definst_/tvdigitalbirigui/chunklist_w763334596.m3u8">TV Birigui</option>
                      <option value="https://srv1.zcast.com.br/tvmon/tvmon/playlist.m3u8">TV Mon</option>
                      <option value="https://stmv2.duvoxtv.com.br/tvcarioca/tvcarioca/playlist.m3u8">TV Carioca</option>
                      <option value="https://slbps-ml-sambatech.akamaized.net/samba-live/2472/7424/8a00fe7cc36ac263b2c3e9324497d5ff/video/621b6f2c-2dc6-41f1-9302-f9583c96ee31_index.m3u8">SescTV HD</option>
                      <option value="https://arkyvbre1g.zoeweb.tv/fiocruz/fiocruz/playlist.m3u8">Canal Saúde</option>
                      <option value="https://video01.logicahost.com.br/tvideonews/tvideonews/playlist.m3u8">TVídeoNews</option>
                      <option value="https://acesso.ecast.site:3922/live/redengtlive.m3u8">NGT</option>
                      <option value="http://painelvj.com.br:1935/pdsertaotv/pdsertaotv.sdp/playlist.m3u8">TV Diário do Sertão</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-9883/LVW9883_lFcfKysrHF/playlist.m3u8">ISTV</option>
                      <option value="https://stmv1.srvif.com/canal29/canal29/playlist.m3u8">Canal 29 - WebTV</option>
                      <option value="https://tv01.livemustv.com.br/rivaldo6209/rivaldo6209/playlist.m3u8">Bons Tempos TV - WebTV</option>
                      <option value="https://59f2354c05961.streamlock.net:1443/pascoal/_definst_/pascoal/playlist.m3u8">TV Destak - WebTV</option>
                      <option value="https://stmv1.srvif.com/tvserie/tvserie/playlist.m3u8">TV Séries - WebTV</option>
                      <option value="https://cdn-canalpaulo.ciclano.io:1443/canalpaulo/canalpaulo/playlist.m3u8">TV Aberta SP</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-8067/ngrp:LVW8067_ZffQjxn7UC_all/chunklist.m3u8">TV Candidés</option>
                      <option value="https://stmv1.paineltv.net/tvjapi/tvjapi/playlist.m3u8">TV Japi</option>
                      <option value="https://srv5.zcast.com.br/paulo4100/paulo4100/playlist.m3u8">TV Maceió (AL)</option>
                      <option value="https://virtues.es:1936/tvmar/tvmar/playlist.m3u8">TV Mar</option>
                      <option value="https://livefocamundo.com:8081/tvjsid/index.m3u8">TV Sjid (BA)</option>
                      <option value="https://midia.faap.net/faaplatamlive-live/stream_720/livestream.m3u8">TV Faap</option>
                      <option value="https://58a4464faef53.streamlock.net/impd/ngrp:impd_all/playlist.m3u8">IMPD TV</option>
                      <option value="https://644398c.ha.azioncdn.net/primary/tvuniversal_480p.sdp/playlist.m3u8">IURD TV</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8">Rede Gospel</option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/teste01/_definst_/teste01/playlist.m3u8">TV Pai Eterno</option>
                      <option value="https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8">Gospel Cartoon</option>
                      <option value="https://stmv1.srvif.com/gospelf/gospelf/playlist.m3u8">Gospel Movie TV</option>
                      <option value="https://stmv1.srvif.com/gmusic/gmusic/playlist.m3u8">Gospel Music</option>
                      <option value="https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8">KURIAKOS CINE</option>
                      <option value="https://cdn-centraltv-11366.ciclano.io:1443/centraltv-11366/centraltv-11366/playlist.m3u8">Central TV</option>
                      <option value="https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8">Amazon Sat</option>
                      <option value="http://51.222.85.85:81/hls/loco/index.m3u8">Locomotion - WebTV</option>
                      <option value="https://5c483b9d1019c.streamlock.net/8066/8066/playlist.m3u8">Rede Premium</option>
                      <option value="http://wowza.softhost.com.br:1935/fonte/fontetv/playlist.m3u8">FonteTV (GO)</option>
                      <option value="https://stream3.camara.gov.br/tv1/manifest.m3u8">TV Câmara</option>
                      <option value="https://cdn-fundacao-2110.ciclano.io:1443/fundacao-2110/fundacao-2110/playlist.m3u8">TV Metrópole</option>
                      <option value="http://evpp.mm.uol.com.br:1935/band_live/terraviva/playlist.m3u8">Terra Viva</option>
                      <option value="https://evpp.mm.uol.com.br/geob_band/agromais/playlist.m3u8">Agro Mais</option>
                      <option value="https://607d2a1a47b1f.streamlock.net/crur/smil:canalrural.smil/playlist.m3u8">Canal Rural</option>
                      <option value="https://596639ebdd89b.streamlock.net/8124/8124/chunklist.m3u8">TV Verdes Campos SAT</option>
                      <option value="https://server.flixtv.com.br/agrobrasiltv/agrobrasiltv/playlist.m3u8">AgroBrasil TV</option>
                      <option value="https://5c483b9d1019c.streamlock.net/8202/8202/playlist.m3u8">TV Gallo - WebTV</option>
                      <option value="http://flash1.crossdigital.com.br:1935/2063/2063/live.m3u8">TV Santa Cecília (SP)</option>
                      <option value="https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_video.m3u8">RTL (Itália)</option>
                      <option value="http://streaming.bitonlive.net:8080/hls/ottofm2/204_203/index.m3u8">Otto Fm TV</option>
                      <option value="https://cdnlive.radiou.com/LS-ATL-43240-1/tracks-v1a1/mono.m3u8">RadioU</option>
                      <option value="https://tv.broadcasting.ro/memfs/8a3d88be-1464-4380-8b8f-ea7e5bf62663.m3u8">Rock TV</option>
                      <option value="https://5cefcbf58ba2e.streamlock.net:543/tltvweb/latintv.stream/playlist.m3u8">Top Latino TV</option>
                      <option value="https://ocko-live-dash.ssl.cdn.cra.cz/cra_live2/ocko_gold.stream.1.smil/manifest.m3u8">Ocko Star</option>
                      <option value="https://stream.4fun.tv:8888/hls/4f_high/index.m3u8">4Fun TV</option>
                      <option value="http://tv.ticosmedia.com:1935/COLOSAL/COLOSAL/playlist.m3u8">Colosal TV</option>
                      <option value="https://59f1cbe63db89.streamlock.net:1443/mundotv/_definst_/mundotv/playlist.m3u8">Mundo TV</option>
                      <option value="https://5ad482a77183d.streamlock.net/rodrigotvbrusque.com.br/_definst_/5d880199c902eb4a1e8df00d/playlist.m3u8">TV Brusque (SC)</option>
                      <option value="https://dd8umsy8yf96u.cloudfront.net/live/cnt-curitiba.m3u8">CNT</option>
                      <option value="https://cdn.jmvstream.com/w/LVW-9375/LVW9375_6i0wPBCHYc/playlist.m3u8">Boas Novas</option>
                      <option value="https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index_4.m3u8">SIC (apenas em Portugal)</option>
                      <option value="http://static.france24.com/live/F24_ES_LO_HLS/live_web.m3u8">France 24</option>
                      <option value="https://ott.tv5monde.com/Content/HLS/Live/channel(info)/variant.m3u8">TV5 Monde Info</option>
                      <option value="https://live-hls-web-aje.getaj.net/AJE/index.m3u8">Al Jazeera English</option>
                      <option value="https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8">Arirang</option>
                      <option value="http://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/2003458/live.m3u8">NHK Japan</option>
                      <option value="https://www.bloomberg.com/media-manifest/streams/phoenix-us.m3u8">Bloomberg TV</option>
                      <option value="https://vidtech.cbsinteractive.com/h5/blanks/uvp_blank.mp4">CBS News</option>
                      <option value="https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8">Deutsche Welle</option>
                      <option value="https://rbmn-live.akamaized.net/hls/live/622817/BoRB-US/master.m3u8">Red Bull TV</option>
                      <option value="https://rt-rtd.rttv.com/live/rtdoc/playlist.m3u8">RT Documentary Channel</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="title">{{ 'settings.interface.colors'| trans }}</h3>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.page_bg_color_normal'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.pageBgColorNormal">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.page_font_color_normal'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.pageFontColorNormal">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.page_bg_color_priority'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.pageBgColorPriority">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.page_font_color_priority'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.pageFontColorPriority">
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.sidebar_bg_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.sidebarBgColor">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.sidebar_font_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.sidebarFontColor">
                </div>
              </div>
            </div>
             <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.videoURL'|trans }}
                </label>
                <div class="control">
                  <button class="button is-medium" type="button" @click.prevent="selectFile">Escolher arquivo</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  Link M3U8
                </label>
                <div class="control">
                  <input class="input is-medium" type="url" placeholder="https://" v-model="config.videoM3URL">
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.footer_bg_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.footerBgColor">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.footer_font_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.footerFontColor">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.clock_bg_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.clockBgColor">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">
                  {{ 'settings.label.clock_font_color'|trans }}
                </label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="#000000" v-model="config.clockFontColor">
                </div>
              </div>
            </div>
          </div>

          <hr>

          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button type="submit" class="button is-primary is-large">
                {{ 'settings.btn.save'|trans }} &nbsp;
                <span class="icon is-small">
                  <i class="fa fa-save"></i>
                </span>
              </button>
            </div>
          </div>
        </form>

        <form @submit.prevent="save" v-if="tab==='server'">
          <div class="field">
            <label class="label">
              {{ 'settings.label.server'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="url" placeholder="https://" v-model="config.server" @change="changeServer">
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.username'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="text" placeholder="" v-model="config.username">
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.password'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="password" placeholder="" v-model="config.password">
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.client_id'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="text" placeholder="" v-model="config.clientId">
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.client_secret'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="password" placeholder="" v-model="config.clientSecret">
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.retries'|trans }}
            </label>
            <div class="control">
              <input class="input is-medium" type="text" placeholder="" v-model="config.retries">
            </div>
          </div>

          <hr>

          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button type="submit" class="button is-primary is-large">
                {{ 'settings.btn.save'|trans }} &nbsp;
                <span class="icon is-small">
                  <i class="fa fa-save"></i>
                </span>
              </button>
            </div>
          </div>
        </form>

        <form @submit.prevent="save" v-if="tab==='services'">
          <div class="field">
            <label class="label">
              {{ 'settings.label.unity'|trans }}
            </label>
            <div class="control">
              <div class="select">
                <select v-model="config.unity" @change="loadServices">
                  <option></option>
                  <option v-for="unity in unities" :value="unity.id" :key="unity.id">
                    {{ unity.nome }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">
              {{ 'settings.label.services'|trans }}
            </label>
            <div class="control" v-for="service in services" :key="service.servico.id">
              <label class="checkbox">
                <input type="checkbox" :value="service.servico.id" v-model="config.services">
                {{service.sigla}} - {{service.servico.nome}}
              </label>
            </div>
            <div class="control" v-if="!services || !services.length">
              {{ 'settings.services.empty'|trans }}
            </div>
          </div>

          <hr>

          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button type="submit" class="button is-primary is-large">
                {{ 'settings.btn.save'|trans }} &nbsp;
                <span class="icon is-small">
                  <i class="fa fa-save"></i>
                </span>
              </button>
            </div>
          </div>
        </form>

        <form @submit.prevent="save" v-if="tab==='sound'">
          <div class="field">
            <label class="label">
              {{ 'settings.label.alert'|trans }}
            </label>
            <div class="control has-addons">
              <div class="select">
                <select v-model="config.alert">
                  <option v-for="(i, alert) in alerts" :value="i" :key="i">
                    {{ alert }}
                  </option>
                </select>
              </div>
              <a class="button" title="Play">
                <span class="icon is-small" @click.prevent="testAlert">
                  <i class="fa fa-play"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="field">
            <label class="label">
              {{ 'settings.label.speech'|trans }}
            </label>
            <div class="control has-addons">
              <label class="checkbox">
                <input type="checkbox" v-model="config.speechEnable">
                {{ 'settings.label.speech_enabled'|trans }}
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control has-addons">
              <label class="checkbox">
                <input type="checkbox" v-model="config.speechLocal" :disabled="!this.config.speechEnable">
                {{ 'settings.label.speech_local'|trans }}
              </label>
            </div>
          </div>
          <span class="button" :disabled="!this.config.speechEnable" >
            Normal: A001 / Guichê: 1
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style="color: inherit" title="Play">
                <span class="icon is-small" @click.prevent="testSpeech">
                  <i class="fa fa-play"></i>
                </span>
          </a>
          </span>
          <hr>
          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button type="submit" class="button is-primary is-large">
                {{ 'settings.btn.save'|trans }} &nbsp;
                <span class="icon is-small">
                  <i class="fa fa-save"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import audio from '@/services/audio'
  import speech from '@/services/speech'
  import { log } from '@/util/functions'
  const { dialog } = require('electron').remote

  function load (ctx, isInit) {
    ctx.config = JSON.parse(JSON.stringify(ctx.$store.state.config))
    // defaults
    ctx.config.locale = ctx.config.locale || 'en'
    ctx.config.retries = ctx.config.retries || 5
    ctx.config.services = ctx.config.services || []
    ctx.config.alert = ctx.config.alert || audio.alertsAvailable.Default

    ctx.config.pageBgColorNormal = ctx.config.pageBgColorNormal || '#FFFFFF'
    ctx.config.pageFontColorNormal = ctx.config.pageFontColorNormal || '#000000'
    ctx.config.pageBgColorPriority = ctx.config.pageBgColorPriority || '#FFFFFF'
    ctx.config.pageFontColorPriority = ctx.config.pageFontColorPriority || '#FF0000'
    ctx.config.sidebarBgColor = ctx.config.sidebarBgColor || '#4FC08D'
    ctx.config.sidebarFontColor = ctx.config.sidebarFontColor || '#000000'
    ctx.config.footerBgColor = ctx.config.footerBgColor || '#F1F1F1'
    ctx.config.footerFontColor = ctx.config.footerFontColor || '#000000'
    ctx.config.clockBgColor = ctx.config.clockBgColor || '#44A075'
    ctx.config.clockFontColor = ctx.config.clockFontColor || '#000000'

    if (ctx.$store.getters.isAuthenticated) {
      const forceLoad = (
        isInit ||
        !ctx.unities ||
        ctx.unities.length === 0
      )

      ctx.fetchUnities = forceLoad
      ctx.fetchServices = forceLoad

      if (ctx.$store.getters.isExpired) {
        log('token expired, trying to refresh')

        ctx.$store.dispatch('token').then(() => {
          log('token refreshed successfully!')
          ctx.loadData()
        }, () => {
          log('error on refresh token')
        })
      } else {
        ctx.loadData()
      }
    }

    ctx.initialClientId = ctx.config.clientId
    ctx.initialClientSecret = ctx.config.initialClientSecret
    ctx.initialUsername = ctx.config.initialUsername
    ctx.initialPassword = ctx.config.initialPassword
  }

  export default {
    name: 'Settings',
    data () {
      return {
        tab: 'interface',
        config: {},
        initialClientId: null,
        initialClientSecret: null,
        initialUsername: null,
        initialPassword: null,
        fetchUnities: !this.unities,
        fetchServices: !this.services
      }
    },
    computed: {
      unities () {
        return this.$store.state.settings.unities
      },
      services () {
        return this.$store.state.settings.services
      },
      alerts () {
        return audio.alertsAvailable
      },
      isCredentialChanged () {
        return (
          this.initialClientId !== this.config.clientId ||
          this.initialClientSecret !== this.config.initialClientSecret ||
          this.initialUsername !== this.config.initialUsername ||
          this.initialPassword !== this.config.initialPassword
        )
      }
    },
    methods: {
      showTab (tab) {
        this.tab = tab
      },
      changeServer () {
        this.config.unity = null
        this.fetchUnities = true
        this.fetchServices = false
      },
      loadData () {
        if (this.fetchUnities && this.config.server) {
          this.$store
            .dispatch('fetchUnities')
            .then(() => {}, (error) => {
              this.$swal('Oops!', error, 'error')
            })
          this.fetchUnities = false
        }

        if (this.fetchServices && this.config.unity) {
          this.$store.dispatch('fetchServices', this.config.unity)
          this.fetchServices = false
        }
      },
      loadServices () {
        this.$store.dispatch('fetchServices', this.config.unity)
      },
      save () {
        this.$store.dispatch('saveConfig', this.config)

        const token = (
          !this.$store.getters.isAuthenticated ||
          this.$store.getters.isExpired ||
          this.isCredentialChanged
        )

        let promise

        if (token) {
          promise = this.$store.dispatch('token')
        } else {
          promise = Promise.resolve()
        }

        promise.then(() => {
          this.$swal('Success', 'Configuration Ok', 'success')
          load(this, false)
        }, error => {
          this.$swal('Oops!', error, 'error')
        })
      },
      testAlert () {
        if (this.config.alert) {
          audio.playAlert(this.config.alert)
        }
      },
      testSpeech () {
        const lang = this.config.locale || 'pt-BR'
        let subtitle = 'Guichê 1'
        log('Testing speech lang', lang)

        if (!this.config.speechLocal) {
          subtitle = ''
        }

        speech.speechAll([
          'Senha',
          'Normal',
          'A001',
          subtitle
        ], lang).then(() => {
          log('Testing end')
        }, (e) => {
          log('Testing error', e)
        })
      },
      selectFile () {
        dialog.showOpenDialog({
          properties: ['openFile'],
          filters: [{ name: 'Videos', extensions: ['mp4', 'avi', 'mov'] }]
        }).then(result => {
          if (!result.canceled && result.filePaths.length > 0) {
            this.config.videoURL = result.filePaths[0]
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    beforeMount () {
      load(this, true)
    }
  }
</script>

<style lang="sass">
  aside
    img
      height: 60px
  .columns .column
    padding: 2rem
</style>
