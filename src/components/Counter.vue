<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <view class="button" @tap="onAdd">ADD</view>
    <view class="button" @tap="decrement">Der</view>
    <AtButton type='primary' @click="onAdd">按asdasd钮文案</AtButton>

  </view>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    const onAdd = () => {
      counter.count++

      console.log('counter.count', counter.count)
      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    }

    const decrement = () => {
      counter.decrement()
    }

    return {
      counter,
      onAdd,
      decrement
    }
  }
}
</script>

<style>
.title {
  font-size: 32px;
}

.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
