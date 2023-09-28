<script setup lang="ts">
const props = defineProps({
    id: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: {
        type: Number,
        required: false,

        validator(val: number) {
            return val <= 100 && val >= 0
        }
    }
})

const amount = ref<number>(0)

const newPrice = computed(() => {
    if (props.discount) {
        return (props.price * props.discount / 100).toFixed(2)
    }
})
</script>

<template>
    <div class="product-info">
        <h2>{{ manufacturer }}</h2>

        <h1>{{ productName }}</h1>

        <p>{{ description }}</p>

        <div class="price">
            <div v-if="discount" class="discount">
                <span id="new-price">{{ `$${newPrice}` }}</span>
                <span id="percenteage">{{ `${discount}%` }}</span>
            </div>

            <span id="og-price">{{ `$${price.toFixed(2)}` }}</span>
        </div>

        <div class="order">
            <div class="selector">
                <img src="~/assets/icons/icon-minus.svg" alt="">
                <p>{{ amount }}</p>
                <img src="~/assets/icons/icon-plus.svg" alt="">
            </div>

            <button type="button">
                <img id="cart" src="~/assets/icons/icon-cart.svg" alt="">

                Add to cart
            </button>
        </div>
    </div>
</template>

<style scoped>
.product-info {
    padding: 10% 0;
    color: var(--Dark-grayish-blue);

    & h2 {
        color: var(--Orange);
        text-transform: uppercase;
        font-size: 1em;
        letter-spacing: 2px;
    }

    & h1 {
        color: var(--Very-dark-blue);
    }

    & p {
        line-height: 1.6;
    }
}

.price {
    font-weight: 700;

    & span {
        color: var(--Very-dark-blue);

        &:first-child {
            font-size: 1.5em;
        }
    }

    .discount {
        display: flex;
        gap: 10px;
    }

    #percenteage {
        background-color: var(--Pale-orange);
        color: var(--Orange);
        padding: 3px 8px;
        border-radius: 5px;
    }

    /* Style for the discounted og price */
    > span:last-child:not(:first-child) {
        text-decoration: line-through;
        color: var(--Grayish-blue);
        font-size: .9em;
    }
}

.order {
    margin-top: 10%;

    display: flex;
    gap: 7px;

    & img:hover,
    & button:hover {
        cursor: pointer;
        filter: brightness(1.3);

        transition: filter .3s ease;
    }

    & button {
        background-color: var(--Orange);
        color: white;
        border: none;
        border-radius: 10px;
        padding:  5px 25px;
        font-weight: 700;

        & img {
            filter: brightness(3);
        }
    }
}

.selector {
    background-color: var(--Light-grayish-blue);
    border-radius: 15px;
    aspect-ratio: 3/1;
    height: 50px;
    
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    
    & p {
        color: var(--Very-dark-blue);
        font-weight: 700;
        margin: 0;
    }
}

</style>