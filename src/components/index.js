import Buefy from 'buefy'
import SchemaForm from '@/components/SchemaForm'

const VueJsonSchemaForm = {
  install(Vue) {
    Vue.use(Buefy)
    Vue.component('SchemaForm', SchemaForm)
  }
}

export default VueJsonSchemaForm

export { SchemaForm }
