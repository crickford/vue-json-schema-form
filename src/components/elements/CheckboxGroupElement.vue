<template>
  <div class="field">
    <label class="label" v-if="schema.title">{{ schema.title }}</label>
    <div v-for="(item, index) in schema.items.anyOf" class="field checkbox-field" :key="index">
      <b-checkbox :value="items.indexOf(item.enum[0]) !== -1" @input="updateValue($event, index)">
        <span class="checkbox-title">{{ item.title }}</span>
        <p class="help checkbox-desc" v-if="item.description">{{ item.description }}</p>
      </b-checkbox>
    </div>
  </div>
</template>

<script>
import { scaffoldFromSchema } from '@/utility/json-schema-helpers'
export default {
  name: 'CheckboxGroupElement',
  props: [
    'schema',
    'value'
  ],
  data() {
    return {
      items: (this.value !== undefined) ? this.value : scaffoldFromSchema(this.schema)
    }
  },
  methods: {
    updateValue(value, index) {
      const location = this.items.indexOf(this.schema.items.anyOf[index].enum[0])
      if (value && location === -1) {
        this.items.push(this.schema.items.anyOf[index].enum[0])
      }
      else if (!value && location !== -1) {
          this.items.splice(location, 1)
      }
      this.$emit('input', this.items)
    }
  }
}
</script>

<style scoped>
.checkbox-field {
  padding-left: 15px;
}

.checkbox-title,
.checkbox-desc {
  display: block;
  padding-left: 10px;
}
</style>
