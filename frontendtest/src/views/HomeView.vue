<template>
      <div>
        <div class="home">
          <div class="container m-5">
            <h6>Search</h6>
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Skateboard</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Product Url</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in skateboards" :key="product.skateID">
                  <td>{{ product.skateID }}</td>
                  <td>{{ product.skateboards }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>R{{ product.amount }}</td>
                  <td>{{ product.category }}</td>
                  <td><img :src="product.prodUrl" alt="" style="width: 10rem;"></td>
                  <td>
                    <!-- <router-link :to="{ name: 'byUser', params: {id: item.skateID}, query:{skateboard: item.skateboard, quantity: item.quantity, amount: item.amount, category: item.category, prodUrl: item.prodUrl}}">
                    <button class="btn btn-primary me-3">Edit</button>
                  </router-link> -->
                    <!-- <router-link :to="'/product/' + product.skateID">View More</router-link> -->
                    <button class="btn btn-primary" @click="viewProductDetails(product.skateID)">View More</button>
                    <button class="btn btn-primary">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>Add a user</h1>
          <router-link to="/about">test</router-link>
          <form @submit.prevent="submitContentFrom">
            <input type="text" v-model="formData.firstName" placeholder="firstName" />
            <input type="text" v-model="formData.lastName" placeholder="lastName" />
            <input type="text" v-model="formData.userAge" placeholder="userAge" />
            <input type="text" v-model="formData.gender" placeholder="gender" />
            <input type="text" v-model="formData.userRole" placeholder="userRole" />
            <input type="text" v-model="formData.emailAdd" placeholder="emailAdd" />
            <input type="text" v-model="formData.userPass" placeholder="userPass" />
            <input type="text" v-model="formData.profileUrl" placeholder="profileUrl" />
            <button type="submit">Submit</button>
          </form>
          <h1>Add a product</h1>
        </div>
      </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      }
    };
  },
  computed: {
    ...mapState({
      skateboards: (state) => state.skateboards
    })
  },
  mounted() {
    this.$store.dispatch('fetchBoards')
  },
  methods: {
    async submitContentFrom() {
      this.$store.dispatch('submitContent', this.formData)
    },

    viewProductDetails(skateID) {
      this.$router.push({ name: 'ProductDetail', params: { skateID } })
    },

    // goToProduct(){
    //   this.$router.push({
    //     name: this.$name,
    //     params: this.$params.id,
    //     query: this.query.name
    //   })
    // },
  },
};
</script>
