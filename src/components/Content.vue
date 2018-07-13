<template>
  <div id="content">
    <el-tabs value="fifth">
      <el-tab-pane label="标签概览" name="first">标签概览</el-tab-pane>
      <el-tab-pane label="标签查询" name="second">
        <tagQuery></tagQuery>
      </el-tab-pane>
      <el-tab-pane label="用户查询" name="third">用户查询</el-tab-pane>
      <el-tab-pane label="标签监控" name="fourth">标签监控</el-tab-pane>
      <el-tab-pane label="标签配置" name="fifth">
        <tagSettings></tagSettings>
      </el-tab-pane>
      <el-tab-pane label="图表配置" name="sixth">图表配置</el-tab-pane>
    </el-tabs>
    <!-- <div id="topbar">
      <topBar></topBar>
    </div> -->
  </div>
</template>
<script>
import topBar from '@/components/TopBar'
import tagSettings from '@/pages/tag/TagSettings'
import tagQuery from '@/pages/tag/TagQuery'
export default {
  components: { topBar, tagSettings, tagQuery }
}

</script>
<style scoped>
/*#topbar {
	line-height: 40px;
	padding: 10px;
	background: #E4E4E4;
}*/

</style>
