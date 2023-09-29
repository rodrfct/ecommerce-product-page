<script setup lang="ts">
import { useCartStore } from '@/stores/cart' 

const cartDialog = ref<HTMLDialogElement | null>(null)

const { cart } = useCartStore()
</script>

<template>
    <header>
        <NuxtLink to="/"><img src="~/assets/images/logo.svg" alt="home"></NuxtLink>

        <nav>
            <div class="links">
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>

            <div class="personal">
                <img id="cart" src="~/assets/icons/icon-cart.svg" alt="" @click="cartDialog?.show">
                
                <img id="profile" src="~/assets/images/image-avatar.png" alt="">

                <dialog id="cart-dialog" ref="cartDialog">
                    <span>Cart</span>

                    <div v-if="cart.length">
                        {{ cart }}
                    </div>
                    <p v-else>Your cart is empty.</p>
                </dialog>
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

</template>

<style scoped>
header {
    --bottom-padding: 35px;
    padding: 20px 0 var(--bottom-padding) 0;
    border-bottom: 1px solid var(--Grayish-blue);
    display: flex;
    align-items: center;

    > a {
        display: inline;
        margin-right: 5%;
    }
}

nav {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.links {
    color: var(--Dark-grayish-blue);

    & a {
        margin: 0 5px;
        cursor: pointer;

        transition: border .2s ease;

        &:hover {
            padding-bottom: calc(var(--bottom-padding) + 5px);
            border-bottom: 3px solid var(--Orange);
        }
    }
}

.personal {
    /*This is just so the pfp doesn't move on hover */
    display: grid;
    align-items: center;
    grid-template-columns: 40px 40px;
    grid-template-rows: 30px;
    
    /* Cart */
    position: relative;

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

    > * {
        margin: 0 10px;
        cursor: pointer;
    }

    #profile {
        width: 30px;
        border-radius: 50%;

        &:hover {
            border: 1px solid var(--Orange);
        }
    }
}

</style>