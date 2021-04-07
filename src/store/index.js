import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    asideGroups: [
      {
        id: 1,
        title: 'School',
        status: true,
        activities: [
          {
            id: 1,
            date: {
              day: '10',
              month: '02'
            },
            title: 'Pencils',
            paid: '5.30',
            borrowed: '3.70'
          },
          {
            id: 2,
            date: {
              day: '21',
              month: '02'
            },
            title: 'Pens',
            paid: '1.00',
            borrowed: 'nothing'
          },
          {
            id: 3,
            date: {
              day: '04',
              month: '03'
            },
            title: 'Ball',
            paid: '10.00',
            borrowed: '1.00'
          }
        ]
      },
      {
        id: 2,
        title: 'University',
        status: false,
        activities: []
      },
      {
        id: 3,
        title: 'Home',
        status: false,
        activities: []
      }
    ],
    asideFriends: [
      {
        id: 1,
        title: 'School',
        status: true,
        activities: [
          {
            id: 1,
            date: {
              day: '10',
              month: '02'
            },
            title: 'Pencils',
            paid: '5.30',
            borrowed: '3.70'
          },
          {
            id: 2,
            date: {
              day: '21',
              month: '02'
            },
            title: 'Pens',
            paid: '1.00',
            borrowed: 'nothing'
          },
          {
            id: 3,
            date: {
              day: '04',
              month: '03'
            },
            title: 'Ball',
            paid: '10.00',
            borrowed: '1.00'
          }
        ]
      },
      {
        id: 2,
        title: 'University',
        status: false,
        activities: []
      },
      {
        id: 3,
        title: 'Home',
        status: false,
        activities: []
      }
    ]
  },
  getters: {
    getAllAsideGroups(state) {
      return state.asideGroups;
    },
    getAllAsideFriends(state) {
      return state.asideFriends;
    }
  },
  mutations: {
  },
  actions: {
  }
});