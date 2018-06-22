import Vuex from 'Vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 'chenziyun'
        },
        mutations: {
          updatedText (state, text) {
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            /* eslint-disable */
            //全局的getters
            return state.text  + rootState.b.text
          }
        },
        actions: {
          add ({ state, commit, rootState}) {
            //root全局
            commit('updateCount', rootState.count, { root: true})
          }
        }
      },
      b: {
        state: {
          text: 'chenyunqi'
        }
      }
    }
  })
  if (module.hot) {
    //vuex热更新
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
