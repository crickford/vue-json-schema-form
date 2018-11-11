<template>
  <form @submit.prevent="$emit('submit')">
    <slot name="header" />
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
import FormElement from '@/components/elements/FormElement'
import { scaffoldFromSchema } from '@/utility/json-schema-helpers'

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
      items: (this.value !== undefined) ? this.value : scaffoldFromSchema(this.schema)
    }
  },
  methods: {
    updateValue (value, child) {
      this.items[child] = value
      this.$emit('input', this.items)
    }
  }
}
</script>
