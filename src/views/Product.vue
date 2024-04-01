<script setup lang="js">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { useApiProducts } from '@/stores/products'
import VInput from '@/components/form/VInput.vue'
import VToggle from '@/components/form/VToggle.vue'

const route = useRoute()
const products = useApiProducts()

const guessType = (field) => {
  switch (field) {
    case 'Активность':
      return 'toggle'
    case 'ID ТЕ':
    case 'Кто создал':
    case 'Кто изменил':
    case 'Опции':
    case 'ID дочерних ТЕ':
    case 'Комплектующие':
    case 'Производитель ТЕ':
    case 'Поставщик ТЕ':
      return 'relation'
    default:
      return 'text'
  }
}

const relationLink = (field, value) => {
  try {
    return value.split(',').map((id) => {
      return {
        id: id,
        href: (() => {
          switch (field) {
            case 'ID ТЕ':
            case 'ID дочерних ТЕ':
            case 'Опции':
              return `https://smttech.bitrix24.ru/crm/catalog/21/product/${id}/`
            case 'Комплектующие':
              return `https://b24-7jzv3s.bitrix24.ru/crm/company/details/${id}/`
            case 'Кто создал':
            case 'Кто изменил':
              return `https://smttech.bitrix24.ru/company/personal/user/${id}/`
            case 'Производитель ТЕ':
            case 'Поставщик ТЕ':
              return `https://smttech.bitrix24.ru/crm/company/details/${id}/`
            default:
              return '#'
          }
        })()
      }
    })
  } catch (e) {
    console.log(value)
    return []
  }
}

const toId = (field) => {
  return field.toLowerCase().replace(/ /g, '_')
}

watch(() => route.params, products.updateCurrent)
onMounted(products.updateCurrent)
</script>

<template>
  <template v-if="!_.isEmpty(products.current)">
    <h1 class="text-xl font-black my-2.5">
      {{ products.current['Наименование'] }}
    </h1>
    <div class="mb-6" v-for="(value, field) in products.current">
      <v-input
        v-if="guessType(field) === 'text' || guessType(field) === 'relation'"
        :id="toId(field)"
        :title="field"
        :value="value"
        placeholder="John"
      >
        <template v-if="guessType(field) === 'relation' && !_.isEmpty(relationLink(field, value))">
          Открыть в Bitrix:
          <template
              v-for="link in relationLink(field, value)">
            <a
              :href="link.href"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {{ link.id }}
            </a>
          </template>
        </template>
      </v-input>

      <v-toggle v-else-if="guessType(field) === 'toggle'" :value="value">
        {{ field }}
      </v-toggle>
    </div>
  </template>
</template>
