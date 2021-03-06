<template>
  <!--v-if directive: if the prop is null (or falsey), vue won't try to read .snippet.title from it -->
  <div
    v-if="video"
    class="bg-red-500 m-8 p-6 max-w-6xl mx-auto rounded-xl shadow-md flex items-center space-x-4 text-m font-medium text-black"
  >
    <div>
      <iframe :src="videoUrl" />
    </div>
    <div class="details">
      <h4 class="font-black">{{ video.snippet.title }}</h4>
      <p class="video-description">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
};
</script>

<style scoped></style>
