<template>
  <div class="popup-group" :class="{ active: isPopUpActive, created: isPopUpCreated }">
    <div class="popup-group-container" :class="{ active: isContainerActive, created: isContainerCreated }">

      <!-- Topline -->
      <div class="popup-group-container-topline">
        <span class="popup-group-container-topline-title"> Start a new group </span>
      </div>

      <!-- Content -->
      <div class="popup-group-container-content">

        <!-- Naming section -->
        <section class="popup-group-container-content-naming">
          <label for="field" class="popup-group-container-content-naming-label"> My group shall be called: </label>
          <input type="text"
                 class="popup-group-container-content-naming-field"
                 id="field"
          />
        </section>
        <button type="button"
                class="popup-group-container-content-listbox"
                @click="showUsersDetailes"
        > Show members settings </button>
        <section class="popup-group-container-content-users" :class="{ active: isUsersAreaActive, created: isUsersAreaCreated }">
          <label for="field" class="popup-group-container-content-users-label"> Group members: </label>
          <div class="popup-group-container-content-users-list">
            <PopupGroupsMember v-for="member in membersList"
                                            :member="member"
                                            :key="member.id"
            />
          </div>
          <button class="popup-group-container-content-users-add"
                  @click="addNewMember"
          > + Add person </button>
        </section>

        <div class="popup-group-container-content-btns">
          <button type="button"
                  class="popup-group-container-content-btns-btn cancel"
                  @click="hidePopupWindow"
          > Cancel </button>
          <button type="button"
                  class="popup-group-container-content-btns-btn next"
          > Create </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import PopupGroupsMember from '@/components/main/main-leftside/main-leftside-groups/PopupGroupsMember';
  import { bus } from '@/main';

  export default {
    name: 'PopupGroups',
    components: {
      PopupGroupsMember
    },
    data() {
      return {
        isPopUpActive: false,
        isPopUpCreated: false,
        isContainerActive: false,
        isContainerCreated: false,
        isUsersAreaActive: false,
        isUsersAreaCreated: false,
        membersList: [{ id: 0, naming: '', email: '' }]
      }
    },
    created() {
      bus.$on('show-popup-groups', () => {
        this.showPopupWindow();
      });
      bus.$on('delete-current-member', data => {
        this.deleteCurrentMember(data);
      });
    },
    methods: {
      showPopupWindow() {
        this.isPopUpCreated = true;
        this.isContainerCreated = true;

        setTimeout(() => {
          this.isPopUpActive = true;
          this.isContainerActive = true;
        }, 100);
      },
      hidePopupWindow() {
        this.isContainerActive = false;
        this.isPopUpActive = false;

        setTimeout(() => {
          this.isContainerCreated = false;
          this.isPopUpCreated = false;
          this.isUsersAreaActive = false;
          this.membersList.splice(1);
        }, 100);
      },
      addNewMember() {
        this.membersList.push({
          id: (this.membersList.length) ? this.membersList[this.membersList.length - 1].id + 1 : 0,
          naming: '',
          email: ''
        });
      },
      deleteCurrentMember(idx) {
        let pos = this.membersList.findIndex(el => el.id === idx);
        this.membersList.splice(pos, 1);
      },
      showUsersDetailes() {
        if (this.isUsersAreaCreated && this.isUsersAreaActive) {
          this.isUsersAreaActive = false;
          setTimeout(() => this.isUsersAreaCreated = false, 300);
        } else {
          this.isUsersAreaCreated = true;
          setTimeout(() => this.isUsersAreaActive = true, 100);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../styles/main';

  .popup-group {
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

      background: #fff;
      opacity: 0;

      transition: .2s margin, .2s opacity;

      &.created {
        display: flex;
      }

      &.active {
        margin-bottom: 0;
        opacity: 1;
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
        }

        &-listbox {
          padding: 5px 30px 5px 16px;
          margin: 5px 20px;

          color: $color-secondary;
          font-size: 14px;

          background-color: transparent;
          border: 1px solid $color-secondary;

          background-image: url('../../../../assets/images/arrow.svg');
          background-position: 168px center;
          background-size: 10px;
          background-repeat: no-repeat;

          outline: none;
          user-select: none;

          transition: .2s;

          &:hover, &.active {
            cursor: pointer;
            color: #fff;
            border-color: $color-main;
            background-color: $color-main;
            background-image: url('../../../../assets/images/arrow-hover.svg');
          }
        }

        &-users {
          width: 100%;
          height: 0;

          padding: 0;

          display: none;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;

          transition: .2s height, .2s opacity, .2s padding;

          &.active {
            padding: 20px;
            height: 247px;
            opacity: 1;
          }

          &.created {
            display: flex;
          }

          &-label {
            padding: 10px 0;
            font-size: 16px;
          }

          &-list {
            height: 135px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            overflow-y: scroll;

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

          &-add {
            margin-top: 15px;
            padding: 5px 16px;

            color: $color-secondary;
            font-size: 14px;

            background: none;
            border: 1px solid $color-secondary;

            outline: none;
            user-select: none;

            transition: .2s;

            &:hover {
              cursor: pointer;
              color: #fff;
              border-color: $color-main;
              background: $color-main;
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