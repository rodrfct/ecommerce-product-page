<script setup lang="ts">
import Cart from '~/components/Cart.vue';

const sidenav = ref<boolean>(false)
</script>

<template>
    <header>
        <button id="nav-toggle" @click="sidenav = !sidenav"><img src="~/assets/icons/icon-menu.svg" alt=""></button>
        
        <NuxtLink to="/"><img src="~/assets/images/logo.svg" alt="home"></NuxtLink>

        <nav :class="{sidenav: sidenav}">
            <button id="nav-close" @click="sidenav = !sidenav"><img src="~/assets/icons/icon-close.svg" alt=""></button>

            <div class="links">
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </nav>
        
        <div class="personal">
            <Cart />
            
            <img id="profile" src="~/assets/images/image-avatar.png" alt="">
        </div>
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
    
    @media (width <= 375px) {
        border: none;
        padding: 15px 10px;
        gap: 5px;
    }
}

#nav-toggle {
    display: none;
    background-color: inherit;
    border: none;
    margin: 0 5px;

    cursor: pointer;

    & img {
        color: black;
    }
    
    @media (width <= 375px) {
        display: inline;
    }
}

nav {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    #nav-close {
        display: none;
    }

    @media (width <= 375px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    
        height: 100%;
        width: 65%;
        background-color: white;
        translate: -100% 0;

        transition: translate .5s ease;
        &.sidenav {
            translate: 0;
        }

        & a {
            display: block;
        }

        #nav-close {
            display: block;
        }
    }

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
    grid-template-columns: auto 40px;
    grid-template-rows: 30px;
    gap: 5px;
    
    position: relative;

    > * {
        margin: 0 10px;
        cursor: pointer;
    }

    #profile {
        width: 30px;
        border-radius: 50%;

        &:hover,
        &:focus-visible {
            border: 1px solid var(--Orange);
        }
    }
}

</style>