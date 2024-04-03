import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/helpers'

class Category {
  id //: number
  name //: string
  parent //: number | Category
  children //: Category[]

  constructor(id, name, parent, children = []) {
    this.id = parseInt(id)
    this.name = name
    this.parent = parseInt(parent)
    this.children = children
  }

  get count() {
    return this.children.reduce((acc, child) => acc + child.count, this.children.length)
  }
}

const listToTreeMap = (list, idField = 'id', nameField = 'name', parentField = 'parent') => {
  const map = {}

  for (const item of list) {
    let category = new Category(item[idField], item[nameField], item[parentField])

    map[category.id] = category
  }

  for (const [key, item] of Object.entries(map)) {
    if (item.parent) {
      item.parent = map[item.parent]
      map[item.parent.id].children.push(item)
    }
  }

  return map
}

export const useApiCategories = defineStore('categories', () => {
  const list = ref([])

  const call = async () => {
    const { data } = await api.get('', {
      params: {
        getSections: true
      }
    })

    list.value = listToTreeMap(data, 'ID', 'NAME', 'SECTION_ID')
  }

  return { list, call }
})
