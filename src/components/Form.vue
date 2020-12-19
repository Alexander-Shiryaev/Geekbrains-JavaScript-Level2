<template>
  <form :class="[$style.form]">
    <h1 :class="[$style.title]">Заказать обратный звонок</h1>
    <input
      :class="[$style.input]"
      data-rule="text"
      type="text"
      placeholder="Ваше имя"
    />
    <input
      :class="[$style.input]"
      data-rule="tel"
      type="tel"
      placeholder="Ваш телефон"
    />
    <input
      :class="[$style.input]"
      data-rule="email"
      type="email"
      placeholder="Email"
    />
    <Button @btnAction="sendDataForm">Связаться с нами</Button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      name: "",
      model: "",
      price: "",
    };
  },
  methods: {
    ...mapActions("goods", ["addItem"]),
  },
  sendDataForm() {
    console.log("Data has been send!");
  },
};
</script>

<style module lang="scss">
.form {
  max-width: 450px;
  margin: 0 auto;
  padding: 40px 0;
}

.title {
  text-align: center;
}

.input {
  display: block;
  margin: 15px auto;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #2656ae;
  width: 400px;
}

button {
  width: 100%;
}
</style>
