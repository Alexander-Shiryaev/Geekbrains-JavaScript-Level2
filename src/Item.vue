<template>
  <div>{{ name }} - {{ model }} - {{ price }} | {{ arr }}</div>
</template>

<script>
export default {
  props: {
    name: String,
    model: String,
    price: Number,
    arr: Array,
  },
  mounted () {
    console.log(this.arr)
  }
}
</script>

<style>

</style>