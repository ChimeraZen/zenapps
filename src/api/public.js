/* Public API */
export const inArray_r = (needle, haystack) => {
  for(let i in haystack) {
    const stack = haystack[i]
    
    if(needle === stack) {
      return true
    } else if(Array.isArray(stack)) {
      return inArray_r(needle, stack)
    }
  }
}

export const getValues_r = (haystack) => {
  for(let i in haystack) {
    const stack = haystack[i]

    if(Array.isArray(stack) || typeof stack === "object") {
      return getValues_r(stack)
    } else {
      return stack
    }
  }
}