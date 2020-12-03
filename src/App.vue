<template>
  <div>
    <header :class="[$style.header]">
      <!-- <Cart /> -->
    </header>
    <div>
      <h1>Список товаров:</h1>
      <Item
        v-for="(good, index) in items"
        :key="index"
        :name="good.name"
        :model="good.model"
        :price="good.price"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item,
  },
  data () {
    return {
      items: [
        {name: "ASUS", model: "VivoBook", price: "49 204 руб."},
        {name: "HP", model: "ProBook 450 G7", price: "78 540 руб."},
        {name: "Lenovo", model: "IdeaPad S145", price: "52 990 руб."},
        {name: "Apple", model: "MacBook Pro 13", price: "138 090 руб."},
        {name: "Acer", model: "Swift 5", price: "86 650 руб."}
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style module>
.header {
  color: #555;
}
</style>