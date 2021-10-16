<template>
  <div class="card-page">
    <div v-if="products" class="row">
      <CardProduct
          v-for="item in productsItems"
          :key="item.id"
          :productsItems="productsItems"
          :item="item"
          style="padding-bottom: 30px"
      />
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import CardProduct from "@/components/CardProperties/CardProduct";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      products: null,
    };
  },
async mounted() {
    await axios
        .get("https://vue-study.skillbox.cc/api/products", {
          params: {
            categoryId: 3,
          },
        })
        .then((response) => {
          this.products = response.data.items;
        });
    },
  computed: {
     productsItems() {
         return this.products.map((item) => {
         return {
           id: item.id,
           title: item.title,
           alt: item.image.file.name,
           rate: item.price,
           image: item.image.file.url,
           colors: item.colors
         }
       })
    }
  },
  components: {CardProduct},
};
</script>