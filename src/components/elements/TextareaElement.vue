<template>
  <b-field :label="schema.title" :message="schema.description">
    <b-input type="textarea" :minlength="schema.minLength" :maxlength="schema.maxLength" :value="value" @input="$emit('input', $event)">
    </b-input>
  </b-field>
</template>

<script>
export default {
  name: 'TextareaElement',
  props: [
    'schema',
    'value'
  ]
}
</script>
