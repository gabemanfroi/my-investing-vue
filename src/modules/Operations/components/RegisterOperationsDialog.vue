<script lang="ts" setup>
import { ref } from 'vue'
import RegisterOperationForm from '@/modules/Operations/components/RegisterOperationForm.vue'

const formRef = ref()
const submitForm = () => {
  formRef.value?.submit()
}
</script>
<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        color="surface-variant"
        size="large"
        text="Register Operation"
        v-bind="activatorProps"
        variant="flat"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <form>
        <v-card title="Register Operation">
          <v-card-text>
            <RegisterOperationForm ref="formRef" />
          </v-card-text>
          <v-card-actions>
            <v-row class="dialog-row-container" justify="space-between">
              <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
              <v-btn text="Confirm" @click="submitForm"></v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </form>
    </template>
  </v-dialog>
</template>
<style scoped>
.dialog-row-container {
  margin: unset;
}
</style>
