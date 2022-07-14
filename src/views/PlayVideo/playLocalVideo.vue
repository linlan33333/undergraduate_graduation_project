<template>
  <q-page class="flex flex-center">
    <!--    <div class="fit row justify-around">-->
      <div>
        <q-video
            src="http://127.0.0.1:5000/static/testrim.mp4"
            style="width: 80vh; height: 50vh"
        />
      </div>
  </q-page>
</template>

<script>
export default {
  name: "playLocalVideo",

  data() {
    return {
      fileUrl: ''
    }
  },

  mounted() {
    this.fileUrl = "http://127.0.0.1:8888/" + this.$route.params.fileName
    console.log(this.fileUrl);
  }
}
</script>

<style scoped>

</style>