import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://serverlink.smttech.ru/golovolomka/Products/',
  params: {
    dostup: 'mysecretkey'
  }
})

export const boolValue = (
  value: any,
  trueCaption: string,
  falseCaption: string,
  unknownCaption: string
): string => {
  switch (value) {
    case 'true':
    case 'Y':
      return trueCaption
    case 'false':
    case 'N':
      return falseCaption
    default:
      return unknownCaption
  }
}
