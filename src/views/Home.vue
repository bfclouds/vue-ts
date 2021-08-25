<template>
  <h1 class="text">项目启动起来了，开始你的表演吧，骚年！！</h1>
  <!-- <div>{{ baseStore.count }}</div>
  <div>{{ baseStore.doubleCount }}</div> -->
</template>

<script lang="ts" setup>
import { useBaseStore } from '/@/store/modules/moduleA'

const baseStore = useBaseStore()
</script>

<style scoped>
  .text {
    background-image: linear-gradient(90deg, #f66, #f90);
    -webkit-background-clip: text;
    background-clip: text;
    line-height: 60px;
    font-size: 30px;
    color: transparent;
    animation: hue 5s linear infinite;
    text-align: center;
  }
  @keyframes hue {
    from {
      filter: hue-rotate(0);
    }
    to {
      filter: hue-rotate(-1turn);
    }
  }
</style>