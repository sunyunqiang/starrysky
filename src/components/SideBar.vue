<template>
  <div id="sidebar">
    <div>
      <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <div id="game_img">
          <img src="@/../static/images/game_img.png">
          <p id="game_name">大皇帝OL</p>
        </div>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航3</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>


</script>
<style scoped>
#game_img {
	padding-top: 10px
}

#game_name {
  padding-top: 0;
  margin-top: 0;
  font-size: 10px;
  color:#fff;
}

.el-menu {
  height: 100vh;
}

.el-submenu {
  padding-left: 0 !important;
}

.el-menu-item {
  padding-left: 0 !important;
  font-size: 5px;
}

</style>
