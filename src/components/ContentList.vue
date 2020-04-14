<template>
  <div>
    <div v-if="content&&information" class="contentlist">
      <div class="content-top">
        <div>{{find()}}</div>
        <span>
          <span>{{content.top?'置顶':content.good?'精华':''}}</span>
        </span>
        <h3>{{content.title}}</h3>
        <div v-show="collection">
          <div
            class="collection"
            v-show="isShow||information.collect_topics.find(res=>res.id=content.id)"
            @click="collectss()"
          >加入收藏</div>
          <div class="collection quxiao" v-show="!isShow" @click="de_collectss()">取消收藏</div>
        </div>
      </div>
      <div class="information">
        <span>·发布于 {{content.create_at|dateFrm}}</span>
        <span>·作者 {{content.loginname}}</span>
        <span>·{{content.visit_count}} 次浏览</span>
        <span>·最后一次编辑是 {{content.last_reply_at|dateFrm}}</span>
        <span>·来自 {{content.tab==='share'?'分享':content.tab==='ask'?'问答':content.tab==='job'?'招聘':'weex'}}</span>
      </div>
      <div v-html="content.content" class="content"></div>
    </div>
    <div class="comment">
      <Content/>
      <ContentForm v-show="collection"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Content from "./Content";
import ContentForm from "./ContentForm";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "contentlist",
  data() {
    return {
      isShow: true
    };
  },
  components: {
    ContentForm,
    Content
  },
  computed: {
    ...mapState({
      content: state => state.content.filter,
      collection: state => state.login.info,
      information: state => state.user.information

      // collects: state => state.collect.collect,
      // loginInfo: state => state.login.info,
      // topics: state => state.post.topics
    })
  },
  methods: {
    collectss() {
      this.collect({
        newCollect: {
          accesstoken: "08a4a820-dbf5-4f55-8b8a-5420db26eef8",
          topic_id: this.$route.params.id
        }
      });
      this.isShow = !this.isShow;
    },
    de_collectss() {
      this.de_collect({
        newCollect: {
          accesstoken: "08a4a820-dbf5-4f55-8b8a-5420db26eef8",
          topic_id: this.$route.params.id
        }
      });
      this.isShow = !this.isShow;
    },

    ...mapActions([
      "filter",
      "collect",
      "de_collect",
      "issue",
      "userInformation"
    ]),
    ...mapMutations(["changeInfo"]),
    find() {
      this.information.collect_topics.find(res => res.id === this.content.id);
    }
  },
  created() {
    const { id } = this.$route.params;
    this.filter(id);
    this.userInformation("ybeiert");
  },
  filters: {
    dateFrm: function(date) {
      moment.locale("zh-cn");
      return moment(date).fromNow();
    }
  }
};
</script>

<style>
.contentlist {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
}
.contentlist .content-top {
  display: flex;
  line-height: 130%;
  margin-left: 10px;
}
.contentlist .content-top > span {
  margin-top: 20px;
  margin-right: 5px;
}

.contentlist .content-top > span > span {
  font-size: 12px;
  color: #fff;
  background-color: #369219;
  padding: 2px 4px;
  border-radius: 3px;
}
.contentlist .content-top h3 {
  font-size: 22px;
  width: 75%;
  font-weight: 700;
  margin: 8px 0;
}
.contentlist .information {
  font-size: 12px;
  color: #838383;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  margin-left: 10px;
}
.contentlist .content {
  padding: 20px;
}
.contentlist .collection {
  background-color: #369219;
  color: #fff;
  width: 84px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  margin: 8px 0;
}
.contentlist .quxiao {
  background-color: #e5e5e5;
  color: #333;
}
</style>
