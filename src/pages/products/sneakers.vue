<script setup lang="ts">
import Lightbox from '~/components/Lightbox.vue';
import ProductInfo from '~/components/ProductInfo.vue';

definePageMeta({
    layout: 'product'
})

const sneakers = {
    id: 1,
    manufacturer: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
}
</script>

<template>
    <Lightbox
    img1="~/assets/images/image-product-1.png"
    img2="~/assets/images/image-product-2.png"
    img3="~/assets/images/image-product-3.png"
    img4="~/assets/images/image-product-4.png" />

    <ProductInfo v-bind="sneakers" />
</template>

<style>
main {
    margin: 10% 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12%
}
</style>