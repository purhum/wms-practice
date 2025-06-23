<template>
  <el-menu
    default-active="2"
    text-color="beige"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    background-color="rgb(51.2, 126.4, 204)"
    router
  >
    <el-menu-item index="welcome">
      <el-icon><Menu /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Warehouse</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Tasks</span></template>
        <el-menu-item index="t-rms">Raw Material Storage</el-menu-item>
        <el-menu-item index="t-rmo">Raw Material Outflow</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Report Forms">
        <el-menu-item index="rpt-inventory">Inventory</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="rpt-task">
        <template #title><span>Task</span></template>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="settings">
      <el-icon><setting /></el-icon>
      <template #title>Settings</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.btn-menu-collapse {
  margin-right: 0;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
