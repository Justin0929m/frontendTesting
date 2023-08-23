<!-- <template>
    <div>
        <div class="card">
            <h2>Edit Products</h2>
            <label for="name">Skateboard</label>
            <p></p>
            <p></p>
            
        </div>
        <div class="card m-5" style="width: 18rem;">
            <img :src=$route.query.prodUrl class="card-img-top" alt="...">
            <div class="card-body">
                    <input type="text" v-model="$route.query.skateboard" name="" id="">
                    <input type="text" v-model="$route.query.quantity" name="" id="">
                    <input type="text" v-model="$route.query.amount" name="" id="">
                    <input type="text" v-model="$route.query.category" name="" id="">
                    <input type="text" v-model="$route.query.prodUrl" name="" id="">
                    <button class="btn btn-primary mt-2">Update Product</button>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                query:{
                    skateboard: "",
                    quantity: "",
                    amount: "",
                    category: "",
                    prodUrl: ""
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style> -->

<template>
    <div class="text-white">
        <h1>Product Detail</h1>
        <div v-if="product">
            <img :src=product.prodUrl class="test" alt="">
            <p>{{ product.skateboard }}</p>
            <p>{{ product.category }}</p>
            <p>R{{ product.amount }}</p>
        </div>
        <div v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProduct']),
        product() {
            return this.getProduct;
        },
        skateID() {
            return this.$route.params.skateID;
        }
    },
    created() {
        this.fetchProduct(this.skateID);
    },
    methods: {
        async fetchProduct(skateID) {
            try {
                const response = await this.$store.dispatch('fetchProduct', skateID);
                console.log('Fetched Product:', response);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>
.test{
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

</style>