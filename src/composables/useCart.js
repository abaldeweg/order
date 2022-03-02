import { ref, computed } from '@vue/composition-api'

export const articles = ref(
  JSON.parse(localStorage.getItem('order_cart')) || []
)

export default function useCart() {
  const counter = computed(() => {
    let counter = 0
    articles.value.forEach((element) => {
      counter = counter + element.counter
    })

    return counter
  })

  const save = () => {
    localStorage.setItem('order_cart', JSON.stringify(articles.value))
  }

  const addItem = (item, size) => {
    let index = getIndex(item, size)
    if (index === -1) {
      articles.value.unshift({ name: item, counter: 1, size: size })
    }
    if (index >= 0) {
      articles.value[index].counter++
    }
    save()
  }

  const removeItem = (index) => {
    articles.value.splice(index, 1)
    save()
  }

  const clear = () => {
    articles.value = []
    localStorage.removeItem('order_cart')
  }

  const getIndex = (item, size) => {
    return articles.value.findIndex(
      (el) => el.name === item && el.size === size
    )
  }

  return {
    articles,
    counter,
    addItem,
    removeItem,
    clear,
  }
}
