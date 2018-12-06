<template>
  <nav class="page_footer">
    <ul class="links">
      <li><a class="link" href="https://join.slack.com/t/write-blog-every-week/shared_invite/enQtNDQwMjM1MjU3NTU2LWMzOGJkMTcyODQ1YTU3NDE2M2E3ZDUwMDNmODFhMDhmMTdhZGM0ODU1NDFhOTIyODRlYzg0ZDU2YjExZmZkMGI">Slack</a></li>
      <li><a class="link" href="https://twitter.com/yoshitaku_jp">このサイトを作った人</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'page-footer',
}
</script>

<style scoped>
footer {
	bottom: 0;
	width: 100%;
	height: 50px;
	position: absolute;
}

.links {
    display: flex;
    justify-content: center;
    align-items: center;
}
.links li {
    position: relative;
    list-style: none;
    padding: 0 10px;
}
.links li:not(:first-child):before {
    position: absolute;
    content: '/';
    left: -3px;
    top: 2px;
    color: #000000;
}
.links li a {
    text-decoration: none;
    color: #000000;
}
</style>
