<template>
  <div class="detailcomment" v-if="Object.keys(commentinfos).length !== 0">
    <div class="comment-user">
      <span>用户评价</span>
      <span><a href="#">更多</a></span>
    </div>
    <div class="comment-users">
      <img :src="commentinfos.user.avatar" alt="" class="useravatar">
      <span class="username">{{commentinfos.user.uname}}</span>
      <p>{{commentinfos.content}}</p>
      <div class="comment-date">
        <span class="comment-date-created">{{commentinfos.created | createddate}}</span>
        <span>{{commentinfos.style}}</span>
      </div>
      <div>
        <img :src="item" v-for="(item, index) in commentinfos.images" :key="index" class="buying-show">
      </div>
    </div>
  </div>
</template>

<script>
import{formatDate} from 'common/utils.js';
export default {
  name: 'DetailCommentInfo',
  filters:{
    createddate(value){
      const date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
  props:{
    commentinfos:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.detailcomment{
  padding: 0 10px;
  border-bottom: 5px solid #f2f5f8;
  padding-bottom: 20px;
  margin-bottom: 5px;
}
.comment-user{
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.comment-user span:nth-child(1){
  float: left;
}
.comment-user span:nth-child(2){
  float: right;
}
.comment-users{
  padding-top: 10px;
}
.useravatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
}
.username{
  font-size: 16px;
  color: black;
}
.comment-date{
  margin: 5px 0;
}
.comment-date-created{
  margin-right: 10px;
}
.buying-show{
  width: 65px;
  height: 65px;
  margin-right: 10px;
}
</style>