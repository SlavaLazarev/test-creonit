<template>
  <div class="col-6">
    <div class="card">
      <img
          :alt="item.alt"
          :src="item.image"
          class="card-img"
      />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.rate + " ₽"}}</h6>
        <CardColor
            class="card-link"
            v-for="color in item.colors"
            :key="color.id"
            :color="color"
            :style="{color: color.code}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardColor from "@/components/CardProperties/CardColor";

export default {
  name: "CardProduct",
  props:['item', 'productsItems'],
  components: {CardColor},
}
</script>

<style scoped>
.card-img {
  max-width: 200px;
  max-height: 200px;
  padding: 15px 15px 15px 15px;
  object-fit: scale-down;
}
</style>