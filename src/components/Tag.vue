<template>
  <div id="tag">
    <div id="tmain">
      <el-container>
        <el-aside id="tside">
          <sideBar></sideBar>
        </el-aside>
        <div id="tcontent">
          <el-container>
            <!-- <el-header>
              <topBar></topBar>
            </el-header> -->
            <el-main>
              <mcontent></mcontent>
            </el-main>
            <!-- <el-footer>Footer</el-footer> -->
          </el-container>
        </div>
      </el-container>
    </div>
  </div>
</template>
<script>
import topBar from '@/components/TopBar'
import sideBar from '@/components/SideBar'
import mcontent from '@/components/Content'
export default {
  components: { topBar, sideBar, mcontent }
}

</script>
<style scoped>
#tmain {
  display: flex;
}

#tall {
  display: flex;
  flex-direction: row;
}

#tcontent {
  display: flex;
  flex-direction: column;
  width: 95vw;
}

#tside {
  width: 5vw !important;
}

.el-header,
.el-footer {
  background-color: #E4E4E4;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  padding: 0;
}

.el-container {
	height: 100vh;
}

</style>
