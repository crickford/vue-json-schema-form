# Getting Started

## Installation

Depends on [Vue](https://vuejs.org), [Ajv](https://ajv.js.org) for validation, and  [Buefy](https://github.com/buefy/buefy) for the default form elements.
```
npm install vue-json-schema-form
```

## Usage

#### Webpack
Global registration:
```js
import Vue from 'vue'
import VueJsonSchemaForm from 'vue-json-schema-form'

Vue.use(VueJsonSchemaForm)
```
Or in your components:

```js
import {SchemaForm} from 'vue-json-schema-form'

export default {
  name: "MyComponent",
  components: {
    SchemaForm
  },
  ...
}
```

#### Browser / CDN

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/vue-json-schema-form/dist/vue-json-schema-form.css">

<!-- JavaScript -->
<script src="https://unpkg.com/vue-json-schema-form"></script>
```

```js
Vue.use(VueJsonSchemaForm.default)
```
