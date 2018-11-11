<template>
  <div class="field">
    <div v-for="(item, index) in schema.anyOf" class="field radio-field" :key="index">
      <b-radio :value="value" @input="$emit('input', $event)" :native-value="item.enum[0]">
        <span class="radio-title">{{ item.title }}</span>
      </b-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButtonElement',
  props: [
    'schema',
    'value'
  ]
}
</script>

<style scoped>
.radio-field {
  padding-left: 15px;
}
.radio-title {
  display: block;
  padding-left: 10px;
}
</style>
