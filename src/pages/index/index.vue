<template>
  <view class="index">
    <Counter />
  </view>
  <view class="viewBox">

    <nut-button type='primary'>按钮文案</nut-button>
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>

  </view>
</template>

<script >
import './index.scss'
import Counter from '../../components/Counter.vue'


export default {
  components: {
    Counter
  }
}
</script>


<style lang="scss" scoped>
.viewBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
