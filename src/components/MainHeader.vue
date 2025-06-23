<template>
  <div class="header">
    <div class="sys-name">
      <el-text class="mx-2" type="primary" size="large"> Warehouse Management System </el-text>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <el-container class="user-name">
          <el-text class="user-span">
            {{ username }}
          </el-text>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('admin')
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 22px;
}
.sys-name {
  float: left;
  width: 250px;
  height: 100%;
  align-content: center;
}
.header-right {
  float: right;
  padding-right: 10px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.user-name {
  margin-left: 5px;
}
.user-span {
  cursor: pointer;
}
</style>
