<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 600px">

      <q-file filled bottom-slots v-model="fileUrl" label="选择本地视频文件" style="width: 40vh">
        <template v-slot:before>
          <q-icon name="folder_open" />
        </template>
      </q-file>

      <div>
        <q-btn label="提交"  color="primary" @click="submit"/>
        <q-btn label="重置"  color="primary" flat class="q-ml-sm" @click="clear"/>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: "LocalVideoPlay",

  data() {
    return {
      fileUrl: null,
    }
  },

  methods: {
    submit() {
      console.log(this.fileUrl.name);
      this.$router.push({
        name: 'playLocalVideo',
        params: {
          fileName: this.fileUrl.name
        }
      });
    },

    clear() {
      this.fileUrl = ''
    }
  }
}
</script>

<style scoped>

</style>