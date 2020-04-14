<template>
  <div>
    <div v-if="information">
      <div class="user-top">
        <div class="user-inner">
          <router-link to="/vue-forum">主页&nbsp;</router-link>
          <span>/</span>
        </div>
        <div class="user-foot">
          <div class="touxiang">
            <img :src="information.avatar_url" alt>
            <span class="all">{{information.loginname}}</span>
          </div>

          <div class="all">{{information.score}} 积分</div>
          <div
            class="all github"
            v-show="information.githubUsername"
          >@{{information.githubUsername}}</div>
          <div class="all register">注册时间 {{information.create_at|dateFrm}}</div>
        </div>
      </div>
      <div class="user-top">
        <div class="user-inner">
          <span class="create">最近创建的话题</span>
        </div>
        <div class="user-foot" v-if="information.recent_topics">
          <ul class="recent" v-if="information.recent_topics!=0">
            <li v-for="infor in information.recent_topics" :key="infor.id">
              <div>
                <router-link :to="`/vue-forum/${infor.author.loginname}`">
                  <img :src="infor.author.avatar_url" alt>
                </router-link>
                <router-link :to="`/vue-forum/topic/${infor.id}`">
                  <span class="title">{{infor.title}}</span>
                </router-link>
              </div>

              <span>{{infor.last_reply_at|dateFrm}}</span>
            </li>
            <li>查看更多</li>
          </ul>
          <div v-else>无话题</div>
        </div>
      </div>
      <div class="user-top">
        <div class="user-inner">
          <span class="create">最近参与的话题</span>
        </div>
        <div class="user-foot" v-if="information.recent_replies">
          <ul class="recent" v-if="information.recent_replies!=0">
            <li v-for="inform in information.recent_replies" :key="inform.id">
              <div>
                <router-link :to="`/vue-forum/user/${inform.author.loginname}`">
                  <img :src="inform.author.avatar_url" alt>
                </router-link>
                <router-link :to="`/vue-forum/topic/${inform.id}`">
                  <span class="title">{{inform.title}}</span>
                </router-link>
              </div>

              <span>{{inform.last_reply_at|dateFrm}}</span>
            </li>
            <li>查看更多</li>
          </ul>
          <div v-else>无话题</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  name: "user",
  watch: {
    "$route.path": {
      handler() {
        const { user } = this.$route.params;
        this.userInformation(user);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      information: state => state.user.information,
      message: state => state.content.filter
    })
  },
  methods: {
    ...mapActions(["userInformation"])
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
.user-foot {
  background-color: #fff;
  padding-left: 10px;
  border-radius: 0 0 3px 3px;
  padding-bottom: 10px;
}
.user-top {
  margin-bottom: 20px;
}
.user-top .user-inner {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.user-top .user-inner a {
  color: #369219;
}
.user-top .user-inner a.create {
  color: #1c6132;
}
.user-top .touxiang {
  display: flex;
}
.user-top .all {
  padding: 10px 0 0 0;
}
.user-top .register {
  color: #ababab;
}
.user-top .github {
  color: #778087;
}
.user-top .touxiang img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
}
.user-top .touxiang span {
  color: #778087;
}
.user-foot ul.recent {
  margin: 0;
}
.user-foot .recent li {
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  padding-right: 20px;
}
.user-foot .recent li img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 5px;
}
.user-foot .recent li .title {
  line-height: 30px;
  margin-left: 5px;
}
.else {
  padding: 10px 0 20px 10px;
}
.user-foot span {
  float: right;
  line-height: 30px;
}
</style>
