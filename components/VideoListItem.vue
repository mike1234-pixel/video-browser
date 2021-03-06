<template>
  <li
    @click="onVideoSelect"
    class="bg-red-500 hover:bg-red-700 m-8 p-6 max-w-xl mx-auto rounded-xl shadow-md flex items-center text-m font-medium text-black"
  >
    <!-- reference computed property function which itself uses props to return the value (rather than a JS expression) -->
    <img :src="thumbnailUrl" class="m-8 rounded-xl shadow-md" />
    {{ video.snippet.title }}
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
</style>
