<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useSignUpForm } from '@/modules/Shared/composables/forms/useSignUpForm'
import { ROUTES } from '@/modules/Shared/core/constants/routes'

const router = useRouter()

const { submit, email, lastName, firstName, password } = useSignUpForm((values) => {})

const handleLogin = () => {
  router.push(ROUTES.LOGIN.PATH)
}
</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="5" md="6" sm="8">
        <v-card>
          <v-card-title class="justify-center text-uppercase">Sign Up</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
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
              <v-text-field
                v-model="firstName.value.value"
                :error-messages="firstName.errorMessage.value"
                label="First Name"
              />
              <v-text-field
                v-model="lastName.value.value"
                :error-messages="lastName.errorMessage.value"
                label="Last Name"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row class="ma-0" justify="space-between">
              <v-btn color="primary" variant="outlined" @click="handleLogin">Login</v-btn>
              <v-btn color="primary" variant="flat" @click="submit">Sign Up</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
