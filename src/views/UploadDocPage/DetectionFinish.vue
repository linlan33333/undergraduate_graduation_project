<template>
  <q-page class="flex flex-center">
<!--    <div v-show="false">-->
<!--      <img src="http://127.0.0.1:5000/processV">-->
<!--    </div>-->
    <div v-if="isProcessed">
      <q-card class="my-card" style="width: 500px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">视频检测完成</div>
          <div class="text-subtitle2">视频名称:{{fileName}}</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn flat @click="jumpToPlayV">在线播放视频</q-btn>
          <q-btn flat @click="downloadFile">导出轨迹信息</q-btn>
          <q-btn flat @click="goBack">继续上传视频</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div v-else>
      <q-card class="my-card" style="width: 500px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">视频正在检测</div>
          <div>
            <q-circular-progress
                indeterminate
                size="90px"
                :thickness="0.2"
                color="lime"
                center-color="grey-8"
                track-color="transparent"
                class="q-ma-md"
            />
          </div>
        </q-card-section>

        <q-card-actions align="around">
<!--    这里要加两个函数      -->
          <q-btn flat>刷新状态</q-btn>
          <q-btn flat>重新上传</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {checkPV} from "@/network/api";
import {processV} from "@/network/api";
import {download} from "@/network/api";

export default {
name: "DetectionFinish",

  data() {
    return {
      fileName: 'testrim.mp4',
      isProcessed: false,
      videoUrl: ''
    }
  },

  mounted() {
    processV().then(res => {
      this.isProcessed = res.data.isProcess;
      this.videoUrl = res.data.videourl;
    }).catch(err => {
      console.log(err);
    })
  },

  methods: {
    getStatus() {
      checkPV().then(res => {
        console.log('ok')
      })
    },

    jumpToPlayV() {
      this.$router.push({
        name: 'playVideo',
        params: {
          videoUrl: this.videoUrl
        }
      })
    },

    // 通过这种方式访问下载文件接口下载文件
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