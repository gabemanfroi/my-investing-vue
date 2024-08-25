import { z } from 'zod'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

export const useSignUpForm = (submitCallback: (values: any) => void) => {
  const schema = toTypedSchema(
    z.object({
      email: z.string().email().min(1, 'Email is required'),
      password: z.string().min(1, 'Password is required'),
      firstName: z.string().min(3, 'First Name is required'),
      lastName: z.string().min(3, 'Last Name is required')
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: schema
  })

  const email = useField<string>('email')
  const password = useField<string>('password')
  const firstName = useField<string>('firstName')
  const lastName = useField<string>('lastName')

  const submit = handleSubmit(submitCallback)

  return { email, password, firstName, lastName, submit }
}
