<template>
  <main class="main">
    <div class="main-inner">

      <!-- Main Aside Left -->
      <Leftside />

      <!-- Main Content -->
      <MainContent />

      <!-- Main Aside Right -->
      <Rightside />

    </div>
  </main>
</template>

<script>
  import Leftside from '@/components/main/main-leftside/Leftside';
  import MainContent from '@/components/main/main-content/Content';
  import Rightside from '@/components/main/main-rightside/Rightside';

  export default {
    name: 'Main',
    components: {
      Leftside,
      MainContent,
      Rightside
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/main';

  .main {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    &-inner {
      width: 1280px;

      display: flex;
      justify-content: space-between;
    }
  }
</style>