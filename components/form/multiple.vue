<template>
  <div>

    <div class="test-body">
      <div class="multiple d-flex flex-wrap">

        <el-checkbox
          v-for="(item,index) in currentQuestion.answers"
          :key="index"
          class="w-50"
          v-model="myAnswer"
          :label="item.id"
          @change="checkTest"
          border>{{item.answer}}</el-checkbox>

      </div>

      <pre>{{myAnswer}}</pre>

    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: ['currentQuestion', 'answer'],
  data() {
    return {
      myAnswer: []
    }
  },
  methods: {
    multiDone() {
     // this.$emit('multiDone', {multiAnswer: this.multiAnswer})
    },
    checkTest() {
      this.$emit('answer', this.myAnswer)

    }
  }
}
</script>
<style scoped lang="scss">
.multiple {
  margin: 20px 0;
}
</style>
