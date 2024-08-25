// composables/useAssetForm.ts
import { useField, useForm } from 'vee-validate'
import type { Asset } from '@/gql/graphql'

export function useRegisterOperationForm(submitCallback: (values: any) => void) {
  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      asset(value: string) {
        if (!value) {
          return 'Asset is required'
        }
        return true
      },
      quantity(value: string | number) {
        if (!value) {
          return 'Quantity is required'
        }
        if (Number(value) <= 0) {
          return 'Quantity must be greater than 0'
        }
        return true
      },
      pricePerShare(value: string | number) {
        if (!value) {
          return 'Price per share is required'
        }
        if (Number(value) <= 0) {
          return 'Price per share must be greater than 0'
        }
        return true
      },
      type(value: string) {
        if (!value) {
          return 'Type is required'
        }
        return true
      }
    }
  })

  const quantity = useField<number>('quantity')
  const pricePerShare = useField<number>('pricePerShare')
  const asset = useField<Asset>('asset')
  const type = useField<'BUY' | 'SELL'>('type')

  const submit = handleSubmit(submitCallback)

  return { quantity, pricePerShare, asset, submit, type, handleReset }
}
