<template>
  <nav class="page_header"><h1>Write Blog Every Week</h1>
  <ul>
    <li><h2>1. 週に1記事更新すること</h2></li>
    <li><h2>2. 更新できなかったら翌週2記事更新すること</h2></li>
    <li><h2>3. 3記事更新が滞った場合退会となる</h2></li>
  </ul>
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

h1 {
  font-family: 'IsaaxFont';
  text-align: center;
  font-size: 64px;
  color: rgb(0, 0, 0);
}

ul li{
  text-align: left;
  list-style: none;
}
</style>
