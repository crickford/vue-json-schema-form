<template>
  <div class="field checkbox-field">
    <b-checkbox :value="value" @input="$emit('input', $event)">
      <span class="checkbox-title">{{ schema.title }}</span>
      <p class="help checkbox-desc" v-if="schema.description">{{ schema.description }}</p>
    </b-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CheckboxElement',
  props: [
    'schema',
    'value'
  ]
}
</script>

<style scoped>
.checkbox-title,
.checkbox-desc {
  display: block;
  padding-left: 10px;
}
</style>
