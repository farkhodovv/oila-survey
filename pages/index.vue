<template>
  <div>
    <FirstStep v-if="step ===1" :form-raw="form" @form="formReady"/>
    <pinInput v-if="step === 2" :form-raw="form" @verified="Verified" @stepBack="stepBack"/>
    <welcome v-if="step === 3" @start="start"/>
   <!-- <test v-if="step ===4" @testDone="testDone"/>
    <multiple v-if="step ===5" @multiDone="multiDone"/>
    <textArea v-if="step ===6 "/>
    <stars v-if="step ===7"/>-->
  </div>
</template>

<script>
import firstStep from "@/components/form/FirstStep"
import pinInput from "@/components/form/pinInput"
import welcome from "@/components/form/welcome";
import test from "@/components/form/test"
import multiple from "@/components/form/multiple";
import textArea from "@/components/form/textArea";
import stars from "@/components/form/stars"

export default {
  components: {
    firstStep, pinInput, welcome, test, multiple, textArea, stars
  },
  data() {
    return {
      step: 1,
      code: null,
      form: {}
    }
  },
  methods: {
    stepBack() {
      this.step = 1
    },
    formReady(data) {
      this.form = data;
      this.step = 2;
    },
    Verified(data) {
      this.form = data;
      this.step = 3;
    },
    start() {
      this.step = 4
    },
    testDone(data) {
      this.form = {...data, ...this.form};
      this.step = 5
    },
    multiDone(data){
      this.form = {...data, ...this.form};
      this.step = 6
    }
  }
}
</script>

<style>

</style>
