<template>
  <div class="content">
    <input id="file" type="file" @change='upLoad($event)'>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5'

var Bucket = 've450poster-1306380978';
var Region = 'ap-shanghai';
var cos = new COS({
  getAuthorization: function (options, callback) {
    var authorization = COS.getAuthorization({
      SecretId: 'AKIDe6HDsHPIuFJ6dw0nKabLr63kBNIxMUji',
      SecretKey: 'jCPL0PXWKvHXbR2NVS9cplRrY2GEuJSK',
      Method: options.Method,
      Key: options.Key,
      Query: options.Query,
      Headers: options.Headers,
      Expires: 60,
    });
    callback(authorization);
  }
});

export default {
  name: "uploader",

  data() {
    return {}
  },

  mounted: function () {
  },

  methods: {
    upLoad(e) {
      var file = e.target.files[0];
      if (!file) return;
      // 分片上传文件
      cos.putObject({
            Bucket: Bucket,
            Region: Region,
            Key: file.name,
            Body: file,
            onProgress: function (progressData, callback) {
              console.log(JSON.stringify(progressData));
              console.log("This is callback")
              console.log(callback)
            },
          },
          function (err, data) {
            console.log(err, data);
          });
      cos.getObjectUrl({
        Key: file.name,
        Bucket: Bucket,
        Sign: false,
        Region: 'ap-shanghai',
      }, function (err, data) {
        console.log(data.Url);
      });

    },
  }
}

</script>

<style scoped>

</style>