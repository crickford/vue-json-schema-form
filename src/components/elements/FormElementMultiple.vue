<template>
  <fieldset class="field">
    <legend v-if="schema.title">{{ schema.title }}</legend>
    <template v-for="(item, index) in items">
      <form-element :schema="schema.items" :value="item" :key="index" @input="updateValue($event, index)"></form-element>
      <button type="button" v-if="items.length > 0" @click="items.splice(index, 1)" :key="`remove-${index}`">Remove</button>
    </template>
    <button type="button" @click="addItem()">Add Item</button>
  </fieldset>
</template>

<script>
import { scaffoldFromSchema } from '@/utility/json-schema-helpers'
export default {
  name: 'FormElementMultiple',
  components: {
    // load at runtime to avoid circular dependency https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
    FormElement: () => import('@/components/elements/FormElement')
  },
  props: [
    'schema',
    'value'
  ],
  data () {
    return {
      items: (this.value !== undefined) ? this.value : scaffoldFromSchema(this.schema)
    }
  },
  methods: {
    addItem() {
      this.items.push(scaffoldFromSchema(this.schema)[0])
    },
    updateValue (value, index) {
      this.items.splice(index, 1, value)
      this.$emit('input', this.items)
    }
  }
}
</script>

<style scoped>
  fieldset {
    padding: 10px;
    border: none;
    border-left: 4px solid #ddd;
  }
  fieldset > legend {
    font-weight: bold;
  }
</style>
