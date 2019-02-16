<template>
  <fieldset class="field">
    <legend v-if="schema.title">{{ schema.title }}</legend>
    <div class="content" v-if="schema.description">{{ schema.description }}</div>
    <form-element v-for="(child, key) in schema.properties" :schema="child" :value="internalValue[key]" :key="key" @input="updateValue($event, key)"></form-element>
  </fieldset>
</template>

<script>
// import FormElement from '@/components/elements/FormElement'
export default {
  name: 'FormElementWrapper',
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
      internalValue: (this.value !== undefined) ? this.value : {}
    }
  },
  watch: {
    value(val) {
      this.internalValue = val
    }
  },
  methods: {
    updateValue (value, child) {
      this.internalValue[child] = value
      this.$emit('input', this.internalValue)
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
