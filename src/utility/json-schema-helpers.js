// Recursively purge empty values
const prune = function (input) {
  if (typeof (input) === 'object') {
    if (input instanceof Date) {
      // date handling
      return input.toISOString().slice(0, 10)
    } else if (!Array.isArray(input)) {
      let output = {}
      for (const member in input) {
        const value = prune(input[member])
        if (value !== undefined) {
          output[member] = value
        }
      }
      if (Object.keys(output).length > 0) {
        return output
      }
    } else {
      let output = []
      for (const member of input) {
        const value = prune(member)
        if (value !== undefined) {
          output.push(value)
        }
      }
      if (output.length > 0) {
        return output
      }
    }
  } else if (input !== undefined && input !== '') {
    return input
  }
}

// Recursively scaffold a model given a schema
const scaffold = function (input, f) {
  if (input.type === 'object') {
    let output = {}
    for (const item in input.properties) {
      output[item] = scaffold(input.properties[item], f)
    }
    return output
  } else if (input.type === 'array') {
    return [scaffold(input.items, f)]
  } else {
    return f === undefined ? f : f(input)
  }
}

// Recursively combine two objects
const merge = function (first, second) {
  if (typeof (first) === 'object' && typeof (second) === 'object') {
    if (!Array.isArray(first)) {
      let output = {}
      for (const member in first) {
        output[member] = merge(first[member], second[member])
      }
      return output
    } else {
      // return second array only if it is not empty and its first member has non-empty values
      return Array.isArray(second) && second.length > 0 && prune(second[0]) !== undefined ? second : first
    }
  } else {
    return (second !== undefined) ? second : first
  }
}

function scaffoldFromSchema(schema, func) {
  return scaffold(schema, func)
}

function deepMerge(obj1, obj2) {
  return merge(obj1, obj2)
}

function pruneEmptyMembers(obj) {
  const pruned = prune(obj)
  return pruned === undefined ? {} : pruned
}

export { scaffoldFromSchema, deepMerge, pruneEmptyMembers }
