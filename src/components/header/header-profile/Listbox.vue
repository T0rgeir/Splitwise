<template>
  <nav class="header-profile-combobox"
       :class="{ active: isComboboxActive, animate: isComboboxAnimate, create: display }"
  >
    <div class="header-profile-combobox-item">
      <button class="header-profile-combobox-item-title"> Log out </button>
    </div>
  </nav>
</template>

<script>
  import { bus } from '@/main';

  export default {
    data() {
      return {
        isComboboxActive: false,
        isComboboxAnimate: false,
        display: false
      }
    },
    created() {
      bus.$on('toggle-combobox', () => {
        this.toggleCombobox();
      });
    },
    methods: {
      toggleCombobox() {
        if (!this.isComboboxActive && !this.isComboboxAnimate) {
          this.display = true;
          setTimeout(() => this.isComboboxActive = true, 300);
          setTimeout(() => this.isComboboxAnimate = true, 500);
        } else {
          this.isComboboxAnimate = false;
          setTimeout(() => this.isComboboxActive = false, 300);
          setTimeout(() =>  this.display = false, 500);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .header-profile-combobox {
    width: 180px;
    height: 40px;

    margin: 0 auto;

    position: absolute;
    top: 35px;
    right: 0;
    left: 0;
    bottom: 0;

    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;
    opacity: 0;

    transition: .2s opacity, .2s top;

    &:before {
      width: 10px;
      height: 10px;

      margin: 0 auto;

      position: absolute;
      top: 6px;
      right: 0;
      left: 0;
      bottom: 0;
      content: '';

      background: $color-main;
      border: 6px solid #fff;
      box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);
      opacity: 0;
      z-index: -1;

      transform: rotate(45deg);
      transition: .1s opacity, .1s top ease-in-out;
    }

    &:after {
      width: 100%;
      height: 100%;

      margin: 0 auto;

      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      content: '';

      box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);
      z-index: -2;
    }

    &.active {
      top: 65px;
      opacity: 1;
    }

    &.animate:before {
      opacity: 1;
      top: -8px;
    }

    &.create {
      display: flex;
    }

    &.animate .header-profile-combobox-item:not(:last-child):after {
      width: 85%;
    }

    &-item {
      width: 100%;

      position: relative;

      display: flex;
      justify-content: center;

      transition: .2s background;

      &:hover {
        background: $color-main;

        & .header-profile-combobox-item-title {
          color: #fff;
        }

        &:last-child {
          background: #f54747;
        }
      }

      &:not(:last-child):after {
        width: 0%;
        height: 1px;

        margin: 0 auto;

        position: absolute;

        right: 0;
        left: 0;
        bottom: 0;
        content: '';

        background: rgba(0, 0, 0, 0.3);

        transition: .2s width;
      }

      &-title {
        width: 100%;
        height: 100%;

        padding: 8px 0;

        color: $color-secondary;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;

        border: none;
        background: none;
        outline: none;
        user-select: none;

        transition: .2s color;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>