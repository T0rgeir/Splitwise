<template>
  <section class="main-aside-panel groups">
    <div class="main-aside-panel-topline">
      <span class="main-aside-panel-topline-title"> Groups </span>
      <button type="button"
              class="main-aside-panel-topline-btn"
              @click="showPopUpWindow"
      > + Add </button>
    </div>

    <!-- Groups items -->
    <div class="main-aside-panel-content">
      <GroupsItem v-for="group in getAllAsideGroups"
                                :group="group"
                                :key="group.id"
      />
    </div>

    <!-- Popup -->
    <PopupGroups />

  </section>
</template>

<script>
  import GroupsItem from '@/components/main/main-leftside/main-leftside-groups/GroupsItem';
  import PopupGroups from '@/components/main/main-leftside/main-leftside-groups/PopupGroups';
  import { mapGetters, mapActions } from 'vuex';
  import { bus } from '@/main';

  export default {
    name: 'Groups',
    components: {
      GroupsItem,
      PopupGroups
    },
    computed: {
      ...mapGetters(['getAllAsideGroups'])
    },
    methods: {
      showPopUpWindow() {
        bus.$emit('show-popup-groups');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-aside-panel {
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    &-topline {
      padding: 2px 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background: #f6f6f6;

      &-title {
        color: $color-secondary;
        font-size: 18px;
      }

      &-btn {
        padding: 0;

        color: $color-secondary;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;

        background-color: transparent;
        border: none;

        user-select: none;
        outline: none;

        transition: .2s color;

        &:hover {
          cursor: pointer;
          color: $color-main;
        }
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>