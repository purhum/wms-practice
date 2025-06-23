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

export function materialStorage(materialId) {
  const data = {
    materialId,
  }
  return request({
    url: '/material',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}
