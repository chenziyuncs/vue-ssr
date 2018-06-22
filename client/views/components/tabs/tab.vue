<script>
export default {
  name: 'Tab',
  props: {
    index: {
      required: true,
      type: [String, Number]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  // inject: ['value'],
  computed: {
    actived () {
      return this.$parent.value === this.index
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const className = {
      tab: true,
      actived: this.actived
    }
    return (
      <li class={className} on-click={this.handleClick}>
        {tab}
      </li>
    )
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.actived
    border-bottom 2px solid blue
  &.last-child
    margin-right 0
</style>

