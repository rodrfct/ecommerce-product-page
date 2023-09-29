<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cartDialog = ref<HTMLDialogElement | null>(null)

const { cart } = useCartStore()

function toggleCart(): void {
    if (cartDialog.value?.open) {
        cartDialog.value.close()
    } else { cartDialog.value?.show() }
}
</script>

<template>
    <img id="cart" src="~/assets/icons/icon-cart.svg" alt="" @click="toggleCart">

    <dialog id="cart-dialog" ref="cartDialog">
        <span>Cart</span>

        <div v-if="cart.length">
            <div v-for="item in cart" class="item"></div>

            <button type="button">Checkout</button>
        </div>
        <p v-else>Your cart is empty.</p>
    </dialog>
</template>

<style>
#cart {
    cursor: pointer;
}

#cart-dialog {
    cursor: initial;
    top: 150%;
    /* */
    left: -300%;

    aspect-ratio: 4/3;
    width: 300px;
    padding: 0;
    border: none;
    border-radius: 10px;

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
        pointer-events: all;
    }

    & span,
    & p {
        padding: 15px;
        font-weight: 700;
    }

    & span {
        display: block;
        border-bottom: 1px solid var(--Grayish-blue);
    }

    & p {
        color: var(--Dark-grayish-blue);
        text-align: center;
        margin-top: 20%;
    }
}
</style>