<template>
  <b-field :label="schema.title" :message="schema.description">
    <b-input :value="value" @input="$emit('input', $event)" :placeholder="schema.example || schema.examples && schema.examples.length && schema.examples[0]">
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
