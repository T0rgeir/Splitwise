<template>
  <div class="popup-friends" :class="{ active: isPopUpActive, created: isPopUpCreated }">
    <div class="popup-friends-container" :class="{ active: isContainerActive, created: isContainerCreated }">

      <!-- Topline -->
      <div class="popup-friends-container-topline">
        <span class="popup-friends-container-topline-title"> Invite friends </span>
      </div>

      <!-- Content -->
      <div class="popup-friends-container-content">

        <!-- Naming section -->
        <section class="popup-friends-container-content-naming">
          <label for="field" class="popup-friends-container-content-naming-label"> Send message to your friend: </label>
          <input type="text"
                 class="popup-friends-container-content-naming-field"
                 id="field"
                 placeholder="Enter email adress..."
                 maxlength="40"
          />
          <textarea class="popup-friends-container-content-naming-area"
                    placeholder="Include optional message..."
                    maxlength="120"
          ></textarea>
        </section>

        <div class="popup-friends-container-content-btns">
          <button type="button"
                  class="popup-friends-container-content-btns-btn cancel"
                  @click="hidePopupWindow"
          > Cancel </button>
          <button type="button"
                  class="popup-friends-container-content-btns-btn next"
          > Send </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import { bus } from '@/main';

  export default {
    name: 'PopupFriends',
    data() {
      return {
        isPopUpActive: false,
        isPopUpCreated: false,
        isContainerActive: false,
        isContainerCreated: false
      }
    },
    created() {
      bus.$on('show-popup-friends', () => {
        this.showPopupWindow();
      });
    },
    methods: {
      showPopupWindow() {
        this.isPopUpCreated = true;
        this.isContainerCreated = true;

        setTimeout(() => {
          this.isPopUpActive = true;
          this.isContainerActive = true
        }, 100);
      },
      hidePopupWindow() {
        this.isContainerActive = false;
        this.isPopUpActive = false;

        setTimeout(() => {
          this.isContainerCreated = false;
          this.isPopUpCreated = false;
        }, 100);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .popup-friends {
    width: 100%;
    height: 100%;

    margin: 0 auto;

    display: none;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0);
    z-index: 1;

    transition: .2s background;

    &.active {
      background: rgba(0, 0, 0, 0.3);
    }

    &.created {
      display: flex;
    }

    &-container {
      width: 460px;
      margin-bottom: 200px;

      display: none;
      flex-direction: column;
      align-items: center;

      opacity: 0;

      background: #fff;

      transition: .2s opacity, .2s margin;

      &.active {
        opacity: 1;
        margin-bottom: 0;
      }

      &.created {
        display: flex;
      }

      &-topline {
        width: 100%;

        padding: 10px 15px;

        background: $color-main;

        &-title {
          color: #fff;
          font-size: 18px;
          font-weight: 400;
        }
      }

      &-content {
        width: 100%;

        &-naming {
          width: 100%;

          padding: 20px;

          display: flex;
          flex-direction: column;

          &-label {
            padding: 10px 0;
            font-size: 16px;
          }

          &-field {
            padding: 4px 4px 4px 8px;

            font-size: 16px;

            border: 1px solid $color-secondary;

            outline: none;
            user-select: none;
          }

          &-area {
            padding: 4px 4px 4px 8px;
            margin-top: 10px;
            resize: none;
            outline: none;
            user-select: none;
            border: 1px solid $color-secondary;

            &::-webkit-scrollbar {
              width: 5px;
            }

            &::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
              background: #999;
            }

            &::-webkit-scrollbar-thumb:hover {
              background: #666;
            }
          }
        }

        &-btns {
          padding: 0 20px 20px 20px;

          display: flex;
          justify-content: flex-end;

          &-btn {
            padding: 5px 16px;

            color: $color-secondary;

            background: none;
            border: 1px solid $color-secondary;

            outline: none;
            user-select: none;

            transition: .2s;

            &:first-child {
              margin-right: 10px;
            }

            &:hover {
              cursor: pointer;
              color: #fff;

              &.cancel {
                background: #f54747;
                border-color: #f54747;
              }

              &.next {
                background: $color-main;
                border-color: $color-main;
              }
            }
          }
        }
      }
    }
  }
</style>