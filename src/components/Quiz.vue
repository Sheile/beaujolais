<template>
  <div>
    <div class="description">
      ボジョレー・ヌーボーのキャッチコピーを古い順に並び替えてください。<br/>
      1995年～2018年のキャッチコピーから10個がランダムで表示されます。
    </div>
    <ul class="quiz">
      <li>▲古い</li>
      <draggable v-model='choices' :options="options" @start="drag=true" @end="drag=false">
        <li class="choice" v-for="choice in choices" :key="choice.year">
          {{ choice.text }}
        </li>
      </draggable>
      <li>▼新しい</li>
    </ul>
    <button @click="calculate">採点する</button>
    <Footer/>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Footer from './Footer'

export default {
  name: 'Quiz',
  components: {
    draggable,
    Footer
  },
  mounted: function() {
    this.$store.dispatch('initializeQuiz')
  },
  computed: {
    options() {
      return {
        animation: 0,
        disabled: false
      }
    },
    choices: {
      get() {
        return this.$store.getters.choices
      },
      set(value) {
        this.$store.dispatch('updateChoices', { choices: value })
      }
    }
  },
  methods: {
    moveChoice() {
      this.$store.dispatch('moveChoice')
    },
    calculate() {
      this.$router.push('/answer')
    }
  }
}
</script>

<style scoped>
.description {
  font-size: 9pt;
}

ul.quiz {
  list-style-type: none;
  padding: 0;
  margin-bottom: 6px;
  margin-right: 32px;
}

ul.quiz li {
  text-align: left;
  font-size: 10pt;
  padding: 6px;
  border: solid 1px #333;
  margin-bottom: 4px;
  background-color: #ccc;
  user-select: none;
}

ul.quiz li.choice {
  cursor: move;
  background-color: #eee;
}

ul.quiz li.choice.sortable-ghost {
  opacity: 0.5;
  background-color: #66f;
  transform: translateX(6px);
}

button {
  display: block;
  width: calc(100% - 32px);
  padding: 4px;
  background-color: #7e2eff;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
}
</style>
