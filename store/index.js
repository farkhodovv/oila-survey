export const state = () => ({
  token: undefined,
  user: true,

  region: [],

  questions: [],
  question: {},
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  },

  setRegion(state, region) {
    state.region = region;
  },

  setSurvey(state, questions) {
    state.questions = questions;
  },
  setQuestions(state, question) {
    state.question = question;
  },
};

export const actions = {
  async CREATE_TOKEN({commit}, token) {
    localStorage.setItem("authToken", token);
    commit('SET_TOKEN', token)
  },

  async LOAD_TOKEN({commit}) {
    const token = await localStorage.getItem('authToken')
    commit('SET_TOKEN', token)
  },

  async LOGIN({commit}, {phoneNumber, password}) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('account/login/', {
        username: phoneNumber,
        password
      })
        .then(async (response) => {
          const token = response.token
          commit('SET_TOKEN', token)
          await localStorage.setItem('token', token)
          this.$axios.setHeader('Authorization', 'Token ' + token)
          resolve(response)
        })
        .catch(reject)
    })
  },

  async FETCH_USER({commit, state}) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('account/profile/', {
        headers: {
          Authorization: 'Token ' + state.token,
          "Accept-Language": this.$i18n.locale
        }
      })
        .then((response) => {
          commit('SET_USER', response)
          resolve(response)
        })
        .catch(reject)
    })
  },

  async LOGOUT({commit}) {
    commit('SET_TOKEN', undefined)
    commit('SET_USER', undefined)
    await localStorage.removeItem('token')
  },

  fetchRegion({commit}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`account/region/`, {
          headers: {
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          commit("setRegion", res.data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  fetchSurvey({commit, state}) {

    return new Promise((resolve, reject) => {
      this.$axios
        .get(`survey/retrieve/?id=1`, {
          headers: {
            Authorization: 'Token ' + state.token,
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
         // console.log(res)
          commit("setSurvey", res.data.questions);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  fetchFirstQuestions({commit, state}, id) {

    return new Promise((resolve, reject) => {
      this.$axios
        .get(`survey/question/retrieve/?id=${id}`, {
          headers: {
            Authorization: 'Token ' + state.token,
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {
          console.log(res)
          commit("setQuestions", res.data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  fetchQuestion({commit, state}, id) {

    return new Promise((resolve, reject) => {
      this.$axios
        .get(`survey/question/retrieve/?id=${id}`, {
          headers: {
            Authorization: 'Token ' + state.token,
            'Accept-Language': this.$i18n.locale
          }
        })
        .then(res => {

          commit("setQuestions", res.data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
