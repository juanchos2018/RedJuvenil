<template>
  <fragment>
      <svg
        fill="cccccc"
        width="845px"
        height="1099px"
        class="background base"
      >
        <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
      </svg>
      <svg
        fill="cccccc"
        width="845px"
        height="1099px"
        class="background front"
      >
        <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
      </svg>
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="root">
          <v-card class="paper">
            <v-row align="center" no-gutters>
              <v-col cols="12" md="9">
                <h4 class="display-1 pb-2">
                  {{ tituloBarra }}
                </h4>
                <p>
                  {{subtituloBara }}
                </p>
              </v-col>
              <v-col cols="12" md="3">
                <v-row align="center">
                  <v-btn
                    large
                    outlined
                    color="secondary"
                    href="/contact"
                    class="button"
                  >
                    {{ boton }}
                    <v-icon class="right-icon">mdi-send</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </fragment>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
export default {
  data(){
    return{
        boton:'Mensaje',
        tituloBarra:'Quieres enviarnos un mensaje',
        subtituloBara:'estaremos a tento a tus mensaje',
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
