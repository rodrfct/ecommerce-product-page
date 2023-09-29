type Item = {
    pid:number,
    productName: string,
    amount: number,
    finalPrice: number,
}

export const useCartStore = defineStore('cart', () => {

    const cart = ref<Item[]>([])

    function addToCart(newItem: Item): void {
        const itemInList = cart.value.find(item => item.pid === newItem.pid)

        if (itemInList) {
            itemInList.amount += newItem.amount
            return
        }

        cart.value.push({
            pid: newItem.pid,
            productName: newItem.productName,
            amount: newItem.amount,
            finalPrice: newItem.finalPrice,
        })
    }

    function deleteFromCart(id: number): void {
        console.log(cart.value);
        cart.value = cart.value.filter(a => a.pid !== id);
        console.log(cart.value)
    }
  
    return { cart, addToCart, deleteFromCart }
  })