<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />

        <q-toolbar-title>
          密室行人轨迹监测系统
        </q-toolbar-title>
        <div class="row">
        <!--     显示日期     -->
          <q-item>
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{todayDate.year + '年' + todayDate.mouth + '月' + todayDate.day + '日'}}</q-item-label>
            </q-item-section>
          </q-item>
          <!--    显示时间，但是时间不能更新    -->
          <q-item>
            <q-item-section avatar>
              <q-icon name="schedule" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{nowTime}}</q-item-label>
            </q-item-section>
          </q-item>
          <!--    显示星期几    -->
          <q-item>
            <q-item-section avatar>
              <q-icon name="calendar_view_week" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{todayDate.week}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-grey-2"
    >
      <q-list>
        <div class="q-pt-md">
          <q-item clickable v-ripple @click="goIndex()">
            <q-item-section avatar>
              <q-icon name="live_tv" />
            </q-item-section>

            <q-item-section>
              首页
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="goUpDoc()">
            <q-item-section avatar>
              <q-icon name="folder_open" />
            </q-item-section>

            <q-item-section>
              本地文件上传
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="goLocalVideoPlay()">
            <q-item-section avatar>
              <q-icon name="video_library" />
            </q-item-section>

            <q-item-section>
              本地视频回放
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
<!--      <keep-alive include="Uploader">-->
        <router-view></router-view>
<!--      </keep-alive>-->
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { date } from 'quasar'

export default {
name: "HomePage",

  created() {
    this.timer = setInterval(this.getCurrentT,500)
  },

  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },

  data() {
    return {
      weekday: '',
      timeNow: '',
      trailInfo: '',
      video_raw: '',
      video_finished: '',
      nowTime: undefined,
      timer: undefined,
      videoSrc:'http://127.0.0.1:8888/testR.mp4'
    }
  },

  // 监听播放视频文件的变化
  // watch: {
  //   video_raw() {
  //     this.videoSrc = 'http://127.0.0.1:8888/' + this.video_raw.name
  //   }
  // },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  },

  computed: {
    todayDate() {
      let timeStamp = Date.now();
      let year = date.formatDate(timeStamp, 'YYYY');
      let mouth = date.formatDate(timeStamp, 'MM');
      let day = date.formatDate(timeStamp, 'DD');
      let week = date.formatDate(timeStamp, 'd');
      switch (week) {
        case '0': this.weekday = '星期日'; break;
        case '1': this.weekday = '星期一'; break;
        case '2': this.weekday = '星期二'; break;
        case '3': this.weekday = '星期三'; break;
        case '4': this.weekday = '星期四'; break;
        case '5': this.weekday = '星期五'; break;
        case '6': this.weekday = '星期六'; break;
      };

      return {
        year,
        mouth,
        day,
        week: this.weekday
      }
    }
  },

  methods: {
    getCurrentT() {
      let timeStamp = Date.now();
      let time = date.formatDate(timeStamp, 'HH:mm:ss');
      this.nowTime = time;
    },
    //想要让局部界面跳转，就要在router中的index.js里写子组件
    goUpDoc() {
      this.$router.push('/uploadDoc')
    },
    goIndex() {
      this.$router.push('/index')
    },
    goLocalVideoPlay() {
      this.$router.push('/localVideoPlay')
    }
  }
}
</script>

<style scoped>

</style>