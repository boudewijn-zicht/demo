<template>
    <div class="container">
        <div>
            <h1 class="title">
                demo
            </h1>
            <div class="links" v-for="page in allPages" :key="page.slug">
                <a :href="page.slug">
                    <img v-if="page.image" :src="page.image.url" :alt="page.image.alt">
                    {{ page.title }} [{{ page.displayType }}]
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    apollo: {
        allPages: {
            prefetch: true,
            query: gql`query {
                allPages {
                    displayType
                    slug
                    title
                    image {
                        url(imgixParams:{w: 100, h: 50, fit:facearea})
                        alt
                    }
                }
            }`,
        },
    }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
