import { ref, computed } from '@vue/composition-api'

export const articles = ref(
  JSON.parse(localStorage.getItem('order_cart')) || []
)

export default function useCart() {
  const counter = computed(() => {
    let items = 0
    articles.value.forEach((element) => {
      items += element.counter
    })

    return items
  })

  const save = () => {
    localStorage.setItem('order_cart', JSON.stringify(articles.value))
  }

  const add = (name, size) => {
    let index = getIndex(name, size)
    if (index === -1) {
      articles.value.unshift({ name, size, counter: 1 })
    }
    if (index >= 0) {
      articles.value[index].counter++
    }
    save()
  }

  const remove = (index) => {
    articles.value.splice(index, 1)
    save()
  }

  const clear = () => {
    articles.value = []
    localStorage.remove('order_cart')
  }

  const getIndex = (item, size) => {
    return articles.value.findIndex(
      (el) => el.name === item && el.size === size
    )
  }

  return {
    articles,
    counter,
    add,
    remove,
    clear,
  }
}
