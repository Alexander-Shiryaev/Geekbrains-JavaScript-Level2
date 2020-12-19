<template>
  <div :class="[$style.wrapper]">
    <img :class="[$style.image]" src="#" alt="image" />
    <div :class="[$style.name]">{{ currentItem.name }}</div>
    <div :class="[$style.model]">{{ currentItem.model }}</div>
    <div :class="[$style.price]">{{ currentItem.price }}</div>
    <Button @btnAction="onBuyClick">Добавить в корзину</Button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("goods", ["getData"]),
    currentItem() {
      return this.getData[this.id] || {};
    },
  },
  methods: {
    ...mapActions("goods", ["addInCart"]),
    onBuyClick() {
      this.addInCart(this.id);
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  background: #eee;
  min-width: 200px;
  margin: 10px 0;
  padding: 20px;
  &:hover {
    box-shadow: 0 0 8px 8px #ccc;
  }
}

.image {
  display: block;
  margin: 10px auto;
  border: 1px solid black;
  width: 150px;
  height: 100px;
}

.name,
.model,
.price {
  color: black;
  padding: 4px;
  text-align: center;
}
</style>
