# vue-json-schema-form
Generate forms from your JSON schemas! :sparkles:

## Background
[JSON Schema](https://json-schema.org/) makes it possible to define form validation rules in an environment agnostic way by providing a generic standard for describing the expected properties of a JS object. This library accepts a JSON schema and generates an appropriate form to collect and validate data which is described by the schema.

_TLDR; write validation rules once, use everywhere (client & server)_

For more background on this concept, see [this article](https://blog.apisyouwonthate.com/the-many-amazing-uses-of-json-schema-client-side-validation-c78a11fbde45) (inspiration of this library)

## Install

Depends on [Vue](https://vuejs.org), [Ajv](https://ajv.js.org), and for the default form elements, [Buefy](https://github.com/buefy/buefy)
### NPM
```
npm install vue-json-schema-form
```

## Usage

### Webpack
```
import Vue from 'vue'
import VueJsonSchemaForm from 'vue-json-schema-form'

Vue.use(VueJsonSchemaForm)
```

### Browser / CDN

```
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/vue-json-schema-form/dist/vue-json-schema-form.css">

<!-- JavaScript -->
<script src="https://unpkg.com/vue-json-schema-form"></script>
```

```
Vue.use(VueJsonSchemaForm)
```
## Demo
[Live Demo (Codepen)](https://codepen.io/crickford/pen/vQmKqY)

### Run local demo
```
npm install
```
```
npm run serve
```
