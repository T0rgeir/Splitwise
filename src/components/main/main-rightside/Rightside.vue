<template>
  <aside class="main-aside right">
    <article class="main-aside-text">
      <span class="main-aside-text-title"> Your balance: </span>
      <span class="main-aside-text-owe"> $ 69.21 </span>
    </article>
  </aside>
</template>

<script>
  export default {
    name: 'Rightside'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .main-aside {
    width: 15%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &-title {
        color: $color-secondary;
        font-size: 20px;
        font-weight: 500;
        font-weight: 500;
      }

      &-owe {
        color: $color-main;
        font-size: 24px;
        font-weight: 400;
        line-height: .8;
      }
    }
  }
</style>