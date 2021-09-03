<template>
  <div>
    <decoration />
    <contacto />
  </div>
</template>

<script>
import Contact from '~/components/Forms/Contact'
import Contacto from '~/components/Forms/Contacto'

import Decoration from '~/components/Forms/Decoration'
import brand from '~/static/text/brand'

export default {
  components: {
    Contact,
    Contacto,
    Decoration
  },
  head() {
    return {
      title: brand.agency.name + ' - Contact'
    }
  }
}
</script>
