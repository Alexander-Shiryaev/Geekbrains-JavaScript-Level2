<template>
  <div>
    <header :class="[$style.header]">
      <Cart :class="[$style.cart]" />
    </header>
    <div :class="[$style.main]">
      <h1 :class="[$style.catalog]">Каталог:</h1>
      <div :class="[$style.main__list]">
        <Item
          v-for="id in getItemsOnPage"
          :key="id"
          :id="id"
        />
      </div>
      <Button @btnAction="fetchMore">Загрузить ещё</Button>
    </div>
    <Form />
  </div>
</template>

<script>

import Cart from './components/Cart.vue'
import Item from './components/Item.vue'
import Button from './components/Button.vue'
import Form from './components/Form.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Cart,
    Item,
    Button,
    Form,
  },
  data () {
    return {
      items: [],
      page: 1
    }
  },
  methods: {
    ...mapActions('goods', [
      'requestData',
    ]),
    fetchMore () {
      this.requestData(this.page)
        .then(() => {
          this.page++
        })
    }
  },
  computed: {
    ...mapGetters('goods', [
      'getItemsOnPage',
    ])
  },
  mounted () {
    this.fetchMore()
  }
}
</script>

<style module lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', Helvetica, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #eee;
}

.cart {
  margin-left: auto;
}

.catalog {
  text-align: center;
}

.main {
  max-width: 80%;
  margin: auto;
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
