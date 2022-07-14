<template>
  <q-page class="flex flex-center">
<!--    <div class="fit row justify-around">-->
    <div class="fit row justify-center">
      <div>
        <q-video
            src="http://127.0.0.1:5000/static/testrim.mp4"
            style="width: 80vh; height: 50vh"
        />
      </div>

      <div>
        <q-tabs
            v-model="tab"
            inline-label
            class="bg-blue-6 text-white shadow-2"
            align="justify"
            style="width: 80vh;"
        >
          <q-tab name="download_file" icon="download" label="导出轨迹" @click="downloadFile"/>
          <q-tab name="back" icon="output" label="返回前页" @click="goBack"/>
        </q-tabs>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PlayVideo",

  data() {
    return {
      videoSrc: ''
    }
  },

  mounted() {
    this.videoSrc = this.$route.params.videoUrl
    console.log(this.videoSrc);
  },

  methods: {
    downloadFile() {
      window.open("http://127.0.0.1:5000/download")
    },

    goBack() {
      this.$router.push('/uploadDoc')
    }
  }
}
</script>

<style scoped>

</style>