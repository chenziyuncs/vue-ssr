export default {
  /* eslint-disable */
  //异步操作放在actions里，mutations存放同步操作
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  }
}
