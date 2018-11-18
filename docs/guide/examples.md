# Examples

## Simple
The simplest example: rendering a form from a basic schema

```vue
<template>
  <schema-form :schema="schema" v-model="formData" @submit="handleSubmit()" />
</template>
<script>
import {SchemaForm} from 'vue-json-schema-form'

export default {
  name: "SchemaFormDemo",
  components: {
    SchemaForm
  },
  data() {
    return {
      schema: {
        // json schema
      },
      formData: {}
    };
  },
  methods: {
    handleSubmit() {
      // do things with the validated submission (this.formData)
    }
  }
}
</script>
```
[Online Demo](https://codepen.io/crickford/pen/vQmKqY)

## Custom Components

Using slots, the form element corresponding to each property of the schema can be overridden with a custom component.
For example, given the following schema:

```json
{
  "$id": "https://example.com/review.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Review",
  "type": "object",
  "properties": {
    "review": {
      "type": "string",
      "title": "What did you think of the event?",
      "example": "Write your review",
      "description": "(Optional) Please let us know how we did!",
      "widget": "textarea"
    },
    "rating": {
      "type": "number",
      "title": "Rating",
      "minimum": 0,
      "maximum": 5
    }
  },
  "required": [
    "rating"
  ]
}
```

Two fields will be rendered: a textarea input and an HTML number input.
Lets replace the number input with [vue-star-rating](https://github.com/craigh411/vue-star-rating)

```vue
<template>
  <schema-form :schema="schema" v-model="formData">
    <template slot="rating" slot-scope="{ item: { key, value, update, schema } }">
      <label>{{ schema.title }}</label>
      <star-rating :value="value" @rating-selected="update($event, key)" :show-rating="false" />
    </template>
  </schema-form>
</template>
```
[Online Demo](https://codepen.io/crickford/pen/ZmJqwd)
