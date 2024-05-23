<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { api } from '@/helpers'

const props = defineProps({
  id: {
    type: String
  },
  field: {
    type: String
  }
})

const name = ref(props.id)

const link = () => {
  switch (props.field) {
    case 'ID ТЕ':
    case 'ID дочерних ТЕ':
    case 'ID родительских ТЕ':
    case 'Опции':
      return `https://smttech.bitrix24.ru/crm/catalog/21/product/${props.id}/`
    case 'Комплектующие':
      return `https://b24-7jzv3s.bitrix24.ru/crm/company/details/${props.id}/`
    case 'Кто создал':
    case 'Кто изменил':
      return `https://smttech.bitrix24.ru/company/personal/user/${props.id}/`
    case 'Производитель ТЕ':
    case 'Поставщик ТЕ':
      return `https://smttech.bitrix24.ru/crm/company/details/${props.id}/`
    default:
      return '#'
  }
}

const loadName = async () => {
  if (['Кто создал', 'Кто изменил'].includes(props.field)) {
    const { data } = await api.get('', {
      params: {
        getUser: props.id
      }
    })

    return data.NAME ? `${data.NAME} ${data.LAST_NAME}` : props.id
  }

  const { data } = await api.get('', {
    params: {
      getProduct: props.id
    }
  })

  return data['Наименование'] || props.id
}

onMounted(async () => {
  name.value = await loadName()
})
</script>

<template>
  <a :href="link()" class="text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
    {{ name }}
  </a>
</template>
