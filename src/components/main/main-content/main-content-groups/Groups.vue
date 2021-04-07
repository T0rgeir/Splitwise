<template>
  <section class="main-content-group" :class="{ active: group.status }">
    <div class="main-content-group-topline">
      <div class="main-content-group-topline-info">
        <img src="../../../../assets/images/group.svg" alt="logo" class="main-content-group-topline-info-photo">
        <span class="main-content-group-topline-info-title"> {{ group.title }} </span>
      </div>
      <button class="main-content-group-topline-btn"> Add an expense </button>
    </div>
    <div class="main-content-group-list">
      <MainContentGroupsItems v-for="item in group.activities"
                              :item="item"
                              :key="item.id"
      />
    </div>
  </section>
</template>

<script>
  import MainContentGroupsItems from "@/components/main/main-content/main-content-groups/main-content-groups-items/Items";
  import { bus } from '@/main';

  export default {
    name: 'MainContentGroups',
    components: {
      MainContentGroupsItems
    },
    props: {
      group: {
        type: Object,
        require: true
      }
    },
    created() {
      bus.$on('show-group', payload => {
        if (payload.id === this.group.id) {
          this.group.status = true;
        } else {
          this.group.status = false;
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-content-group {
    height: 100%;
    display: none;
    flex-direction: column;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;

    &.active {
      display: flex;
    }

    &-topline {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;

      background: #f1f1f1;
      border-bottom: 1px solid #d9d9d9;

      &-info {
        display: flex;
        align-items: center;

        &-photo {
          width: 30px;
          height: 30px;
        }

        &-title {
          margin-left: 12px;
          font-size: 24px;
          font-weight: 600;
        }
      }

      &-btn {
        padding: 0 10px;
        color: #ff652f;

        background: none;
        border: 1px solid #ff652f;
        outline: none;
        user-select: none;

        transition: .2s background, .2s border, .2s color;

        &:hover {
          cursor: pointer;
          background: #ff652f;
          color: #fff;
          border-color: #ff652f;
        }
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
    }
  }
</style>