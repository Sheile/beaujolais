<template>
  <div class="answer">
    <h1>あなたの得点は{{score}}点でした。</h1>
    <div>
      <div class="link">
        <a :href="`https://twitter.com/intent/tweet?text=あなたの得点は${score}点でした。&url=https://game.sheile.net/beaujolais`">Twitterに投稿する</a>
      </div>
      <div class="link">
        <router-link to="/">もう一度</router-link>
      </div>
    </div>
    <ul class="answer">
      <AnswerItem v-for="(choice, index) in choices" :key="choice.year"
                  :index="index" :choice="choice"/>
    </ul>
    <Footer/>
  </div>
</template>

<script>
import AnswerItem from './AnswerItem'
import Footer from './Footer'

export default {
  components: {
    AnswerItem,
    Footer
  },
  computed: {
    choices() {
      return this.$store.getters.choices
    },
    score() {
      let score = 0
      this.$store.getters.choices.forEach((choice, index) => {
        score += 10 - Math.abs(index - choice.index)
      })
      return score
    }
  },
  name: 'Answer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 18pt;
}

ul.answer {
  list-style-type: none;
  padding: 0;
}
</style>
