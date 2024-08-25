<script lang="ts" setup>
import { ref } from 'vue'
import { useLoginMutation } from '@/modules/Shared/composables/mutations/useLoginMutation'
import { useRouter } from 'vue-router'
import { tokenUtil } from '@/modules/Shared/utils/tokenUtil'

const { login } = useLoginMutation()

const email = ref('')
const password = ref('')

const router = useRouter()

const handleLogin = () => {
  login({
    email: email.value,
    password: password.value
  }).then((response) => {
    if (response?.data?.login.token) {
      console.log(response.data.login.token)
      tokenUtil.setToken(response.data.login.token)
      router.push('/dashboard')
    }
  })
}
</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card>
          <v-card-title class="justify-center">Please Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
                type="password"
              ></v-text-field>
              <v-btn block color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
