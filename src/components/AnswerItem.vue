<template>
  <li :class="['item', `score${score}`]">
    <div class="header">
      あなたの選択: {{index + 1}}番目  実際の答え: {{choice.index + 1}}番目
      <span class="score">({{score}}点)</span>
    </div>
    <div class="body">
      {{choice.year}}年: {{choice.text}}
    </div>
  </li>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    index: Number,
    choice: Object
  },
  computed: {
    score() {
      return 10 - Math.abs(this.index - this.choice.index)
    }
  }
}
</script>

<style scoped>
ul.answer li {
  padding: 6px;
  border: solid 1px #333;
  margin-bottom: 4px;
  background-color: #eee;
}

ul.answer li.score10 {
  background-color: #fee;
}

.item {
  text-align: left;
}

.header {
  font-size: 9pt;
  color: #666;
}

.body {
  font-size: 10pt;
  color: #333;
}

.score {
  color: #333;
}
</style>
