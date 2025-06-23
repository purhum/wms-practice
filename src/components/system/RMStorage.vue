<template>
  <div class="app-container">
    <el-header class="rms-header">Raw Material Storage</el-header>
    <el-card>
      <el-row class="mb8" type="flex" justify="space-between">
        <el-col style="font-size: medium"
          ><span style="font-size: large">Warehouse</span>(click to proceed storage)
        </el-col>
      </el-row>

      <el-table
        v-loading="loading"
        stripe
        :data="warehouseList"
        empty-text="No Warehouse"
        @cell-click="storage"
      >
        <el-table-column label="Id" prop="warehouseId" />
        <el-table-column label="Name" prop="warehouseName" />
        <el-table-column label="Location" prop="warehouseLocation" />
        <el-table-column label="State" prop="state" />
      </el-table>
    </el-card>

    <!-- <el-card>
      <el-row :gutter="10" class="mb8" type="flex" justify="space-between">
        <el-col :span="6"><span style="font-size: large">Material</span></el-col>
        <el-col :span="1.5"> </el-col>
      </el-row>

      <el-table v-loading="loading" :data="materialList" class="mt20" empty-text="No Material">
        <el-table-column label="Name" prop="materialName" />
        <el-table-column label="Type" prop="materialLocation" />
        <el-table-column label="Number" prop="number" />
        <el-table-column label="Action" class-name="small-padding fixed-width">
        </el-table-column>
      </el-table>
    </el-card> -->

    <el-dialog
      :title="dialog.title"
      v-model="dialog.visible"
      width="500px"
      append-to-body
      :close-on-click-modal="false"
    >
      <el-form :model="selectedMaterial" label-width="100px">
        <el-form-item label="MaterialId:">
          <el-input v-model="selectedMaterial.materialId" disabled placeholder="materialId" />
        </el-form-item>
        <el-form-item label="MaterialName:">
          <el-select
            v-model="selectedMaterialName"
            placeholder="materialName"
            @change="selectMaterial"
          >
            <el-option
              v-for="item in materialList"
              :key="item.materialName"
              :value="item.materialName"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="MaterialType:">
          <el-input v-model="selectedMaterial.materialType" disabled placeholder="materialType" />
        </el-form-item>
        <el-form-item label="Add Number:">
          <el-input-number v-model="addCount" :min="0" />
          <el-alert type="success" v-if="selectedMaterial.materialCount" show-icon :closable="false"
            >Count Change from [{{ selectedMaterial.materialCount }}] to [{{ total() }}].</el-alert
          >
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button
            :loading="buttonLoading"
            type="primary"
            :disabled="!selectedMaterial.materialCount || addCount <= 0"
            @click="submitForm"
            >Submit</el-button
          >
          <el-button @click="cancel">Cancel</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { getWareHouses, getMaterials, materialStorage } from '@/api/rawMaterial'
import { onMounted, reactive, ref, unref } from 'vue'

const warehouseList = ref([])
const selectedWarehouse = ref('')
const materialList = ref([])
const selectedMaterial = ref({
  materialId: '',
  materialName: '',
  materialType: '',
  materialCount: 0,
})
const selectedMaterialName = ref('')
const addCount = ref(0)

const buttonLoading = ref(false)
const loading = ref(false)
const dialog = reactive({
  visible: false,
  title: '',
})

const getWarehouseList = async () => {
  loading.value = true
  const res = await getWareHouses().finally(() => {
    loading.value = false
  })
  // fake data
  console.log('fake res:' + res.data)
  warehouseList.value = [
    {
      warehouseId: '1',
      warehouseName: 'east-w',
      warehouseLocation: 'east',
      state: 'inUse',
    },
    {
      warehouseId: '2',
      warehouseName: 'south-w',
      warehouseLocation: 'south',
      state: 'inUse',
    },
    {
      warehouseId: '3',
      warehouseName: 'west-w',
      warehouseLocation: 'west',
      state: 'disused',
    },
  ]
}

const total = () => {
  return selectedMaterial.value.materialCount + addCount.value
}

const selectMaterial = (name) => {
  const m_list = unref(materialList)
  const material = m_list.find((m) => m.materialName === name)
  if (material) {
    selectedMaterial.value = material
  }
}

const storage = async (row) => {
  selectedWarehouse.value = row.warehouseId
  await getMaterials(row.warehouseId).finally(() => {
    dialog.visible = true
    dialog.title = `Material Storage [Warehouse: ${row.warehouseName}]`
    // fake data
    materialList.value = [
      {
        materialId: '1',
        materialName: 'Fe',
        materialType: 'metal',
        materialCount: 100,
      },
      {
        materialId: '2',
        materialName: 'Cu',
        materialType: 'metal',
        materialCount: 200,
      },
      {
        materialId: '3',
        materialName: 'paper',
        materialType: 'other',
        materialCount: 100,
      },
    ]
  })
}
const submitForm = async () => {
  buttonLoading.value = true
  await materialStorage(warehouseList.value, selectedMaterial.value.materialId, addCount.value)
    .catch(() => {
      // eslint-disable-next-line no-undef
      ElMessage.success('Material Storage.(假的。)')
    })
    .finally(() => (buttonLoading.value = false))
  dialog.visible = false
  reset()
}

const cancel = () => {
  reset()
  dialog.visible = false
}

const reset = () => {
  selectedWarehouse.value = ''
  selectedMaterial.value = {
    materialId: '',
    materialName: '',
    materialType: '',
    materialCount: 0,
  }
  selectedMaterialName.value = ''
  addCount.value = 0
}

onMounted(async () => {
  await getWarehouseList()
})
</script>
<style>
.rms-header {
  border-radius: 50;
  height: 36px;
  align-content: center;
  background-color: #fffffe;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-tree-node__content {
  display: flex;
  align-items: center;
  height: 35px;
  cursor: pointer;
}
.el-message-box__content {
  font-size: 16px;
}
</style>
