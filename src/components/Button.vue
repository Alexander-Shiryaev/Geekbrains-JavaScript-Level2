<template>
  <button :class="[$style.btn]" @click="onBtnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onBtnClicked() {
      this.$emit("btnAction");
    },
  },
};
</script>

<style module lang="scss">
.btn {
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #2656ae;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #2656ae;
    border: 1px solid #2656ae;
    box-sizing: border-box;
    margin: -1px;
  }
  &:active {
    background: #2656ae;
    color: #fff;
  }
}
</style>
