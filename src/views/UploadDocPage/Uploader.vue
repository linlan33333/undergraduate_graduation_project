<template>
  <q-page class="flex flex-center">
    <q-uploader
        url="http://127.0.0.1:5000/upload"
        label="Upload files"
        color="purple"
        square
        flat
        bordered
        style="width: 40vh; height: 20vh"
        @uploaded="uploadFinish()"
    />
  </q-page>
</template>

<script>
import {testJson} from '@/network/api'
import {processV} from "@/network/api";

export default {
name: "Uploader",

  data() {
    return {

    }
  },

  methods: {
    uploadFinish() {
      this.$q.notify({
        message: "正在处理视频，请稍等",
        position: 'top',
        color: 'purple',
        textColor: 'white'
      })
      this.$router.push('/detFinish')
      //参照这个，这里的res与网易云传过来的res不一样，要先取出data，再从data中取出要的东西
      // testJson().then(res => {
      //   console.log(res.data);
      // })
    }
  }
}
</script>

<style scoped>

</style>