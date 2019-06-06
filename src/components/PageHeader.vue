<template>
  <nav class="page_header">
    <h1>Write Blog Every Week</h1>
  </nav>
</template>

<script>
export default {
  name: 'page-header'
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'IsaaxFont';
  src: url('~src/assets/fonts/IsaaxOrigin-Regular.woff2');
}

nav {
  position: fixed;
  width: 1440px;
  height: 90px;
  left: 0px;
  top: 0px;

  background: #000000;
}

nav h1 {
  position: fixed;
  width: 1440px;
  height: 90px;
  margin: 0;

  font-family: 'IsaaxFont';
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

ul li {
  text-align: left;
  list-style: none;
}
</style>
