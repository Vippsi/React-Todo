import * as yup from 'yup'

const formSchema = yup.object().shape({
    task: yup.string().trim().required()
})
export default formSchema