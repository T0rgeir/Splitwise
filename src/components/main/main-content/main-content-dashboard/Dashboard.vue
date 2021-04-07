<template>
  <section class="main-content-dashboard" :class="{ active: isActive }">
    <div class="main-content-dashboard-topline">
      <div class="main-content-dashboard-topline-up">
        <span class="main-content-dashboard-topline-up-title"> Dashboard </span>
      </div>
      <div class="main-content-dashboard-topline-down">
        <div class="main-content-dashboard-topline-down-item">
          <span class="main-content-dashboard-topline-down-item-title"> Total balance: </span>
          <span class="main-content-dashboard-topline-down-item-text"> +$5.00 </span>
        </div>
        <div class="main-content-dashboard-topline-down-item">
          <span class="main-content-dashboard-topline-down-item-title"> You owe: </span>
          <span class="main-content-dashboard-topline-down-item-text"> $0.00 </span>
        </div>
        <div class="main-content-dashboard-topline-down-item">
          <span class="main-content-dashboard-topline-down-item-title"> You're owed: </span>
          <span class="main-content-dashboard-topline-down-item-text"> $5.00 </span>
        </div>
      </div>
    </div>
    <div class="main-content-dashboard-list">
      <div class="main-content-dashboard-list-left">
        <span class="main-content-dashboard-list-left-title"> You owe </span>
        <div class="main-content-dashboard-list-left-content">
          <div class="main-content-dashboard-list-left-content-item">
            <span class="main-content-dashboard-list-left-content-item-title"> Volodya Koval </span>
            <span class="main-content-dashboard-list-left-content-item-text"> You're owed $5.00 </span>
          </div>
          <div class="main-content-dashboard-list-left-content-item">
            <span class="main-content-dashboard-list-left-content-item-title"> Vladick Simak </span>
            <span class="main-content-dashboard-list-left-content-item-text"> You're owed $12.00 </span>
          </div>
          <div class="main-content-dashboard-list-left-content-item">
            <span class="main-content-dashboard-list-left-content-item-title"> Sanya Kot </span>
            <span class="main-content-dashboard-list-left-content-item-text"> You're owed $41.00 </span>
          </div>
        </div>
      </div>
      <div class="main-content-dashboard-list-right">
        <span class="main-content-dashboard-list-right-title"> You're owed </span>
        <div class="main-content-dashboard-list-right-content">
          <div class="main-content-dashboard-list-right-content-item">
            <span class="main-content-dashboard-list-right-content-item-title"> Dima Mihno </span>
            <span class="main-content-dashboard-list-right-content-item-text"> Owes you $5.00 </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { bus } from '@/main';

  export default {
    name: 'MainContentDashboard',
    data() {
      return {
        isActive: false
      }
    },
    created() {
      bus.$on('change-content-window', payload => {
        this.isActive = payload.flag;
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .main-content-dashboard {
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
      flex-direction: column;

      background: #f1f1f1;

      &-up {
        padding: 10px 20px;

        &-title {
          font-size: 24px;
          font-weight: 600;
        }
      }

      &-down {
        width: 100%;

        display: flex;
        justify-content: space-between;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;

        &-item {
          width: calc(100% / 3);
          padding: 10px 0;

          position: relative;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          border-right: 1px solid #d9d9d9;

          &:last-child {
            border: none;
          }

          &-title {
            color: $color-hover;
            font-size: 14px;
            font-weight: 300;
          }

          &-text {
            color: $color-main;
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
    }

    &-list {
      width: 100%;

      display: flex;
      padding: 20px;

      &-left {
        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &-title {
          color: #999;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        &-content {
          width: 100%;
          margin-top: 20px;
          border-right: 1px solid #d9d9d9;

          &-item {
            margin-bottom: 10px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &-title {
              color: #000;
              font-size: 16px;
            }

            &-text {
              color: #f54747;
              font-size: 16px;
            }
          }
        }
      }

      &-right {
        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &-title {
          color: #999;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        &-content {
          width: 100%;
          margin-top: 20px;

          &-item {
            margin-bottom: 10px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;

            &-title {
              color: #000;
              font-size: 16px;
            }

            &-text {
              color: $color-main;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>