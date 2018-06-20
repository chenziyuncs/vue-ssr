import Vue from 'vue'
import Component from './func-notification'
/* eslint-disable */
//js创建一个vue组件
const NotificationConstructor = Vue.extend(Component)
//记录生成的数量
const instances = []
//生成组件id
let seed = 1

const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instances.splice(index, 1)

  if (len <= 1) return
  const removeHeight = instance.vm.height
  for (let i = index;i < len - 1;i++) {
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removeHeight -16
  }
}

const notify = (options) => {
  //如果是服务端不进行操作
  if (Vue.prototype.$isServer) return

  const { autoClose, ...rest } = options

  const instance = new NotificationConstructor({
    propsData: { ...rest },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}`
  instance.id = id
  //生成$el对象，节点，还未插入dom中
  instance.vm = instance.$mount()
  //插入body中
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  //计算高度
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    //销毁vm中事件
    instance.vm.$destroy()
  })
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })
  return instance.vm
}

export default notify
