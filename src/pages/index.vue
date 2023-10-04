<script setup lang="ts">
definePageMeta({
    layout: 'product'
})
</script>

<template>
    <h1>Check out our latest products</h1>

    <div class="latest-products">
        <ProductLink product="sneakers" />
        <ProductLink product="sneakers" />
        <ProductLink product="sneakers" />
        <ProductLink product="sneakers" />
    </div>
</template>

<style>
.latest-products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 5%;
}
</style>