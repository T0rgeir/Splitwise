<template>
  <aside class="main-aside left">

    <!-- Navigation -->
    <Menu />

    <!-- Groups -->
    <Groups />

    <!-- Friends -->
    <Friends />

  </aside>
</template>

<script>
  import Menu from '@/components/main/main-leftside/main-leftside-menu/Menu';
  import Groups from '@/components/main/main-leftside/main-leftside-groups/Groups';
  import Friends from '@/components/main/main-leftside/main-leftside-friends/Friends';

  export default {
    name: 'Leftside',
    components: {
      Menu,
      Groups,
      Friends
    },
    data() {
      return {
        activeDashboard: true,
        activeRecent: false,
        activeExpanse: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .main-aside {
    width: 15%;

    margin-top: 20px;

    display: flex;
    flex-direction: column;
  }
</style>