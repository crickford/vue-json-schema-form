<template>
  <b-field :label="schema.title" :message="schema.description">
    <b-input :value="value" @input="$emit('input', $event)" :placeholder="schema.example">
    </b-input>
  </b-field>
</template>

<script>
export default {
  name: 'TextElement',
  props: [
    'schema',
    'value'
  ]
}
</script>
