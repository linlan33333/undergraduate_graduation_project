<template>
  <q-page class="flex flex-center">
  <!--  记录一下这里如何在chrome中打开本地文件  -->
  <!--  第一步：在下面的控制台跳转到本地文件的目标文件夹目录中  -->
  <!--  第二步：输入指令：http-server -p 8888 来指定端口号  -->
  <!--  第三步：这里的src就指定到该端口下面的文件位置即可  -->
    <div class="fit column  justify-around">

      <div class="fit row  justify-center">
        <q-input filled bottom-slots v-model="rtspUrl" label="请输入rtsp服务器地址" style="width: 80vh" :dense="dense">
          <template v-slot:append>
            <q-icon v-if="rtspUrl !== ''" name="close" @click="rtspUrl = ''" class="cursor-pointer" />
          </template>

          <template v-slot:after>
            <q-btn round dense flat icon="cable" @click="setUrl"/>
          </template>
        </q-input>
      </div>

      <div class="fit row justify-around q-pt-lg">

        <div>
<!--          <q-video-->
<!--              src="http://127.0.0.1:8888/testrim.mp4"-->
<!--              style="width: 80vh; height: 50vh"-->
<!--          />-->
<!--    后端获取图片接口      -->
          <q-img
              :src="videoSrc"
              style="width: 80vh; height: 50vh"
          />
        </div>

        <div>
          <q-card class="my-card" style="height: 50vh; width: 30vh">
            <q-card-section class="bg-grey-3 text-primary">
              <div class="text-h4">当前行人数量为</div>
              <div class="text-h4">{{peopleNum}}</div>
            </q-card-section>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <q-separator />

            <q-card-actions vertical class="bg-primary text-white">
              <q-btn flat>刷新</q-btn>
            </q-card-actions>
          </q-card>
        </div>

      </div>

    </div>
  </q-page>

</template>

<style>
</style>

<script>
import {getPeopleNum} from "@/network/api";

export default {
  name: 'HelloWorld',

  data() {
    return {
      videoSrc: 'http://127.0.0.1:5000/assets',
      dense: false,
      rtspUrl: '',
      peopleNum: 0
    }
  },

  mounted() {

  },

  computed: {

  },


  methods: {
    myTweak (offset) {
      // “offset”是一个数字（像素），
      //它表示基于QLayout“view”属性配置的
      //屏幕上页眉+页脚的总高度

      // 这实际上是Quasar中默认style-fn的功能
      return { height: '600vh'}
    },

    setUrl() {
      this.videoSrc = "http://127.0.0.1:5000/setRtspUrl?rtspUrl=" + this.rtspUrl;
      setInterval(() => {
        getPeopleNum().then(res => {
          this.peopleNum = res.data.peopleNum
        })
      }, 20)
    }
  }
}
</script>
