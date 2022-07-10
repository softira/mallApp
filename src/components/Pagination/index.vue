<template>
  <div class="pagination">
    <h1></h1>
    <button
      :disabled="pageOn == 1"
      @click="$bus.$emit('getPageOn', pageOn - 1)"
    >
      上一页
    </button>
    <button
      v-show="startAndEnd.startPage != 1"
      @click="$bus.$emit('getPageOn', 1)"
    >
      1
    </button>
    <button v-show="startAndEnd.startPage > 2">.....</button>
    <button
      :disabled="pageOn == page"
      :class="{active:pageOn == page}"
      v-for="(page, index) in startAndEnd.endPage"
      :key="index"
      v-if="page >= startAndEnd.startPage"
      @click="$bus.$emit('getPageOn', page)"
    >
      {{ page }}
    </button>
    <button v-show="startAndEnd.endPage < totalPage - 1">......</button>
    <button
      v-show="startAndEnd.endPage != totalPage"
      @click="$bus.$emit('getPageOn', startAndEnd.endPage)"
    >
      {{ totalPage }}
    </button>

    <button
      :disabled="pageOn == startAndEnd.endPage"
      @click="$bus.$emit('getPageOn', pageOn + 1)"
    >
      下一页
    </button>

    <button>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageSize", "pageOn", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      const { continues, pageOn, totalPage } = this;
      let startPage = 0,
        endPage = 0;
      if (continues > totalPage) {
        startPage = 1;
        endPage = totalPage;
      } else {
        startPage = pageOn - Math.floor(continues / 2);
        endPage = pageOn + Math.floor(continues / 2);
        if (startPage < 1) {
          startPage = 1;
          endPage = continues;
        }
        if (endPage > totalPage) {
          (endPage = totalPage), (startPage = totalPage - continues + 1);
        }
      }
      return {
        startPage,
        endPage,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>