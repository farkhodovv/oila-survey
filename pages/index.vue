<template>
  <div>
    <FirstStep v-if="step === 2"/>
    <pinInput v-if="step === 2"/>
    <welcome v-if="step === 2"/>
    <test v-if="step ===2 "/>
    <multiple v-if="step ===2 "/>
    <textArea v-if="step ===2 "/>
    <stars/>
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
    }
  }
}
</script>

<style>

</style>
