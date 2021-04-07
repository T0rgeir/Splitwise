<template>
  <div class="main-content">

    <!-- Main dashboard -->
    <MainContentDashboard />

    <!-- Main recent -->
    <MainContentRecent />

    <!-- Main groups -->
    <MainContentGroups v-for="group in getAllAsideGroups"
                       :group="group"
                       :key="group.id"
    />

  </div>
</template>

<script>
  import MainContentDashboard from '@/components/main/main-content/main-content-dashboard/Dashboard';
  import MainContentRecent from '@/components/main/main-content/main-content-recent/Recent';
  import MainContentGroups from '@/components/main/main-content/main-content-groups/Groups';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'MainContent',
    components: {
      MainContentDashboard,
      MainContentRecent,
      MainContentGroups
    },
    computed: {
      ...mapGetters(['getAllAsideGroups'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/main';

  .main-content {
    width: 60%;
    height: 100%;
  }
</style>