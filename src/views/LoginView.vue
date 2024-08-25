<script lang="ts" setup>
import { useLoginMutation } from '@/modules/Shared/composables/mutations/useLoginMutation'
import { useRouter } from 'vue-router'
import { useLoginForm } from '@/modules/Shared/composables/forms/useLoginForm'
import { ROUTES } from '@/modules/Shared/core/constants/routes'

const { login } = useLoginMutation()

const { email, password, submit } = useLoginForm((values) => {
  login({
    email: values.email,
    password: values.password
  })
})

const router = useRouter()

const handleRegister = () => {
  router.push(ROUTES.SIGN_UP.PATH)
}
</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="5" md="6" sm="8">
        <v-card>
          <v-card-title class="justify-center text-uppercase">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="Email"
              />
              <v-text-field
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                label="Password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row class="ma-0" justify="space-between">
              <v-btn color="primary" variant="outlined" @click="handleRegister">Sign Up</v-btn>
              <v-btn color="primary" variant="flat" @click="submit">Login</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
