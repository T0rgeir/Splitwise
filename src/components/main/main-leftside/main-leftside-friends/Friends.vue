<template>
  <section class="main-aside-panel friends">
    <div class="main-aside-panel-topline">
      <span class="main-aside-panel-topline-title"> Friends </span>
      <button type="button"
              class="main-aside-panel-topline-btn"
              @click="showPopupWindow"
      > + Add </button>
    </div>

    <!-- Friends items -->
    <div class="main-aside-panel-content">
      <FriendsItem v-for="friend in getAllAsideFriends"
                  :friend="friend"
                  :key="friend.id"
      />
    </div>

    <!-- Popup -->
    <PopupFriends />

  </section>
</template>

<script>
  import FriendsItem from '@/components/main/main-leftside/main-leftside-friends/FriendsItem';
  import PopupFriends from '@/components/main/main-leftside/main-leftside-friends/PopupFriends';
  import { mapGetters, mapActions } from 'vuex';
  import { bus } from '@/main';

  export default {
    name: 'Friends',
    components: {
      FriendsItem,
      PopupFriends
    },
    computed: {
      ...mapGetters(['getAllAsideFriends'])
    },
    methods: {
      showPopupWindow() {
        bus.$emit('show-popup-friends');
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

    &.friends .main-aside-panel-content-item {
      background-image: url('../../../../assets/images/user.svg');

      &:hover {
        background-image: url('../../../../assets/images/user-hover.svg');
      }

      &.active {
        background-image: url('../../../../assets/images/user-active.svg');
      }
    }

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

      &-item {
        padding: 4px 34px;

        color: $color-secondary;
        font-size: 16px;
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

        &.active {
          color: $color-main;
          box-shadow: -4px 0 0 0 $color-main;
        }
      }
    }
  }
</style>