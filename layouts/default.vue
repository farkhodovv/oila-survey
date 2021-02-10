<template>
  <div class="home">
    <img src="/images/logo.svg" alt="">
    <Nuxt/>
    <div class="footer d-flex align-items-center justify-content-center">
      <span>Created with  🖤️  by <a href="https://uicgroup.org/"><img src="/images/uic.svg" alt=""></a></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-image: url("/images/bg.png");
  background-repeat: no-repeat;
  background-position: top, top;
  background-size: cover;
  height: 85vh;
  display: flex;
  flex-direction: column;

  img {
    margin: 50px 0
  }

  .footer {
    span {
      font-size: 13px;
      line-height: 147.5%;
      margin-right: 3px;
      letter-spacing: 0.01em;
      color: #B6B6B6;

      img {
        margin-left: 3px;
      }
    }
  }
}
</style>
