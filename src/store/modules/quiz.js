import sampleSize from 'lodash/sampleSize'
import sortBy from 'lodash/sortBy'
import quiz from '../../data/quiz'

const state = {
  choices: []
}

const mutations = {
  'INITIALIZE_QUIZ' (state) {
    const choices = sortBy(sampleSize(quiz, 10), 'year').map(
      (choice, index) => ({...choice, index: index })
    )
    state.choices = sampleSize(choices, 10)
  },
  'UPDATE_CHOICES' (state, payload) {
    state.choices = payload.choices
  }
}

const actions = {
  initializeQuiz: ({commit}) => {
    commit('INITIALIZE_QUIZ')
  },
  updateChoices: ({commit}, payload) => {
    commit('UPDATE_CHOICES', { choices: payload.choices })
  }
}

const getters = {
  choices: state => {
    return state.choices
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
