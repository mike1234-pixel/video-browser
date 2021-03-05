<template>
  <div>
    <!-- directive, can use 'v-on:' or '@' to set up event listener -->
    <input id="search-bar" @input="onInput" placeholder="Search youtube. Returns five matching results." />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      // emit an event to the parent component (App)
      this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 75%;
  border: solid 1px black;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
