<script lang="ts" setup>
import { useListAssetsQuery } from '@/modules/Shared/composables/queries/useListAssetsQuery'
import { useRegisterOperationMutation } from '@/modules/Shared/composables/mutations/useRegisterOperationMutation'
import { useRegisterOperationForm } from '@/modules/Shared/composables/forms/useRegisterOperationForm'

const { assets } = useListAssetsQuery()
const { registerOperation } = useRegisterOperationMutation()

const { quantity, pricePerShare, asset, submit, type, handleReset } = useRegisterOperationForm(
  (values) => {
    registerOperation({
      operation: {
        assetId: values.asset.id,
        quantity: Number(values.quantity),
        price: Number(values.pricePerShare),
        type: values.type
      },
      portfolioId: '18'
    }).then((response) => {
      if (response?.data?.registerOperation) {
        handleReset()
      }
    })
  }
)

defineExpose({
  submit
})
</script>

<template>
  <v-form @submit.prevent="submit">
    <v-row>
      <v-col>
        <v-combobox
          v-model="asset.value.value"
          :error-messages="asset.errorMessage.value"
          :items="assets"
          item-title="symbol"
          item-value="id"
          label="Asset"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="quantity.value.value"
          :error-messages="quantity.errorMessage.value"
          label="Quantity"
          type="number"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="pricePerShare.value.value"
          :error-messages="pricePerShare.errorMessage.value"
          label="Price Per Share"
          type="number"
        />
      </v-col>
      <v-col>
        <v-select
          v-model="type.value.value"
          :error-messages="type.errorMessage.value"
          :items="['BUY', 'SELL']"
          label="Operation Type"
        />
      </v-col>
    </v-row>
  </v-form>
</template>
