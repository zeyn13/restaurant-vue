<template>
  <div>
    <div class="home-main">
      <div class="content">
        <span>Welcome foodies</span>
        <h3>Original taste from Mexico 😋</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil rerum
          rem quidem, deserunt in non.
        </p>
        <router-link @click="scrollToTop()" to="/menu" class="btn"
          >Order now</router-link
        >
      </div>
      <div class="image">
        <img src="../assets/images/b.png" alt="" class="home-img" />
        <img src="../assets/images/a.png" alt="" class="home-parallax-img" />
      </div>
    </div>

    <div class="home-category">
      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/taco-img.png" alt="" />
        <h3>Taco</h3>
      </router-link>

      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/burrito-img.png" alt="" />
        <h3>Burrito</h3>
      </router-link>

      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/nachos-img.png" alt="" />
        <h3>Nachos</h3>
      </router-link>

      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/salad-img.png" alt="" />
        <h3>Sides</h3>
      </router-link>

      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/dessert-img.png" alt="" />
        <h3>Dessert</h3>
      </router-link>

      <router-link @click="scrollToTop()" to="/menu" class="box">
        <img src="../assets/images/coca-img.png" alt="" />
        <h3>Drink</h3>
      </router-link>
    </div>

    <div class="home-banner">
      <div class="grid-banner row">
        <div class="grid col-md-4">
          <img src="../assets/images/dis-1.jpg" alt="" />
          <div class="content">
            <span>Special offer</span>
            <h3>Upto 50% off</h3>
            <router-link @click="scrollToTop()" to="/menu" class="btn"
              >Order now</router-link
            >
          </div>
        </div>

        <div class="grid col-md-4">
          <img src="../assets/images/dis-2.jpg" alt="" />
          <div class="content center">
            <span>Special offer</span>
            <h3>Upto 25% extra</h3>
            <router-link @click="scrollToTop()" to="/menu" class="btn"
              >Order now</router-link
            >
          </div>
        </div>

        <div class="grid col-md-4">
          <img src="../assets/images/dis-3.jpg" alt="" />
          <div class="content center">
            <span>Limited offer</span>
            <h3>100% cashback</h3>
            <router-link @click="scrollToTop()" to="/menu" class="btn"
              >Order now</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="home-about">
      <div class="image">
        <img src="../assets/images/about-img.jpg" alt="" />
      </div>
      <div class="content">
        <span>Why choose us ?</span>
        <h3 class="title">What's make our food delicious !</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          temporibus assumenda inventore quae optio et odio, ipsa dolores, nam
          dolorum eveniet fugiat qui praesentium architecto repudiandae incidunt
          dolorem quia doloribus!
        </p>
        <router-link @click="scrollToTop()" to="/about" class="btn"
          >read more</router-link
        >

        <div class="icons-container">
          <div class="icons">
            <img src="../assets/images/serv-1.png" alt="" />
            <h3>Fast Delivery</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-2.png" alt="" />
            <h3>Fresh Food</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-3.png" alt="" />
            <h3>Best Quality</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-4.png" alt="" />
            <h3>24/7 Support</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: SignUp });
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.home-main,
.home-about,
.home-banner,
.home-category {
  padding: 2rem 9%;
}

.home-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  position: relative;
  overflow: hidden;
}

.home-main .content {
  flex: 1 1 41rem;
}

.home-main .content span {
  font-size: 2rem;
  color: #27ae60;
}
.home-main .content h3 {
  font-size: 4rem;
  color: #130f40;
  padding-top: 1rem;
}

.home-main .content p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
  padding: 1rem 0;
}

.home-main .image {
  flex: 1 1 41rem;
  margin: 2rem 0;
  pointer-events: none;
}

.home-main .image .home-img {
  width: 100%;
  margin-top: 5rem;
}

.home-main .home-parallax-img {
  position: absolute;
  top: -15rem;
  right: -15rem;
  width: 80vw;
}
</style>
