<template>
  <div class="topiclist">
    <ul v-if="topics.length">
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="`/vue-forum/user/${topic.author.loginname}`">
          <img :src="topic.author.avatar_url" alt>
        </router-link>

        <div class="check">
          <span class="reply">{{topic.reply_count}}</span>
          <span>/</span>
          <span class="visit">{{topic.visit_count}}</span>
        </div>
        <div
          class="type"
          v-show="topic.top||topic.good||$route.params.type==='all'||$route.params.type==='good'||$route.path==='/vue-forum'"
        >
          <span
            :class="(topic.top||topic.good)?'active':''"
          >{{topic.top?'置顶':topic.good?'精华':($route.params.type==='all'||$route.params.type==='good'||$route.path==='/vue-forum')?topic.tab==='share'?'分享':topic.tab==='ask'?'问答':topic.tab==='job'?'招聘':'weex':''}}</span>
        </div>
        <router-link :to="`/vue-forum/topic/${topic.id}`" class="content">{{topic.title}}</router-link>
        <span>{{topic.last_reply_at|dateFrm}}</span>
      </li>
    </ul>
    <div v-else>请稍等一哈...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  name: "topic",
  watch: {
    "$route.path": {
      handler() {
        // 获取路由的动态参数  type
        const { type } = this.$route.params;
        this.getTopics(type);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      topics: state => state.topics.all
    })
  },
  methods: {
    ...mapActions(["getTopics"])
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
.topiclist {
  background-color: #fff;
  /* padding: 0 5px; */
}
.topiclist li {
  display: flex;
  padding: 10px;
  line-height: 30px;
  border-bottom: 1px solid #f0f0f0;
}
.topiclist img {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 5px;
  margin-right: 10px;
}
.topiclist .check {
  width: 6%;
  font-size: 12px;
  margin-right: 10px;
  text-align: center;
}
.topiclist .check .reply {
  color: #9e78c0;
  margin-right: 3px;
}
.topiclist .check .visit {
  color: #b4b4b4;
  margin-left: 3px;
}
.topiclist .type {
  margin-right: 10px;
  font-size: 12px;
  color: #999;
}
.topiclist .type span {
  padding: 1px 2px;
  background-color: #e5e5e5;
  border-radius: 2px;
}
.topiclist .type span.active {
  background-color: #369219;
  color: #fff;
}
.topiclist .content {
  width: 40%;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
