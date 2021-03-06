<template>
  <div class="flex-col min-w-full justify-center min-h-screen p-6 container">
    <div>
      <!-- @ listen for custom events coming from the SearchBar component -->
      <SearchBar @termChange="onTermChange"></SearchBar>
      <div>
        <VideoDetail :video="selectedVideo" />
        <!-- passing props using v-bind directive. :videos is shorthand for v-bind:videos -->
        <VideoList @videoSelect="onVideoSelect" :videos="videos" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_KEY = "AIzaSyD2XekwcAFMhjtQRimIyoDGxjCXzd6x598";
import SearchBar from "../components/SeachBar";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

export default {
  name: "index",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    // initial state
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    // event handler
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet", // how much detail to return
            q: searchTerm // search query
          }
        })
        .then(
          // callback for success
          response => {
            // push data from api call into state
            // data property is changed so the app automatically rerenders with each call
            this.videos = response.data.items;
          },
          // callback for failure
          () => {
            console.log("unsuccessful youtube request");
          }
        );
    },
    onVideoSelect(video) {
      // update selectedVideo state
      this.selectedVideo = video;
    }
  }
};
</script>

<style>
.container {
  background-image: url("../assets/background-tv.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
