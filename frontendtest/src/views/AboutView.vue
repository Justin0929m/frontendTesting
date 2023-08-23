<template>
  <div class="div">
    <nav class="d-flex justify-content-between bg-white test">
      <h1>test</h1>
      <ul class="d-flex">
        <li class="text-black">Home</li>
        <li class="text-black">Home</li>
        <li class="text-black">Home</li>
        <li class="text-black">Home</li>
      </ul>
    </nav>
    <div class="container">
      <h1 class="text-center text-white text-uppercase my-5">featured Products</h1>
      <div class="row">
        <div class="col" v-for="item in skateboards" :key="item.skateID">
          <div class="card" style="width: 18rem;">
            <img :src=item.prodUrl class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.skateboard }}</h5>
              <button class="btn btn-primary" @click="selectAndFetchProduct(item.skateID)">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default{
    computed:{
      skateboards(){
        return this.$store.state.skateboards
      },
      ...mapState(['skateboards', 'selectedProduct']),
      ...mapGetters(['getSelectedProduct'])
    },
    methods:{
      // ...mapState(['selectProduct', 'fetchSingleProduct']), selectAndFetchProduct(skateID){
      //   this.$store.dispatch('selectProduct', skateID)
      //   this.$store.dispatch('fetchSingleProduct')
      ...mapActions(['fetchSelectedProduct']),
      },
    mounted(){
      this.$store.dispatch('fetchBoards')
      const skateID = skateID
      this.fetchSelectedProduct(skateID)
    }
  }

</script>

<style scoped>
.div{
  background-color: rgb(42, 37, 37);
  padding: 4rem;
  margin: 2rem;
  border-radius: 10px;
  position: relative;
}

.test{
 aspect-ratio: 1 / 1;
 object-fit: cover;
}
</style>
