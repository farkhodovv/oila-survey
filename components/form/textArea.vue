<template>
  <div>

    <div class="test-body mt-5">
      <b-form-input
        v-model="myAnswer"
        placeholder="Yozma shaklida javob bering (misol: 25)">
      </b-form-input>
      <pre>{{currentQuestion}}</pre>
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
        myAnswer: '',
      }
    },
    watch: {
      myAnswer() {
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
