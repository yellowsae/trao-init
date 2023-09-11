<script lang="ts" setup>

import { AtButton, AtProgress } from 'taro-ui-vue3'

</script>
<template>
  <view>
    <AtButton>按钮文案</AtButton>
    <AtButton size="small" type='primary'>按钮文案</AtButton>
    <AtButton type='secondary'>按钮文案</AtButton>
  </view>
  <view>
    <AtProgress :percent="25" />
    <AtProgress :percent="50" />
    <AtProgress :percent="75" />
  </view>
</template>



<style lang="scss" scoped>
</style>
