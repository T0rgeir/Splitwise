<template>
  <div class="wrapper">

    <!-- Header -->
    <Header />

    <!-- Main -->
    <Main />

  </div>
</template>

<script>
  import Header from '@/components/header/Header';
  import Main from '@/components/main/Main';

  export default {
    name: 'Page',
    components: {
      Header,
      Main
    }
  }
</script>

<style lang="scss">
  @import '../styles/main';

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body, input, textarea, button {
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  .wrapper {
    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;
    flex-direction: column;
  }
</style>