<template>
  <nav class="main-aside-menu">
    <a class="main-aside-menu-item"> Dashboard </a>
    <a class="main-aside-menu-item"> Recent activity </a>
    <a class="main-aside-menu-item"> All expanses </a>
  </nav>
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-aside-menu {
    display: flex;
    flex-direction: column;

    &-item {
      padding: 4px 34px;

      color: $color-secondary;
      font-size: 18px;
      font-weight: 400;

      background-position: 10px center;
      background-size: 14px;
      background-repeat: no-repeat;

      user-select: none;

      transition: .2s color, .2s background;

      &:hover {
        cursor: pointer;
        color: $color-hover;
        background-color: rgba($color-secondary, 0.2);
      }

      &:nth-child(1) {
        background-image: url('../../../../assets/images/dashboard.svg');

        &:hover {
          background-image: url('../../../../assets/images/dashboard-hover.svg');
        }
      }

      &:nth-child(2) {
        background-image: url('../../../../assets/images/flag.svg');

        &:hover {
          background-image: url('../../../../assets/images/flag-hover.svg');
        }
      }

      &:nth-child(3) {
        background-image: url('../../../../assets/images/menu.svg');

        &:hover {
          background-image: url('../../../../assets/images/menu-hover.svg');
        }
      }

      &.active {
        color: $color-main;
        box-shadow: -4px 0 0 0 $color-main;

        &:nth-child(1) {
          background-image: url('../../../../assets/images/dashboard-active.svg');

          &:hover {
            background-image: url('../../../../assets/images/dashboard-active.svg');
          }
        }

        &:nth-child(2) {
          background-image: url('../../../../assets/images/flag-active.svg');

          &:hover {
            background-image: url('../../../../assets/images/flag-active.svg');
          }
        }

        &:nth-child(3) {
          background-image: url('../../../../assets/images/menu-active.svg');

          &:hover {
            background-image: url('../../../../assets/images/menu-active.svg');
          }
        }
      }
    }
  }
</style>