<template>
  <div>
    <div class="home-main">
      <div class="content">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted()
  {
    let user= localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:SignUp});
    }
  }
};
</script>
