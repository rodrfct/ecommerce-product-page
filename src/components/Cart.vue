<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cartDialog = ref<HTMLDialogElement | null>(null)

const { cart, deleteFromCart } = useCartStore()

const quantity = computed<number>((): number => {
    let q: number = 0

    cart.forEach(i => q += i.amount)

    return q
})

function toggleCart(): void {
    if (cartDialog.value?.open) {
        cartDialog.value.close()
    } else { cartDialog.value?.show() }
}
</script>

<template>
    <button id="cart" type="button">
        <div v-show="quantity" class="counter">{{ quantity }}</div>
        <img src="~/assets/icons/icon-cart.svg" alt="" @click="toggleCart">
    </button>

    <dialog id="cart-dialog" ref="cartDialog">
        <span>Cart</span>

        <div v-if="cart.length" id="cart-content">
            <div v-for="item in cart" class="item">
                <img src="~/assets/images/image-product-1-thumbnail.jpg" alt="">

                <div class="text">
                    <p>{{ item.productName }}</p>
                    <span>{{ `$${item.finalPrice.toFixed(2)}` }} x {{ item.amount }} <b>{{ `$${(item.finalPrice * item.amount).toFixed(2)}` }}</b></span>
                </div>

                <img class="delete-btn" src="~/assets/icons/icon-delete.svg" alt=""
                @click="deleteFromCart(item.pid)">
            </div>

            <button type="button">Checkout</button>
        </div>
        <p v-else>Your cart is empty.</p>
    </dialog>
</template>

<style scoped>
#cart {
    cursor: pointer;
    background-color: inherit;
    border: none;

    position: relative;

    .counter {
        position: absolute;
        top: -20%;
        right: 0;

        background-color: var(--Orange);
        color: white;
        font-size: .8em;
        font-weight: 700;
        padding: 0 6px;
        border-radius: 45%;
    }
}

#cart-dialog {
    top: 150%;
    left: -300%;

    --width: 350px;
    width: var(--width);
    min-height: calc(var(--width) / 4 * 3);
    padding: 0;
    border: none;
    border-radius: 10px;

    z-index: 5;
    box-shadow: 1px 1px 10px 1px var(--Grayish-blue);

    /* Transition  */
    display: block;
    pointer-events: none;
    translate: 0 -50%;
    opacity: 0;
    transition: all .5s ease;

    &[open] {
        translate: 0;
        opacity: 1;
        pointer-events: initial;
    }

    > span,
    > p {
        padding: 15px;
        font-weight: 700;
    }

    > span {
        display: block;
        border-bottom: 1px solid var(--Grayish-blue);
    }

    > p {
        color: var(--Dark-grayish-blue);
        text-align: center;
        margin-top: 20%;
    }

    /* Not the best for reusability tbh */
    @media (width <= 375px) {
        top: 9%;
        left: 0;
        right: 0;
    }
}

#cart-content {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .item {
        display: grid;
        grid-template: 1fr / 15% 1fr auto;
        gap: 10px;
        place-items: center;

        color: var(--Dark-grayish-blue);

        & img {
            aspect-ratio: 1/1;
            width: 100%;
            border-radius: 5px;
        }

        & p {
            margin: 0;
        }

        & b {
            color: initial;
        }

        .delete-btn {
            cursor: pointer;
        }
    }

    & button {
        aspect-ratio: 6/1;
        width: 100%;
        margin-top: 10px;

        background-color: var(--Orange);
        color: white;
        font-weight: 700;

        border: none;
        border-radius: 10px;

        align-self: flex-end;

        cursor: pointer;
    }
}
</style>