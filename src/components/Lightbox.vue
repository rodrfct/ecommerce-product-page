<script setup lang="ts">
defineProps<{
    images: string[]
}>()

const activeImg = ref<number>(0)

const modal = ref<HTMLDialogElement | null>(null)
</script>

<template>
    <div class="lightbox">
        <div class="slider">
            <img class="arrow"
            src="~/assets/icons/icon-previous.svg" alt=""
            @click="() => {if(activeImg > 0) {activeImg--}}">

            <img :src="images[activeImg]" alt="" @click="modal?.showModal">

            <img class="arrow"
            src="~/assets/icons/icon-next.svg" alt=""
            @click="() => {if(activeImg < 3) {activeImg++}}">
        </div>

        <div class="selector">
            <img v-for="(img, index) in images" :src="img" alt=""
            :class="{active : index == activeImg}"
            @click="activeImg = index">
        </div>

        <dialog ref="modal">
            <form method="dialog">
                <button><img src="~/assets/icons/icon-close.svg" alt=""></button>
            </form>

            <div class="slider">
                <img class="arrow"
                src="~/assets/icons/icon-previous.svg" alt=""
                @click="() => {if(activeImg > 0) {activeImg--}}">

                <img :src="images[activeImg]" alt="">
                
                <img class="arrow"
                src="~/assets/icons/icon-next.svg" alt=""
                @click="() => {if(activeImg < 3) {activeImg++}}">
            </div>
            <div class="selector">
                <img v-for="(img, index) in images" :src="img" alt=""
                :class="{active : index == activeImg}"
                @click="activeImg = index">
            </div>
        </dialog>
    </div>
</template>

<style>
.lightbox {
    padding: 0 7%;
}

.lightbox img {
    aspect-ratio: 1/1;
    border-radius: 10px;
    max-width: 100%;
    cursor: pointer;

    .selector &:hover,
    &.active {
        filter: contrast(1.2) brightness(1.1);
    }

    &.active {
        border: 2px solid var(--Orange);
    }
}

.selector {
    display: grid;
    grid-template: 1fr / repeat(4, 1fr);

    --margin: 20px;
    gap: var(--margin);
    margin: var(--margin) 0;
}

.lightbox dialog {
    max-width: 450px;
    border: none;
    background-color: inherit;

    & form {
        display: flex;
        justify-content: flex-end;
        
        > button {
            border: none;
            background-color: inherit;
            
            > img {
                color: var(--Orange);
            }
        }
    }

    .selector {
        margin: var(--margin);
    }

    &::backdrop {
        background-color: black;
        opacity: .65;
    }
}

.slider {
    position: relative;

    .arrow {
        display: none;

        dialog & {
            display: block;
        }

        position: absolute;
        top: 50%;
        
        height: 10px;
        padding: 10px;
        background-color: white;
        border: 1px solid var(--Orange);
        border-radius: 50%;

        &:first-child {
            translate: -50% -50%;
            right: 100%;
            left: 0;
        }
        
        &:last-child {
            translate: -50% -50%;
            left: 100%;
            right: 0;
        }

        @media (width <= 375px) {
            display: block;
            width: 10px;
            border: none;

            &:first-child {
                translate: 50% -50%;
            }

            &:last-child {
                translate: -150% -50%;
            }
        }
    }
}

@media (width <= 375px) {
    .lightbox {
        padding: 0;

        > .selector {
            display: none;
        }
    }

    .lightbox img {
        aspect-ratio: 8/7;
        width: 100%;
        border-radius: 0;
    }
}
</style>