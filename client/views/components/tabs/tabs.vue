<script>
export default {
  name: 'Tabs',
  // provide () {
  //   return {
  //     value: this.value
  //   }
  // },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      panes: []
    }
  },
  render () {
    const contents = this.panes.map(pane => {
      return pane.actived ? pane.$slots.default : null
    })
    return (
      <div class='tabs'>
        <ul class='tabs-header'>
          {this.$slots.default}
        </ul>
        <div class="tab-content">
          {contents}
        </div>
      </div>
    )
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>
