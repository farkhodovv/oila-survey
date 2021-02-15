<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="test" v-if="!finish">

            <div class="item"
                 v-for="(item,index) in questions"
                 :key="index"
                 v-if="index === currentIndex && currentQuestion">

              <div class="test__header">
                <div class="counter">
                  <span>{{currentIndex+1}}</span><span class="gray-text">/{{questions.length}}</span>
                </div>
                <h5>{{currentQuestion.question}}</h5>
              </div>

              <multiple
                v-if="currentQuestion.type === 'M'"
                :currentQuestion="currentQuestion"
                @answer="answerMultiType"/>

              <text-area
                v-if="currentQuestion.type === 'I'"
                :currentQuestion="currentQuestion"
                @answer="answerInputType"/>

              <test-questions
                v-if="currentQuestion.type === 'S'"
                :currentQuestion="currentQuestion"
                @answer="answerSelectType"/>

            </div>
            <button class="align-items-center btn btn-blue" @click="nextQuestion" :disabled="nextQuestionBtn">
              Keyingisi
              <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.99989 18H6.66656C6.40922 18 6.17456 17.8513 6.06389 17.6187C5.95322 17.386 5.98722 17.1107 6.15056 16.9107L11.8052 10L6.15056 3.08867C5.98722 2.88933 5.95389 2.614 6.06389 2.38067C6.17389 2.14733 6.40922 2 6.66656 2H7.99989C8.19989 2 8.38922 2.09 8.51589 2.24467L14.5159 9.578C14.7166 9.824 14.7166 10.1767 14.5159 10.4227L8.51589 17.756C8.38922 17.91 8.19989 18 7.99989 18Z"
                  fill="white"/>
              </svg>
            </button>

          </div>

          <div v-else>
            <stars/>
          </div>
        </div>
      </div>
    </div>
    <!-- <test v-if="step ===4" @testDone="testDone"/>
     <multiple v-if="step ===5" @multiDone="multiDone"/>
     <textArea v-if="step ===6 "/>
     <stars v-if="step ===7"/>-->

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import testQuestions from "@/components/form/test"
  import multiple from "@/components/form/multiple";
  import textArea from "@/components/form/textArea";
  import stars from "@/components/form/stars"

  export default {
    name: "test",
    middleware: 'auth',
    components: {
      testQuestions, multiple, textArea, stars
    },
    data() {
      return {
        currentIndex: 0,
        currentQuestion: undefined,
        questionCount: 0,
        answer: null,
        nextQuestionBtn: true,
        finish: false,
      }
    },
    computed: {
      ...mapState({
        token: state => state.token,
        questions: state => state.questions,
        question: state => state.question,
      }),
    },
    async fetch() {
      await this.$store.dispatch("fetchSurvey");
      this.questionCount = this.questions.length

      if (this.questions[0]) {
        await this.$store.dispatch("fetchFirstQuestions", this.questions[0]);
        this.currentQuestion = this.question
      }
    },

    methods: {
      answerInputType(data) {
        if (data) {
          this.nextQuestionBtn = false
        }
        this.answer = data
      },
      answerSelectType(data) {
        if (data) {
          this.nextQuestionBtn = false
        }
        this.answer = data
      },
      answerMultiType(data) {
        if (data) {
          this.nextQuestionBtn = false
        }
        this.answer = data
      },


      async nextQuestion() {
        const data = {
          answer: this.answer,
          question: this.currentQuestion.id,
        }

        if (this.currentQuestion.type === 'I') {
          await this.$axios.post(`survey/input-answer/`, data, {
            headers: {
              Authorization: 'Token ' + this.token,
              'Accept-Language': this.$i18n.locale
            }
          })
            .then((res) => {
              console.log(res)

            })
            .catch(error => {
              console.log(error.response.data)
              //alert(error.response.data)
            })
            .finally(() => {
            })
        } else {
          await this.$axios.post(`survey/answer/`, data, {
            headers: {
              Authorization: 'Token ' + this.token,
              'Accept-Language': this.$i18n.locale
            }
          })
            .then((res) => {
              console.log(res)
            })
            .catch(error => {
              console.log(error.response.data)
            })
            .finally(() => {
            })
        }


        if (this.currentIndex + 1 < this.questions.length) {
          this.currentIndex++
          await this.$store.dispatch("fetchQuestion", this.questions[this.currentIndex]);
          this.currentQuestion = this.question
        } else {
          // console.log('vse!!!!')
          this.finish = true
        }


        this.nextQuestionBtn = true
        this.answer = null
      },


    }
  }
</script>

<style scoped>

</style>
