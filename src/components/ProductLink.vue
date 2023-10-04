<script setup lang="ts">
defineProps<{
    product: string
}>()
</script>

<template>
    <NuxtLink :to="`products/${product}`">
        <figure id="product">
            <img src="~/assets/images/image-product-1-thumbnail.jpg" alt="">
            <figcaption>{{ product }}</figcaption>
        </figure>
    </NuxtLink>
</template>

<style scoped>
a {
    text-decoration: none;
}

#product {
    margin: 0;
    aspect-ratio: 1/1;
    padding: 12%;
    border-radius: 10px;
    
    text-align: center;
    box-shadow: 1px 1px 10px 1px var(--Grayish-blue);

    & img {
        max-width: 100%;
        border-radius: 10px;
    }

    & figcaption {
        margin-top: 5px;
        text-transform: capitalize;
        color: var(--Very-dark-blue);
        font-weight: 700;
    }
}
</style>