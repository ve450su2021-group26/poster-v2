<template>
  <div class="content">
    <div id="upload">
      <b-button v-b-modal.modal-lg pill size="lg"
                variant="outline-success"
                @click="modalShow = !modalShow"
      >
        Upload your photo
      </b-button>


      <b-modal id="modal-lg" v-model="modalShow"
               size="lg"
               title="Intelligent Poster Generator">
        <b-form>
          <h4>What do you want to make a poster of?</h4>
          <b-form-file
              v-model="form.img"
              class="mt-3"
              plain
              @change='upLoad($event)'
          ></b-form-file>
          <div class="mt-3">Selected file: {{ form.img ? form.img.name : '' }}</div>
          <hr>
          <br>
          <h4>What do you want to say?</h4>
          <br>
          <b-form-input
              v-model="form.text"
              placeholder="Enter a sentence"
          ></b-form-input>
          <hr>
          <br>
          <h4>What's your ideal color?</h4>
          <br>
          <b-form-input
              id="color"
              v-model="form.color"
              type="color">
          </b-form-input>
        </b-form>

        <template #modal-footer>
          <b-button type="reset" variant="outline-danger" @click="modalShow = !modalShow">
            Cancel
          </b-button>
          <b-button type="submit" variant="success" @click="onSubmit(form)">
            Submit
          </b-button>
        </template>
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
      modalShow: false,
      form: {
        img: null,
        text: '',
        color: '',
      },
    }
  },

  methods: {
    upLoad(e) {
      let file = e.target.files[0];
      if (!file) return;
      // 分片上传文件
      cos.putObject({
            Bucket: Bucket,
            Region: Region,
            Key: file.name,
            Body: file,
            onProgress: function (progressData, callback) {
              console.log(JSON.stringify(progressData));
              console.log(callback)
            },
          },
          function (err, data) {
            console.log(err, data);
            // this.form.img["location"] = data.Location;
          });
      cos.getObjectUrl({
        Key: file.name,
        Bucket: Bucket,
        Sign: false,
        Region: 'ap-shanghai',
      }, function (err, data) {
        console.log(err, data);
        console.log(data.Url)
        // this.form.img["url"] = data.Url;
      });
    },
    onSubmit(form) {
      if (!form.img) {
        alert("Please upload at least one image!")
        return
      }
      alert("Upload Succeed!")
      this.modalShow = false
      console.log(form)
    },
  }
}

</script>

<style scoped>
h4 {
  text-align: center;
}
</style>