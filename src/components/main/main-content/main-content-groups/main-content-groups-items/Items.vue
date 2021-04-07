<template>
  <div class="main-content-group-list-item">
    <div class="main-content-group-list-item-leftside">
      <span class="main-content-group-list-item-leftside-title"> {{ item.title }} </span>
      <span class="main-content-group-list-item-leftside-date"> {{ item.date.day }}.{{ item.date.month }} </span>
    </div>
    <div class="main-content-group-list-item-rightside">
      <div class="main-content-group-list-item-rightside-owe">
        <span class="main-content-group-list-item-rightside-owe-title"> You paid: </span>
        <span class="main-content-group-list-item-rightside-owe-text"> ${{ item.paid }} </span>
      </div>
      <div class="main-content-group-list-item-rightside-owed">
        <span class="main-content-group-list-item-rightside-owed-title"> You borrowed: </span>
        <span class="main-content-group-list-item-rightside-owed-text"> {{ item.borrowed }} </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainContentGroupsItems',
    props: {
      item: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../../styles/main';

  .main-content-group-list-item {
    padding: 20px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid #d9d9d9;

    &-leftside {
      display: flex;
      flex-direction: column;

      &-title {
        font-size: 20px;
        color: #000;
      }

      &-date {
        color: $color-secondary;
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
      }
    }

    &-rightside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      &-owe {

        &-title, &-text {
          font-size: 16px;
          font-weight: 300;
          color: $color-secondary;
        }

        &-text {
          color: $color-main;
        }
      }

      &-owed {

        &-title, &-text {
          font-size: 16px;
          font-weight: 300;
          color: $color-secondary;
        }

        &-text {
          color: #f54747;
        }
      }
    }
  }
</style>