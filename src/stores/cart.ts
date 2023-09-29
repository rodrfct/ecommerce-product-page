type Item = { pid:number, amount: number }

export const useCartStore = defineStore('cart', () => {

    const cart = ref<Item[]>([])

    function addToCart(newItem: Item): void {
        const itemInList = cart.value.find(item => item.pid === newItem.pid)

        if (itemInList) {
            itemInList.amount += newItem.amount
            return
        }

        cart.value.push({ pid: newItem.pid, amount: newItem.amount})
    }
  
    return { cart, addToCart }
  })