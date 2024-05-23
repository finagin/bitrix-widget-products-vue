<script setup lang="js">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { useApiProducts } from '@/stores/products'
import VInput from '@/components/form/VInput.vue'
import VToggle from '@/components/form/VToggle.vue'
import RelatedLink from '@/components/form/RelatedLink.vue'

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
    case 'ID родительских ТЕ':
    case 'Комплектующие':
    case 'Производитель ТЕ':
    case 'Поставщик ТЕ':
      return 'relation'
    default:
      return 'text'
  }
}

const relationLink = (value) => {
  try {
    return value.split(',')
  } catch (e) {
    return []
  }
}

const toId = (field) => {
  return field.toLowerCase().replace(/ /g, '_')
}

const groups = computed(() => {
  if (_.isEmpty(products.current)) {
    return {}
  }

  const result = {
    'Раздел - Размещение ТЕ': [],
    'Раздел - Общая информация о ТЕ': [],
    'Коммерческие параметры': [],
    'Раздел - Сервисная информация': [],
    'Массогабаритные характеристики': [],
    'Электропитание': [],
    'Пневмопитание': [],
    'Подключение азота': [],
    'Вытяжная вентиляция': [],
    'Гидропитание': [],
    'Комплектующие': [],
    'Опции': [],
    LOG: []
  }

  for (const [field, value] of Object.entries(products.current)) {
    switch (field) {
      case 'Раздел ТК':
      case 'ID ТЕ':
      case 'ID дочерних ТЕ':
      case 'ID родительских ТЕ':
        result['Раздел - Размещение ТЕ'].push({ field, value })
        break
      case 'Тип ТЕ':
      case 'Наименование':
      case 'Альтернативное наименование':
      case 'Производитель ТЕ':
      case 'Поставщик ТЕ':
      case 'Наименование ТЕ от поставщика':
      case 'Артикул':
      case 'Артикул СМТтех':
      case 'Модель':
      case 'Основное фото ТЕ':
      case 'Описание ТЕ':
      case 'Особенности ТЕ':
      case 'Спецификация ТЕ':
      case 'Базовая комплектация ТЕ':
      case 'Галерея ТЕ':
      case 'Видеоматериалы ТЕ':
      case 'Копия':
      case 'БУ':
        result['Раздел - Общая информация о ТЕ'].push({ field, value })
        break
      case 'Закупочная цена':
      case 'Валюта закупочной цены':
      case 'Скидка поставщика':
      case 'Минимальная партия заказа':
      case 'Комментарий':
      case 'Доставка':
      case 'Валюта доставки':
      case 'Себестоимость':
      case 'Валюта себестоимости':
      case 'Сбытовая цена':
      case 'Валюта сбытовой цены':
      case 'Ставка НДС':
      case 'Продажный коэффициент':
      case 'Прибыль':
      case 'Валюта прибыли':
      case 'Маржинальность':
      case 'Стоимость ПНР':
      case 'Валюта стоимости ПНР':
        result['Коммерческие параметры'].push({ field, value })
        break
      case 'Раздел - Сервисная информация':
        result['Раздел - Сервисная информация'].push({ field, value })
        break
      case 'Длина, мм':
      case 'Ширина, мм':
      case 'Высота, мм':
      case 'Вес, кг':
        result['Массогабаритные характеристики'].push({ field, value })
        break
      case 'Электропитание':
      case 'Мощность, Вт':
        result['Электропитание'].push({ field, value })
        break
      case 'Давление пневмопитания, бар':
      case 'Расход воздуха, л/мин':
      case 'Диаметр подключения пневмопитания, мм':
        result['Пневмопитание'].push({ field, value })
        break
      case 'Расход азота, л/мин':
      case 'Диаметр подключения азота, мм':
        result['Подключение азота'].push({ field, value })
        break
      case 'Объем вытяжки, м³/ч':
      case 'Количество точек подключения вентиляции':
      case 'Диаметр подключения вентиляции, мм':
        result['Вытяжная вентиляция'].push({ field, value })
        break
      case 'Давление гидропитания, бар':
      case 'Расход воды, л/час':
        result['Гидропитание'].push({ field, value })
        break
      case 'Комплектующие':
        result['Комплектующие'].push({ field, value })
        break
      case 'Опции':
        result['Опции'].push({ field, value })
        break
      case 'Дата создания':
      case 'Кто создал':
      case 'Дата изменения':
      case 'Кто изменил':
        result['LOG'].push({ field, value })
        break
      default:
        console.log(field)
    }
  }

  return result
})

watch(() => route.params, products.updateCurrent)
onMounted(products.updateCurrent)
</script>

<template>
  <template v-if="!_.isEmpty(products.current)">
    <h1 class="text-2xl font-black my-2.5">
      {{ products.current['Наименование'] }}
    </h1>
    <template :key="groupName" v-for="(groupFields, groupName) in groups">
      <h2 class="text-lg font-bold my-2.5">{{ groupName }}</h2>
      <div class="mb-6" v-for="field in groupFields">
        <v-input
          v-if="guessType(field.field) === 'text' || guessType(field.field) === 'relation'"
          :id="toId(field.field)"
          :title="field.field"
          :value="field.value"
          placeholder="John"
        >
          <template
            v-if="guessType(field.field) === 'relation' && !_.isEmpty(relationLink(field.value))"
          >
            Открыть в Bitrix: /
            <template :key="id" v-for="id in relationLink(field.value)">
              <RelatedLink :id="id" :field="field.field" />
              /
            </template>
          </template>
        </v-input>

        <v-toggle v-else-if="guessType(field.field) === 'toggle'" :value="field.value">
          {{ field.field }}
        </v-toggle>
      </div>
    </template>
  </template>
</template>
