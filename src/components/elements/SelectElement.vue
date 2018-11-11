<template>
  <b-field :label="schema.title" :message="schema.description">
    <b-select :value="value" @input="$emit('input', $event)" :placeholder="schema.title">
      <option v-for="item in schema.enum" :value="item" :key="item">
        {{ item }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  name: 'SelectElement',
  props: [
    'schema',
    'value'
  ]
}
</script>
