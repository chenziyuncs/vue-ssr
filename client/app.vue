<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <todo></todo> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'Vuex'
export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


