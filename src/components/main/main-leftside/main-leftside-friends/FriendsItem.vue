<template>
  <a class="main-aside-panel-content-item"
     :class="{ active: friend.status }"
     @click="showFriend"
  >
    {{ friend.title }}
  </a>
</template>

<script>
  import { bus } from '@/main';

  export default {
    name: 'FriendsItem',
    props: {
      friend: {
        type: Object,
        require: true
      }
    },
    methods: {
      showFriend() {
        bus.$emit('show-friend', { id: this.friend.id, title: this.friend.title });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-aside-panel-content-item {
    padding: 4px 34px;

    color: $color-secondary;
    font-size: 16px;
    font-weight: 400;

    background-image: url('../../../../assets/images/group.svg');
    background-position: 10px center;
    background-size: 14px;
    background-repeat: no-repeat;

    user-select: none;

    transition: .2s color, .2s background;

    &:hover {
      cursor: pointer;
      color: $color-hover;
      background-image: url('../../../../assets/images/group-hover.svg');
      background-color: rgba($color-secondary, 0.2);
    }

    &.active {
      color: $color-main;
      background-image: url('../../../../assets/images/group-active.svg');
      box-shadow: -4px 0 0 0 $color-main;
    }
  }
</style>