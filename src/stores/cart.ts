type Item = {
    pid:number,
    productName: string,
    amount: number,
    finalPrice: number,
}

export const useCartStore = defineStore('cart', () => {

    const cart = ref<Item[]>([])

    function addToCart(newItem: Item): void {
        // If no amount is selected, do nothing
        if(!newItem.amount) return

        // If the item is already in the cart, add more units        
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
        const index = cart.value.findIndex(a => a.pid === id);

        if (index !== -1) {
            cart.value.splice(index, 1);
        }
    }
  
    return { cart, addToCart, deleteFromCart }
  })