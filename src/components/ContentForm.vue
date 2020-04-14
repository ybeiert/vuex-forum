<template>
  <div class="content-form">
    <span>添加回复</span>
    <div class="wenben">
      <textarea id="kuang" v-model="val"></textarea>
      <input type="submit" value="回复" class="reply" @click="issueTopics()">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "contentform",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    issueTopics() {
      this.issue({
        topic_id: this.$route.params.id,
        newTopics: {
          accesstoken: "08a4a820-dbf5-4f55-8b8a-5420db26eef8",
          content: this.val
        },
        clearInput: this.clearInput,
        filterIssue: this.filterList
      });
    },
    ...mapActions(["issue", "filterList"]),
    clearInput() {
      this.val = "";
    }
  }
};
</script>

<style>
.content-form {
  width: 100%;
}
.content-form span {
  display: block;
  padding: 10px;

  background-color: #f6f6f6;
  width: 100%;
  border-bottom: 1px solid #eee;

  border-radius: 5px 5px 0 0;
}
.content-form .wenben {
  background-color: #fff;
}
.content-form #kuang {
  width: 100%;
  height: 252px;
  resize: none;
  border: none;
  box-shadow: none;
  padding: 20px;
}
.content-form .reply {
  border: none;
  box-shadow: none;
  background-color: #3374de;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  margin-left: 20px;
  margin-bottom: 20px;
  outline: none;
}
</style>
