<template>
  <div class="sidebar">
    <el-scrollbar class="sidebar-menu">
      <el-menu
        class="el-menu-vertical-demo"
        default-active="2"
        background-color="#545c64"
      >
        <el-menu-item v-for="(item, index) in 20" :key="index" :index="index">
          <el-icon><setting /></el-icon>
          <span>{{ item }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="user">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100vh;

  .sidebar-menu {
    height: calc(100vh - 200px);

    .el-menu {
      border-right: none;
    }
  }

  .user {
    height: 200px;
    background-color: orange;
  }
}
</style>
