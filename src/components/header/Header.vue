<template>
  <header class="header">
    <div class="header-inner">

      <!-- Header logo -->
      <div class="header-logo">
        <img src="../../assets/images/logo.svg" alt="logo" class="header-logo-photo" />
      </div>

      <!-- Header profile (singin) -->
      <NotAuth v-if="!isUserSingIn" />

      <!-- Header profile (auth) -->
      <Auth v-else />

    </div>
  </header>
</template>

<script>
  import NotAuth from '@/components/header/header-profile/NotAuth';
  import Auth from '@/components/header/header-profile/Auth';

  export default {
    name: 'Header',
    components: {
      NotAuth,
      Auth
    },
    data() {
      return {
        isUserSingIn: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/main';

  .header {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;

    background: $color-main;
    z-index: 1;

    &-inner {
      width: 1280px;

      padding: 12px 0;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-logo {
      display: flex;
      justify-content: center;
      align-items: center;

      user-select: none;

      &-photo {
        width: 140px;
      }
    }
  }
</style>