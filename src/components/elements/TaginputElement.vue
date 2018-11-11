<template>
  <b-field :label="schema.title">
    <b-taginput
      :value="value"
      icon="account-multiple"
      placeholder="Add item"
      @input="$emit('input', $event)">
    </b-taginput>
  </b-field>
</template>

<script>
export default {
  name: 'TaginputElement',
  props: [
    'schema',
    'value'
  ]
}
</script>
