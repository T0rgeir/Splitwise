<template>
  <div class="popup-group-container-content-users-list-item" :class="{ active: animateItem, deleted: deleteItem }">
    <input type="text" class="popup-group-container-content-users-list-item-naming" placeholder="Name...">
    <input type="text" class="popup-group-container-content-users-list-item-email" placeholder="Email adress...">
    <button type="button"
            class="popup-group-container-content-users-list-item-close"
            @click="deleteCurrentMember"
    ></button>
  </div>
</template>

<script>
  import { bus } from '@/main';

  export default {
    name: 'PopupGroupsMember',
    props: {
      member: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        animateItem: false,
        deleteItem: false,
        membersList: [{ id: 0, naming: '', email: '' }]
      }
    },
    methods: {
      deleteCurrentMember() {
        bus.$emit('delete-current-member', this.member.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .popup-group-container-content-users-list-item {
    width: 100%;

    padding-right: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    opacity: 1;

    margin: 5px 0;

    transition: .2s opacity;

    &.active {
      opacity: 0;
    }

    &.deleted {
      display: none;
    }

    &-naming, &-email {
      padding: 4px 4px 4px 8px;

      font-size: 16px;

      border: 1px solid $color-secondary;

      outline: none;
      user-select: none;
    }

    &-close {
      width: 30px;
      height: 30px;

      background-color: transparent;
      border: 1px solid #999;
      border-radius: 50%;

      background-image: url('../../../../assets/images/trash.svg');
      background-position: center;
      background-size: 14px;
      background-repeat: no-repeat;

      outline: none;
      user-select: none;

      transition: .2s background;

      &:hover {
        cursor: pointer;
        background-color: #f54747;
        border-color: #f54747;
        background-image: url('../../../../assets/images/trash-hover.svg');
      }
    }
  }
</style>







