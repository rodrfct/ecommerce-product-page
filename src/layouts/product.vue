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
                <img id="cart" src="~/assets/icons/icon-cart.svg" alt="">
                
                <img id="profile" src="~/assets/images/image-avatar.png" alt="">
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

</template>

<style scoped>
header {
    padding: 20px 0 35px 0;
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
    }
}

.personal {
    > * {
        margin: 0 10px;
    }

    #profile {
        width: 30px;
    }
}

</style>