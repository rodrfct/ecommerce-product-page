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