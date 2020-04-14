<template>
  <div class="list">
    <ul v-if="comments">
      <li class="list-top">{{comments.length===0?'无':comments.length}}回复</li>
      <li v-for="comment in comments" :key="comment.id">
        <div>
          <router-link :to="`/vue-forum/user/${comment.author.loginname}`">
            <img :src="comment.author.avatar_url" class="touxiang">
          </router-link>
        </div>
        <div class="author">
          <span class="author-name">{{comment.author.loginname}}</span>
          <span class="num">
            {{
            comments.findIndex(function(value){
            return value.id===comment.id
            })+1
            }}楼
          </span>
          <div v-html="comment.content"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "contentc",
  computed: {
    ...mapState({
      comments: state => state.content.list
    })
  },
  methods: {
    ...mapActions(["filterList"])
  },
  created() {
    const { id } = this.$route.params;
    this.filterList(id);
  }
};
</script>

<style>
.list ul {
  /* margin-right: 25px; */
  margin-left: 0;
}
.list ul li {
  display: flex;
  padding-top: 10px;
  background-color: #fff;
  padding-left: 20px;
}
.list ul li .touxiang {
  display: block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.list .list-top {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #eee;
}
.list .num {
  color: #08c;
}
.list .author span {
  font-size: 12px;
}
.list .author .author-name {
  font-weight: 700;
}
</style>
