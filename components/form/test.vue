<template>
 <div>
   <div class="test__body">
     <el-radio class="w-100 ml-2 d-flex align-items-center justify-content-center"
               v-for="(item,index) in currentQuestion.answers"
               v-model="myAnswer"
               :label="item.id"
               :key="index"
               @change="checkTest"
               border>
       {{item.answer}}
     </el-radio>
    <!-- <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="test" label="2"
               border>Foydasini sezmadim
     </el-radio>
     <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="test" label="3"
               border>Ko‘proq qilinsa yaxshi bo‘lardi
     </el-radio>
     <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="test" label="4"
               border>Umuman foydasiz
     </el-radio>
     <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="test" label="5"
               border>Vaqtim ketgani qoldi
     </el-radio>-->
   </div>
   <pre>{{myAnswer}}</pre>
 </div>
</template>

<script>
export default {
  name: 'test',
  props: ['currentQuestion', 'answer'],
  data() {
    return {
      myAnswer: null,
    }
  },
  methods: {
    checkTest() {
      this.$emit('answer', this.myAnswer)

    }
  }
}
</script>
<style lang="scss">

</style>
