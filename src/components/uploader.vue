<template>
  <div class="content">

    <div id="upload">

      <b-button v-b-modal.modal-1 pill size="lg"
                variant="outline-success"
                @click="modalShow = !modalShow"
      >
        Upload your photo
      </b-button>

      <b-modal id="modal-1" v-model="modalShow" title="Intelligent Poster Generator">

        <!--        <b-form v-if="show" @reset="onReset" @submit="onSubmit">-->
        <!--          <b-form-group-->
        <!--              id="input-group-1"-->
        <!--              description="We'll never share your email with anyone else."-->
        <!--              label="Email address:"-->
        <!--              label-for="input-1"-->
        <!--          >-->
        <!--            <b-form-input-->
        <!--                id="input-1"-->
        <!--                v-model="form.email"-->
        <!--                placeholder="Enter email"-->
        <!--                required-->
        <!--                type="email"-->
        <!--            ></b-form-input>-->
        <!--          </b-form-group>-->

        <!--          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">-->
        <!--            <b-form-input-->
        <!--                id="input-2"-->
        <!--                v-model="form.name"-->
        <!--                placeholder="Enter name"-->
        <!--                required-->
        <!--            ></b-form-input>-->
        <!--          </b-form-group>-->

        <!--          <b-form-group id="input-group-3" label="Food:" label-for="input-3">-->
        <!--            <b-form-select-->
        <!--                id="input-3"-->
        <!--                v-model="form.food"-->
        <!--                :options="foods"-->
        <!--                required-->
        <!--            ></b-form-select>-->
        <!--          </b-form-group>-->

        <!--          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">-->
        <!--            <b-form-checkbox-group-->
        <!--                id="checkboxes-4"-->
        <!--                v-model="form.checked"-->
        <!--                :aria-describedby="ariaDescribedby"-->
        <!--            >-->
        <!--              <b-form-checkbox value="me">Check me out</b-form-checkbox>-->
        <!--              <b-form-checkbox value="that">Check that out</b-form-checkbox>-->
        <!--            </b-form-checkbox-group>-->
        <!--          </b-form-group>-->

        <!--          <b-button type="submit" variant="primary">Submit</b-button>-->
        <!--          <b-button type="reset" variant="danger">Reset</b-button>-->
        <!--        </b-form>-->

        <h1>Upload the object image</h1>
        <input id="file" type="file" @change='upLoad($event)'>
        <h1>Enter the text message</h1>

      </b-modal>
    </div>
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
    return {
      modalShow: false
    }
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