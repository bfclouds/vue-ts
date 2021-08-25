<template>
  <div>项目启动起来了，开始你的表演吧，骚年！！</div>
  <div>{{ baseStore.count }}</div>
  <div>{{ baseStore.doubleCount }}</div>
</template>

<script lang="ts" setup>
import { useBaseStore } from '/@/store/modules/moduleA'

const baseStore = useBaseStore()
</script>