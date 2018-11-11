<template>
  <div class="field checkbox-field">
    <b-checkbox :value="value" @input="$emit('input', $event)">
      <span class="checkbox-title">{{ schema.title }}</span>
      <div class="content checkbox-desc" v-if="schema.description">
        <vue-simple-markdown :source="schema.description"></vue-simple-markdown>
      </div>
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

<style>
.checkbox-field {
  padding-left: 15px;
}
.checkbox-title {
  font-weight: bold;
}

.checkbox-title,
.checkbox-desc {
  display: block;
  padding-left: 10px;
}
</style>
