export default {
  fullName (state) {
    // return `${state.firstName} ${state.lastName}`
    return state.firstName + ' ' + state.lastName
  },
  myName (state) {
    return state.firstName + 'Lukas123'
  }
}
