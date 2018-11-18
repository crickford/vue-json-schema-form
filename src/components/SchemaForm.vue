<template>
  <form @submit.prevent="submit">
    <slot name="header" :error-messages="activeErrorMessages">
      <b-notification
        v-show="activeErrorMessages.length"
        type="is-danger"
        :closable="false"
        id="error-messages">
        <div v-for="(error, index) in activeErrorMessages" :key="index">
          <div>{{ error }}</div>
        </div>
      </b-notification>
    </slot>
    <template v-for="(property, key) in schema.properties">
      <slot :name="key" :item="{key: key, schema: property, value: items[key], update: updateValue}">
        <component :is="element" :key="key" :schema="property" :value="items[key]" @input="updateValue($event, key)"></component>
      </slot>
    </template>
    <slot name="actions">
      <div class="control">
        <button type="submit" class="button is-primary"><span>Submit</span></button>
      </div>
    </slot>
  </form>
</template>

<script>
import Ajv from 'ajv'
import JSONPointer from 'json-pointer'
import FormElement from '@/components/elements/FormElement'
import { scaffoldFromSchema, pruneEmptyMembers } from '@/utility/json-schema-helpers'

let ajv = new Ajv({allErrors: true, jsonPointers: true, format: 'full'})

export default {
  name: 'SchemaForm',
  components: {
    FormElement
  },
  props: {
    schema: {
      type: Object
    },
    value: {
      type: Object
    },
    element: {
      default() {
        return 'form-element'
      }
    }
  },
  data () {
    return {
      items: (this.value !== undefined) ? this.value : scaffoldFromSchema(this.schema),
      activeErrorMessages: [],
    }
  },
  watch: {
    schema() {
      this.items = scaffoldFromSchema(this.schema)
      ajv = new Ajv({allErrors: true, jsonPointers: true, format: 'full'})
    }
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.activeErrorMessages = []
        this.$emit('input', pruneEmptyMembers(this.items))
        this.$emit('submit')
      }
      else {
        this.buildErrors()
      }
    },
    validate() {
      // validate against schema
      return ajv.validate(this.schema, pruneEmptyMembers(this.items))
    },
    buildErrors () {
      this.activeErrorMessages = ajv.errors.map((error) => {
        if (error.keyword === 'required') {
          const path = error.dataPath.length === 0 ? `/properties/${error.params.missingProperty}` : error.schemaPath.substring(1, error.schemaPath.length - 8) + `properties/${error.params.missingProperty}`
          const property = JSONPointer.get(this.schema, path)
          return property.title + ' is required'
        } else if (error.keyword === 'format') {
          const path = error.schemaPath.substring(1, error.schemaPath.length - 7)
          const property = JSONPointer.get(this.schema, path)
          return `${property.title} is not in the correct format. Eg: ${property.example}`
        } else if (error.keyword === 'pattern') {
          const path = error.schemaPath.substring(1, error.schemaPath.length - 8)
          const property = JSONPointer.get(this.schema, path)
          return `${property.title} is not in the correct format. Eg: ${property.example}`
        }
      })
    },
    updateValue (value, child) {
      this.items[child] = value
    }
  }
}
</script>
