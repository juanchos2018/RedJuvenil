<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="5" class="pa-6">
          <div>
            <title-deco :text="titulo" />
            <div class="puzzle" v-if="isDesktop">
              <div class="piece-big">
                <span />
              </div>
              <div class="piece-small-top">
                <span />
              </div>
              <div class="piece-small-bottom">
                <span />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="pa-6">
          <h4 class="title-default use-text-subtitle">
            {{ subTitulo }}
          </h4>
          <counter />
          <blockquote>
            {{fotterSubTitulo}}
          </blockquote>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../Title/title-style';
</style>

<script>
import Counter from '../Counter'
import TitleDeco from '../Title/WithDecoration'

export default {
  components: {
    Counter,
    TitleDeco
  },
  data(){
    return{
      titulo:'SOBRE',
      subTitulo:'La juventud El proceso organizativo se distribuye en toda la ciudad de Quito, convirtiéndose en un proceso de trabajo constante en defensa de los derechos de la juventud',
      fotterSubTitulo:'algo para aqui abajo',
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
