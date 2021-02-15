<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="step">
          <div class="items">
            <h1 class="title">Xush kelibsiz Azizov Abdullaziz !</h1>
            <p class="text">This brief will help us get ready for the job so that we can do it the best for you.
            </p>
            <p> It depends on how clearly and comprehensively you answer the questions, how quickly we
              start speaking the same
              language in order to solve the tasks as quickly and efficiently as possible.</p>
          </div>
          <nuxt-link :to="localePath('/test')" class="d-flex flex-column align-items-center  justify-content-center mt-5" >
            <div class="start">
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
            </div>
            <nuxt-link to="" tag="span" class="mt-4">Bu so‘rovnomada qatnashib bo‘lganman</nuxt-link>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: rgba(73, 76, 78, 0.6);
}
</style>
