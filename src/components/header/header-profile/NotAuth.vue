<template>
  <div class="header-profile">
    <button type="button" class="header-profile-btn"> Sing In </button>
  </div>
</template>

<script>
  export default {
    name: 'NotAuth'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .header-profile {
    position: relative;

    &-btn {
      padding: 4px 24px;

      color: #fff;
      font-size: 20px;
      font-weight: 100;

      border: 1px solid #fff;
      border-radius: 25px;
      background: none;

      outline: none;
      user-select: none;

      transition: .1s background, .1s color, .1s border;

      &:hover {
        cursor: pointer;

        color: $color-main;
        border-color: #fff;
        background: #fff;
      }
    }
  }
</style>