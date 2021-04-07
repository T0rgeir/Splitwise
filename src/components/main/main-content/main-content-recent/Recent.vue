<template>
  <section class="main-content-recent" :class="{ active: isActive }">
    <div class="main-content-recent-topline">
      <span class="main-content-recent-topline-title"> Recent activity </span>
    </div>
  </section>
</template>

<script>
  import { bus } from "@/main";

  export default {
    name: 'MainContentRecent',
    data() {
      return {
        isActive: false
      }
    },
    created() {
      bus.$on('change-content-window', payload => {
        this.isActive = payload.flag;
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-content-recent {
    height: 100%;

    display: none;
    flex-direction: column;

    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;

    &.active {
      display: flex;
    }

    &-topline {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;

      background: #f1f1f1;

      &-title {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
</style>