<template>
  <div>
    <!-- directive, can use 'v-on:' or '@' to set up event listener -->
    <font-awesome-icon :icon="['fas', 'search']" />
    <input
      id="search-bar"
      @input="onInput"
      placeholder="Search youtube. Returns five matching results."
      class="bg-gray-200 focus:bg-white"
    />
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
  width: 350px;
  border: solid 1px black;
  padding: 6px;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
