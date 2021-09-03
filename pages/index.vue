<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <square-parallax />
        <section id="home">
          <video-banner />
        </section>
        <section
          id="sobre"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <sobre />
        </section>
        <dots-parallax />      
        <section
          id="conocenos"
          class="space-top"
        >
          <conocenos />
        </section>
        <section
          id="experiencias"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <experiencias />
        </section>
        <section
          id="testimonials"
          :class="[isMobile ? 'space-top-short' : 'space-top']"
        >
          <testimonials />
        </section>
        <section id="galeria-fotos">
          <galeria-fotos />
        </section>
        <section class="space-top-short" id="call-to-action">
          <call-action />
        </section>


         <section id="blog" class="space-top-short">
          <blog />
        </section>


        <section class="space-top-short" id="address">
          <map-address />
        </section>
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <main-footer />
      <hidden point="mdDown">
     
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin($spacing1 / 2);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 / 2);
}
.space-top-short {
  margin-top: section-margin($spacing1 / 2);
}
.container-wrap {
  @include breakpoints-up(md) {
    margin-top: $spacing6;
  }
  section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import SquareParallax from '~/components/Parallax/Square'
import VideoBanner from '~/components/VideoBanner'
import Sobre from '~/components/Sobre'
import Conocenos from '~/components/Conocenos'
import Experiencias from '~/components/Experiencias'
import Testimonials from '~/components/Testimonials'
import GaleriaFotos from '~/components/GaleriaFotos'
import CallAction from '~/components/CallAction'
import MapAddress from '~/components/MapAddress'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Blog from '~/components/Blog'
import DotsParallax from '~/components/Parallax/Dots'
import brand from '~/static/text/brand'
//import Galeria from '../components/Galeria/Galeria.vue'

export default {
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    Sobre,
    Conocenos,
    Experiencias,
    Testimonials,
    GaleriaFotos,
    CallAction,
    MapAddress,
    PageNav,
    Hidden,
    Blog,
  
    'main-footer': Footer,
    //Galeria
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  },
  head() {
    return {
      title: brand.agency.name + ' - Home Page'
    }
  }
}
</script>
