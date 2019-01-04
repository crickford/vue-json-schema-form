<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Form Demo
          </h1>
          <h2 class="subtitle">
            Form will be automatically rebuilt when the schema changes
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-field
              :type="schemaIsValid ? '' : 'is-danger'"
              :message="schemaIsValid ? 'Valid Schema' : 'Invalid Schema'">
              <b-input v-autosize type="textarea" v-model="plainSchema"></b-input>
            </b-field>
          </div>
          <div class="column">
            <schema-form :schema="schema" v-model="obj" @submit="handleSubmit()" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Ajv from 'ajv'
import debounce from 'lodash.debounce'
import SchemaForm from '@/components/SchemaForm'
import draft07 from '@/schema/schema.json'

const ajv = new Ajv()

export default {
  name: 'Demo',
  components: {
    SchemaForm
  },
  computed: {
    plainSchema: {
      get() {
        return JSON.stringify(this.schema, null, 2)
      },
      set: debounce(function(input) {
        try {
          const schema = JSON.parse(input)
          this.schemaIsValid = ajv.validate(draft07, schema)
          this.schema = schema
        } catch (e) {
          this.schemaIsValid = false
        }
      }, 500)
    }
  },
  data () {
    return {
      schema: {
        "$id": "https://example.com/person.schema.json",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Person",
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First Name",
            "description": "The person's first name.",
            "example": "John"
          },
          "lastName": {
            "type": "string",
            "title": "Last Name",
            "description": "The person's last name.",
            "example": "Doe"
          },
          "nickNames": {
            "type": "array",
            "title": "Nicknames",
            "items": {
              "type": "string",
              "example": "j-dough"
            }
          },
          "address": {
            "type": "object",
            "title": "Address",
            "properties": {
              "lineOne": {
                "type": "string",
                "title": "Address line 1",
                "example": "Address line 1"
              },
              "lineTwo": {
                "type": "string",
                "title": "Address line 2",
                "example": "Address line 2"
              },
              "postalCode": {
                "type": "string",
                "title": "Postal code",
                "example": "Postal code"
              }
            }
          },
          "age": {
            "title": "Age",
            "description": "Age in years which must be equal to or greater than zero.",
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "firstName"
        ]
      },
      schemaIsValid: true,
      obj: {}
    }
  },
  methods: {
    handleSubmit() {
      alert(JSON.stringify(this.obj, null, 2))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
