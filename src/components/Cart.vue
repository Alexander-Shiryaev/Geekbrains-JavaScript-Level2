<template>
  <div>
    <Button @btnAction="onCartClick">Корзина</Button>
    <div :class="[$style.list]" v-if="opened">
      <div :class="[$style.empty]" v-if="!getItemsInCart.length">
        Список пуст
      </div>
      <div v-for="(id, index) in getItemsInCart" :key="id +  `${index}`">
        {{ getData[id].name }} {{ getData[id].model }} x {{ getData[id].price }}
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Button,
  },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    onCartClick () {
      this.opened = !this.opened
    }
  },
  computed: {
    ...mapGetters('goods', [
      'getData',
      'getItemsInCart',
    ])
  }
}
</script>

<style module lang="scss">
.list {
  background: #fff;
  margin: 10px auto;
}
</style>
