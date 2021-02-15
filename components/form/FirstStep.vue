<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="step">
          <div class="items">
            <h1 class="title">Ajrimlar sonini kamaytirishga qaratilgan so‘rovnoma</h1>
            <p class="text">This brief will help us get ready for the job so that we can do it the best for you.
            </p>
            <p> It depends on how clearly and comprehensively you answer the questions, how quickly we
              start speaking the same
              language in order to solve the tasks as quickly and efficiently as possible.</p>
          </div>
          <div class="buttons d-flex align-items-center">
            <nuxt-link class="lang-btn lang-right" active-class="lang-active" :to="switchLocalePath('uz')">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 10.6665V13.7903C0 15.0855 1.02857 15.9999 2.28572 15.9999H21.3333C22.5905 15.9999 23.6191 15.0855 23.6191 13.7903V10.6665H0Z"
                  fill="#1EB53A"/>
                <path
                  d="M21.3333 0H2.28572C1.02857 0 0 0.914286 0 2.20953V5.33332H23.6191V2.20953C23.6191 0.914286 22.5905 0 21.3333 0Z"
                  fill="#0099B5"/>
                <path d="M23.6191 5.3335H0V10.6669H23.6191V5.3335Z" fill="white"/>
                <path d="M23.6191 4.95264H0V5.33358H23.6191V4.95264Z" fill="#CE1126"/>
                <path d="M23.6191 10.6665H0V11.0474H23.6191V10.6665Z" fill="#CE1126"/>
                <path
                  d="M3.58116 1.06642C3.50498 1.06642 3.42879 1.02832 3.35259 1.02832C2.55259 1.02832 1.86688 1.67595 1.86688 2.51405C1.86688 3.35214 2.5145 3.99976 3.35259 3.99976C3.42879 3.99976 3.50498 3.99976 3.58116 3.96167C2.89545 3.84738 2.36212 3.23786 2.36212 2.51405C2.36212 1.75214 2.89545 1.18071 3.58116 1.06642Z"
                  fill="white"/>
                <path
                  d="M4.30434 3.5811L4.22816 3.39062L4.15197 3.5811H3.96149L4.11387 3.73348L4.07578 3.92396L4.22816 3.80967L4.41864 3.92396L4.34245 3.73348L4.53292 3.5811H4.30434Z"
                  fill="white"/>
                <path
                  d="M5.48574 3.5811L5.40955 3.39062L5.33336 3.5811H5.14288L5.29526 3.73348L5.25717 3.92396L5.40955 3.80967L5.60003 3.92396L5.52383 3.73348L5.67622 3.5811H5.48574Z"
                  fill="white"/>
                <path
                  d="M6.6664 3.5811L6.59022 3.39062L6.51402 3.5811H6.32355L6.47592 3.73348L6.39974 3.92396L6.59022 3.80967L6.78069 3.92396L6.7045 3.73348L6.85688 3.5811H6.6664Z"
                  fill="white"/>
                <path
                  d="M7.8478 3.5811L7.77161 3.39062L7.69541 3.5811H7.50494L7.65732 3.73348L7.58113 3.92396L7.77161 3.80967L7.96208 3.92396L7.88589 3.73348L8.03828 3.5811H7.8478Z"
                  fill="white"/>
                <path
                  d="M9.02842 3.5811L8.95225 3.39062L8.87608 3.5811H8.68561L8.83795 3.73348L8.76178 3.92396L8.95225 3.80967L9.10468 3.92396L9.06655 3.73348L9.21889 3.5811H9.02842Z"
                  fill="white"/>
                <path
                  d="M5.40955 2.20947L5.37146 2.39994H5.14288L5.33336 2.55233L5.25717 2.7428L5.40955 2.62852L5.60003 2.7428L5.52383 2.55233L5.71431 2.39994H5.48574L5.40955 2.20947Z"
                  fill="white"/>
                <path
                  d="M6.59021 2.20947L6.55212 2.39994H6.32355L6.51402 2.55233L6.43783 2.7428L6.59021 2.62852L6.78069 2.7428L6.7045 2.55233L6.89498 2.39994H6.6664L6.59021 2.20947Z"
                  fill="white"/>
                <path
                  d="M7.77161 2.20947L7.73352 2.39994H7.50494L7.69542 2.55233L7.61923 2.7428L7.77161 2.62852L7.96208 2.7428L7.8859 2.55233L8.07638 2.39994H7.8478L7.77161 2.20947Z"
                  fill="white"/>
                <path
                  d="M9.02842 2.39994L8.95225 2.20947L8.91421 2.39994H8.68561L8.83795 2.55233L8.79991 2.7428L8.95225 2.62852L9.14272 2.7428L9.06655 2.55233L9.25702 2.39994H9.02842Z"
                  fill="white"/>
                <path
                  d="M6.47655 1.37119L6.40035 1.56166L6.59083 1.44737L6.74322 1.56166L6.70512 1.37119L6.8575 1.2188H6.66702L6.59083 1.02832L6.51465 1.2188H6.28607L6.47655 1.37119Z"
                  fill="white"/>
                <path
                  d="M7.65648 1.37119L7.58029 1.56166L7.77077 1.44737L7.92314 1.56166L7.88505 1.37119L8.03743 1.2188H7.84695L7.77077 1.02832L7.69458 1.2188H7.466L7.65648 1.37119Z"
                  fill="white"/>
                <path
                  d="M8.83787 1.37119L8.76162 1.56166L8.95217 1.44737L9.10451 1.56166L9.06639 1.37119L9.21881 1.2188H8.99021L8.95217 1.02832L8.87591 1.2188H8.6474L8.83787 1.37119Z"
                  fill="white"/>
              </svg>
              O'zbek tili
            </nuxt-link>
            <nuxt-link class="lang-btn" active-class="lang-active" :to="switchLocalePath('ru')">
              <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.601685 11.7329V14.9597C0.601685 16.2978 1.66419 17.2422 2.96281 17.2422H22.6389C23.9374 17.2422 25 16.2978 25 14.9597V11.7329H0.601685Z"
                  fill="#EC2227"/>
                <path
                  d="M2.96392 0.757812H22.64C23.917 0.757812 24.9575 1.68515 24.9575 2.99667V6.17993H0.646362V2.99667C0.646362 1.68515 1.6869 0.757812 2.96392 0.757812Z"
                  fill="white" stroke="#005EA5" stroke-width="0.15"/>
                <path d="M25 6.22363H0.601685V11.7329H25V6.22363Z" fill="#005EA5"/>
              </svg>
              Русский язык
            </nuxt-link>
          </div>

          <div class="form-group my-3">
            <label class="text-left label-title">To‘liq Familiya Ismingiz va Otangiz ismini kiriting</label>
            <el-input placeholder="Familiya Ism Otangiz ismi" v-model="form.full_name"></el-input>
          </div>

          <div class="form-group d-flex flex-column">
            <label>Hududingiz</label>
            <el-select v-model="form.region" placeholder="Qoraqalpog’iston Respublikasi">
              <el-option
                v-for="(item, index) in region"
                :key="index"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="form-group number-group">
            <label>Telefon raqamingiz</label>
            <div class="d-flex align-items-center">
              <button class="number-input-btn">+998</button>
              <el-input class="number-input" v-mask="'(##) - ### - ## - ##'" placeholder="(__) - ___ - __ - __"
                        v-model="form.phone_number"></el-input>
            </div>
          </div>
          <div class="form-group d-flex flex-column">
            <label>Jinsingiz</label>
            <div class="row">
              <div class="col-md-6">
                <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="form.gender" label="F"
                          border>Ayol
                </el-radio>
              </div>
              <div class="col-md-6">
                <el-radio class="w-100 d-flex align-items-center justify-content-center" v-model="form.gender" label="M"
                          border>Erkak
                </el-radio>
              </div>
            </div>
          </div>
          <div class="d-flex  justify-content-center mt-5">
            <button class="btn start" @click="submitForm" :disabled="!formValid">
              <div>
                <span>Boshlash</span>
                <p>So‘rovnomada faqat bir marta ishtirok etishingiz mumkin</p>
              </div>
              <svg class="ml-2" width="32" height="32" viewBox="0 0 32 32" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4 15.9998C4 15.2634 4.59696 14.6665 5.33333 14.6665H26C26.7364 14.6665 27.3333 15.2634 27.3333 15.9998C27.3333 16.7362 26.7364 17.3332 26 17.3332H5.33333C4.59696 17.3332 4 16.7362 4 15.9998Z"
                      fill="white" fill-opacity="0.6"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.7239 25.6095C17.2032 25.0888 17.2032 24.2445 17.7239 23.7239L25.4477 16L17.7239 8.27615C17.2032 7.75544 17.2032 6.91123 17.7239 6.39052C18.2445 5.86983 19.0888 5.86983 19.6095 6.39052L27.3333 14.1144C28.3747 15.1557 28.3747 16.8443 27.3333 17.8856L19.6095 25.6095C19.0888 26.1301 18.2445 26.1301 17.7239 25.6095Z"
                      fill="white"/>
              </svg>
            </button>
          </div>

         <!-- <pre>{{form}}</pre>-->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: ['formRaw'],
    data() {
      return {
        form: {
          full_name: '',
          region: null,
          phone_number: '',
          gender: null,
        },

       // formValid: false,
        /*options: [
          {
            title: 'Toshkent',
            id: 1
          },
          {
            title: 'Jizzakh',
            id: 2
          },
          {
            title: 'Navoiy',
            id: 3
          },
          {
            title: 'Buxoro',
            id: 4
          }
        ],*/


      }
    },
    mounted() {
      this.form = {...this.form, ...this.formRaw}
    },
    methods: {
      submitForm() {
        const phone_number = this.$phoneNumber(this.form.phone_number)
       // console.log(this.form.phone_number)

        this.$axios.post(`account/code-send/`,{phone_number} )
          .then((res) => {

            this.$emit('form', this.form)
          })
          .catch(error => {

            alert(error.response.data)
          })
          .finally(()=>{
          })
      }
    },
    computed: {
      formValid() {
        return !!(this.form.full_name && this.form.region && this.form.phone_number && this.form.gender);
      },

      ...mapState({
        region: state => state.region,
      }),
    },
    async fetch() {
      await this.$store.dispatch("fetchRegion");
    },
  }
</script>

<style lang="scss" scoped>

</style>
