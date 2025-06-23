import request from '../utils/request'

export function getWareHouses() {
  return request({
    url: '/login',
    headers: {
      isToken: false,
    },
    method: 'get',
  })
}

export function getMaterials(warehouseId) {
  const data = {
    warehouseId,
  }
  return request({
    url: '/material',
    headers: {
      isToken: false,
    },
    method: 'get',
    data: data,
  })
}

export function materialStorage(warehouseId, materialId, addCount) {
  const data = {
    warehouseId,
    materialId,
    addCount,
  }
  return request({
    url: '/material/storage',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}
