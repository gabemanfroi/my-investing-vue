import { z } from 'zod'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

export const useLoginForm = (submitCallback: (values: any) => void) => {
  const schema = toTypedSchema(
    z.object({
      email: z.string().email().min(1, 'Email is required'),
      password: z.string().min(1, 'Password is required')
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: schema
  })

  const email = useField<string>('email')
  const password = useField<string>('password')

  const submit = handleSubmit(submitCallback)

  return { email, password, submit }
}
