<template>
    <header>
        <NuxtLink to="/"><img src="~/assets/images/logo.svg" alt=""></NuxtLink>

        <nav>
            <div class="links">
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>

            <div class="personal">
                <img src="~/assets/icons/icon-cart.svg" alt="">
                
                <img src="~/assets/images/image-avatar.png" alt="">
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

</template>