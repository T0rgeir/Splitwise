<template>
  <div class="header-profile">

    <!-- Header profile title -->
    <span class="header-profile-text"> Welcome, </span>
    <button class="header-profile-naming"
            :disabled="isNamingBtnDisabled"
            @click="toggleCombobox"
    >
      Volodymyr Koval
    </button>

    <!-- Header profile listbox -->
    <Listbox />

  </div>
</template>

<script>
  import Listbox from '@/components/header/header-profile/Listbox';
  import { bus } from '@/main';

  export default {
    name: 'Auth',
    components: {
      Listbox
    },
    data() {
      return {
        isNamingBtnDisabled: false
      }
    },
    methods: {
      toggleCombobox() {
        this.isNamingBtnDisabled = true;
        bus.$emit('toggle-combobox');
        setTimeout(() => this.isNamingBtnDisabled = false, 900);
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .header-profile {
    position: relative;

    &-text, &-naming {
      color: #fff;
      font-size: 18px;
      user-select: none;
    }

    &-naming {
      padding: 0;

      position: relative;

      font-weight: 700;

      border: none;
      background: none;
      outline: none;

      transition: .2s border;

      &:before {
        width: 0%;
        height: 1px;

        margin: 0 auto;

        position: absolute;
        right: 0;
        left: 0;
        bottom: -2px;
        content: '';

        background: #fff;

        transition: .2s width;
      }

      &:hover {
        cursor: pointer;

        &:before {
          width: 100%;
        }
      }
    }
  }
</style>