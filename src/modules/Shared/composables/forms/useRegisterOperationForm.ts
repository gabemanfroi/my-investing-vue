import { useField, useForm } from 'vee-validate'
import type { Asset } from '@/gql/graphql'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export function useRegisterOperationForm(submitCallback: (values: any) => void) {
  const schema = toTypedSchema(
    z.object({
      asset: z.object({
        id: z.string(),
        symbol: z.string()
      }),
      quantity: z.string().min(1, 'Quantity must be greater than 0'),
      pricePerShare: z.string().min(1, 'Price per share must be greater than 0'),
      type: z.string().min(1, 'Asset is required')
    })
  )

  const { handleSubmit, handleReset } = useForm({
    validationSchema: schema
  })

  const quantity = useField<number>('quantity')
  const pricePerShare = useField<number>('pricePerShare')
  const asset = useField<Asset>('asset')
  const type = useField<'BUY' | 'SELL'>('type')

  const submit = handleSubmit(submitCallback)

  return { quantity, pricePerShare, asset, submit, type, handleReset }
}
