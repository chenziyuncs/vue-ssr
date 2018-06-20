<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
    <p>{{textPlus}}</p>
    <!-- <todo></todo> -->
    <router-view />
    <button @click="notify">click notify</button>
    <!-- <notification content="test notify"></notification> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'Vuex'
export default {
  metaInfo: {
    title: 'Lukas\'s Todo App '
  },
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
    // this.$notify({
    //   content: 'test $notify',
    //   btn: 'close'
    // })
    // console.log(this.$store)
    // // let i = 1
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this.updatedText('123')
    // this['a/updatedText']('Lukas')
    // this['a/add']()
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updatedText']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count,
      textA: (state) => state.a.text,
      TextC: (state) => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapGetters(['fullName', 'a/textPlus'])
    ...mapGetters({
      'fullName': 'fullName',
      'textPlus': 'a/textPlus'
    })
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


