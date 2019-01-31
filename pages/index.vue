<template>
  <div id="index">
    <div class="widgets">
      <!-- 搜索 -->
      <v-input v-model="vm_s_val" placeholder="检索" type="text" width="100%" icon="fa fa-search"></v-input>
      <!-- 标签云 -->
      <ul class="tagcloud clearfix">
        <li v-for="(item,index) in vm_tags_list" :key="index">
          <nuxt-link :to="{name:'tags',params:{tagname:item}}">{{item}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <!-- 一言 -->
      <section class="yiyan">
        <v-yiyan speed="100"></v-yiyan>
      </section>
      <ul class="article-list">
        <li v-for="(item,index) in vm_article_list" :key="index">
            <nuxt-link :to="'/article/'+item.articleId">
              <p class="title">{{item.title}}</p>
            </nuxt-link>
            <section class="meta">
              <span>
                <i class="fa fa-calendar-minus-o"></i>
                <label>{{item.createTime.match(new RegExp(/[0-9]{2}-[0-9]{2}T/,'ig'))[0].split('T')[0]}}</label>
              </span>
              <span>
                <i class="fa fa-folder"></i>
                <label v-html="item.cateName.length>4?item.cateName.substring(0,4):item.cateName"></label>
              </span>
              <span>
                <i class="fa fa-commenting"></i>
                <label>评论({{item.commentNum}})</label>
              </span>
              <span @click="handleShare" class="meta-share">
                <i class="fa fa-share-alt"></i>
                <label>分享</label>
              </span>
              <span>
                <i class="fa fa-book"></i>
                <label>预计阅读({{item.spendTime}}分)</label>
              </span>
            </section>
        </li>
      </ul>
      <!-- 分页 -->
      <section class="page">
        <i class="fa fa-caret-up"></i>
        <i class="fa fa-caret-down"></i>
      </section>
    </div>
    <div class="aside">
      <!-- 头像区 -->
      <header>
        <section class="author">
          <p class="avatar"><img src="@/assets/img/avatar.png"></p>
          <p class="nickname">chenrrrrr</p>
          <p class="location">
            <i class="fa fa-map-marker"></i><span>Nanjing</span>
          </p>
        </section>
        <ul>
          <li><a><i class="fa fa-github"></i></a></li>
          <li><a><i class="fa fa-envelope"></i></a></li>
          <li><a><i class="fa fa-wechat"></i></a></li>
          <li><a><i class="fa fa-qq"></i></a></li>
          <li><a href="/login"><i class="fa fa-key"></i></a></li>
        </ul>
      </header>
      <!-- 分类 -->
      <ul class="category">
        <li @click="handleCateClick(index)" v-for="(item,index) in vm_cate_list" :key="index" :class=" item.active ? 'li-active' :'' ">
          <nuxt-link :to="item.href"><i class="fa" :class="item.icon"></i><span>{{item.alias}}</span></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Yiyan from '@/components/Yiyan'
export default {
  head () {
    return {
      title: `${this.html_title}`,
      meta: [
        { hid: 'description', name: 'description', content: "chenrrrrr的博客" }
      ],
    }
  },
  data() {
    return {
      html_title:'博客 | Chenrrrr',
      vm_s_val:'',
      vm_cate_list:[
        {
          alias: '首页',
          active: true,
          icon: 'fa-desktop',
          href: '/'
        },
        {
          alias: '归档',
          active: false,
          icon: 'fa-archive',
          href: '/archive'
        }
      ],
      vm_article_list:[
        {
          articleId:'1',
          title:'60天减掉30斤',
          createTime:'2019-01-26T16:30:40.000Z',
          cateName:'健康',
          commentNum:'20',
          spendTime:'1'
        },
        {
          articleId:'2',
          title:'60天减掉60斤',
          createTime:'2019-01-25T11:34:12.000Z',
          cateName:'奥术大师大所多',
          commentNum:'200000',
          spendTime:'123'
        }
      ],
      vm_tags_list: ['SPA','SS','Linux','SSR','UNIX','NGINX','SPA','SS','Linux','SSR','UNIX','NGINX','SPA','SS','Linux','SSR','UNIX','NGINX']
    }
  },
  async asyncData({app}) {

  },
  components: {
    'v-input': Input,
    'v-yiyan': Yiyan
  },
  methods:{
    handleCateClick(index){
      for(let i = 0; i<this.vm_cate_list.length;i++){
        i === index ? this.vm_cate_list[i].active = true : this.vm_cate_list[i].active = false
      }
    },
    handleShare(){

    }
  }
}
</script>

<style lang="less" scoped>
#index{
  display: flex;
  height: 100%;
  .main{
    position: relative;
    width: 70%;
    padding: 10px 20px;
    .page{
      position: absolute;
      height: 50px;
      margin-top: -25px;
      top: 50%;
      right: 5px;
      display: flex;
      flex-direction: column;
      font-size: 22px;
      color:#333;
      i:hover{
        cursor: pointer;
        opacity: .8;
      }
      i:active{
        opacity: .9;
      }
    }
    .yiyan{
      display: flex;
      justify-content: flex-end;
      div{
        color:#777777;
        font-size: 12px;
      }
    }
    .article-list{
      li{
        padding-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
        a{
          color:#333;
          .title{
            font-size: 18px;
            margin: 20px 0;
          } 
        }
        .meta{
          display: flex;
          align-items: center;
          line-height: 1;
          span{
            color: #777777;
            font-size: 14px;
            margin-right: 30px;
            overflow:hidden; white-space:nowrap; text-overflow:ellipsis;
          }
          &-share{
            cursor: pointer;
            label{
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .aside,.widgets{
    flex: 1;
    background: #fbfbfb;
    padding: 0 10px;
    position: relative;
  }
  .aside{
    padding: 0;
    border-left:1px solid #f6f6f6;
    header{
      padding: 10px;
      .author{
        p{
          padding-top: 10px;
          text-align: center;
          color:#333;
        }
        .avatar > img{
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }
        .nickname{
          font-size: 18px;
        }
        .location{
          padding-bottom: 10px;
          font-size: 14px;
          color:#777777;
          i{
            margin-right: 5px;
          }
        }
      }
      ul{
        display: flex;
        justify-content: space-between;
        li{
          padding-right: 10px;
          a{
            color: #333;
            width: 100%;
            i{
              cursor: pointer;
            }
          }
        }
        li:hover{
          cursor: pointer;
          opacity: .8;
        }
        li:active{
          opacity: .9;
        }
      }
    }
    .category{
      padding: 10px 0;
      li{
        line-height: 1.75;
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 6px 2px;
        a{
          padding-left: 10px;  
          width: 100%;
          color:#555555;
          span{
            padding-left: 20px;
            font-size: 14px;
          }
        }
      }
      li:hover{
        cursor: pointer;
        background: #eeeeee;
      }
      .li-active{
        background: #f4f4f4;
      }
    }
  }
  .widgets{
    padding-top: 10px;
    border-right:1px solid #f6f6f6;
    .tagcloud{
      padding-top: 10px;
      li{
        margin-right: .2em;
        float: left;
        a{
          display: inline-block;
          margin-bottom: 0.2em;
          padding: .3em .6em;
          font-size: 75% !important;
          line-height: 1;
          background-color: #eee;
          color:#333;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: .25em;
        }
        a:hover{
          color:#5ebdea;
        }
      }
    }
  }
}
</style>

