# vue-json-schema-form
Generate forms from your JSON schemas! :sparkles:

## Background
[JSON Schema](https://json-schema.org/) makes it possible to define form validation rules in an environment agnostic way by providing a generic standard for describing the expected properties of a JS object. This library accepts a JSON schema and generates an appropriate form to collect and validate data which is described by the schema.

_TLDR; write validation rules once, use everywhere (client & server)_

For more background on this concept, see [this article](https://blog.apisyouwonthate.com/the-many-amazing-uses-of-json-schema-client-side-validation-c78a11fbde45) (inspiration of this library)

## Install

Depends on [Vue](https://vuejs.org), [Ajv](https://ajv.js.org) for validation, and  [Buefy](https://github.com/buefy/buefy) for the default form elements.
```
npm install vue-json-schema-form
```

## Documentation

[Online Documentation](https://crickford.github.io/vue-json-schema-form/)

## Demo
Online demos:
- [Basic](https://codepen.io/crickford/pen/vQmKqY)
- [Custom Component (slots)](https://codepen.io/crickford/pen/ZmJqwd/)

### Run local demo

Clone this repository, and run the following commands
```
npm install
```
```
npm run serve
```
