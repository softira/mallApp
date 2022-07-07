<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch($event)">
              <div
                class="item"
                v-for="category1 in categoryList"
                :key="category1.categoryId"
                @mouseenter="changeBg(category1.categoryId)"
                :class="{ actBg: actCategory === category1.categoryId }"
              >
                <h3>
                  <a
                    :data-categoryName="category1.categoryName"
                    :data-category1Id="category1.categoryId"
                    >{{ category1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{
                    display:
                      actCategory === category1.categoryId ? 'block' : 'none',
                  }"
                >
                  <div
                    class="subitem"
                    v-for="category2 in category1.categoryChild"
                    :key="category2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="category2.categoryName"
                          :data-category2Id="category2.categoryId"
                          >{{ category2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="category3 in category2.categoryChild"
                          :key="category3.categoryId"
                        >
                          <a
                            :data-categoryName="category3.categoryName"
                            :data-category3Id="category3.categoryId"
                            >{{ category3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      actCategory: -1,
      isShow: true,
    };
  },
  computed: {
    ...mapState({
      // 参数state为大仓库中的数据
      categoryList: (state) => state.Home.categoryList,
    }),
  },
  methods: {
    // 鼠标在那个元素上的id值
    changeBg: throttle(function (index) {
      this.actCategory = index;
    }, 16),
    // 鼠标移开三级导航，初始化actCategory值,并判断是否隐藏
    leaveShow() {
      this.actCategory = -1;
      if (this.$route.name !== "Home") {
        this.isShow = false;
      }
    },
    enterShow() {
      this.isShow = true;
    },
    // 点击a标签，往search页面调整，并传递参数
    goSearch(e) {
      let data = e.target.dataset;
      if (data.categoryname) {
        let local = { name: "Search" };
        local.query = { categoryName: data.categoryname };
        let { category1id, category2id, category3id } = data;
        if (category1id) {
          local.query.category1Id = category1id;
        } else if (category2id) {
          local.query.category2Id = category2id;
        } else {
          local.query.category3Id = category3id;
        }
        // 判断是否带有params参数
        if (this.$route.params) local.params = this.$route.params;
        this.$router.push(local);
      }
    },
  },
  mounted() {
    // 当挂载完毕，检查所在路由，决定是否隐藏
    if (this.$route.name !== "Home") {
      this.isShow = false;
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .actBg {
          background: lightblue;
        }
      }
    }

    // 过度动画样式
    .sort-enter {
      height: 0;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-active {
      transition: all 0.2s;
    }
  }
}
</style>