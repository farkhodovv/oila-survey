<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="pinInput">
          <div class="pinInput__header d-flex justify-content-center">
            <div class="icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M28 15.9998C28 15.2634 27.403 14.6665 26.6667 14.6665H6C5.2636 14.6665 4.66667 15.2634 4.66667 15.9998C4.66667 16.7362 5.2636 17.3332 6 17.3332H26.6667C27.403 17.3332 28 16.7362 28 15.9998Z"
                      fill="#152340" fill-opacity="0.6"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.2762 25.6095C14.7969 25.0888 14.7969 24.2445 14.2762 23.7239L6.55238 16L14.2762 8.27615C14.7969 7.75544 14.7969 6.91123 14.2762 6.39052C13.7556 5.86983 12.9113 5.86983 12.3906 6.39052L4.66678 14.1144C3.62545 15.1557 3.62545 16.8443 4.66678 17.8856L12.3906 25.6095C12.9113 26.1301 13.7556 26.1301 14.2762 25.6095Z"
                      fill="#152340"/>
              </svg>
            </div>
            <h5>Kodni kiriting</h5>
          </div>
          <div class="pinInput__upbody">
            <span>+998-XX-XXX-XX-XX raqamiga yuborilgan 6 xonali kodni kiriting</span>
          </div>
          <div class="pinInput__input">
            <OtpInput
              ref="otpInput"
              input-classes="otp-input"
              separator="-"
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <div class="pinInput__button d-flex align-items-center justify-content-center flex-column mt-5">
            <button>
              Tasdiqlash
            </button>
            <nuxt-link to="/" tag="span" class="mt-4">Bu so‘rovnomada qatnashib bo‘lganman</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtpInput from "@bachdgvn/vue-otp-input";

export default {
  components: {
    OtpInput
  },
}
</script>
<style lang="scss" scoped>
</style>
