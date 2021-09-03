<template>
  <AuthFrame
    title="Bienvenido"
    subtitle="Inicio de sesion"
  >
    <div>
      <div class="head">
        <title-main
          head="Inicio de Sesion"
          align="left"
          color="secondary"
        />
     
      </div>   
     
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              label="Correo"
              :rules="emailRules"
              color="secondary"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="password"
              label="Clave"
              :rules="requiredRules"
              color="secondary"
              type="password"
              class="input"
              name="email"
              filled
              required
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox
              v-model="checkbox"
              label="recordar"
              color="secondary"
            />
          </div>
          <v-btn
            small
            class="button-link"
            text
            href="#"
          >
          Olivde mi contraseña
          </v-btn>
        </div>
        <div class="btn-area mt-10">
          <v-btn
            large
            block
            color="secondary"
            @click="handleSubmit"
          >
            Ingresar
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import routerLink from '~/static/text/link'
import Title from '../Title/Title'

import AuthFrame from './AuthFrame'

export default {
  components: {
  
    'title-main': Title,
    AuthFrame
  },
  data() {
    return {
      routerLink: routerLink,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
