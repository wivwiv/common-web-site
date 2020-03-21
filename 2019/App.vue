<template>
  <div class="app">

    <div class="header">
      <h1>一周年照片墙</h1>
      <h5 class="sense">2019-03-20 - 2020-03-20</h5>
      <img class="logo" src="./img/home.jpg" />

      <div class="descc">
        <p>过去的每一秒都好快</p>
        <p>敏感，旅游，见家长，吵闹生气</p>
        <p>思考，蹭蹭，玩耍，消磨时光</p>
        <p>我一直觉得和你在一起时间很快</p>
        <p>后来一想其实人生本来就是那么快的</p>
        <p>无关与谁</p>
        <p>可我只想与你</p>
        <p><br/></p>
        <p>从一开始两个人都小心翼翼</p>
        <p>到后来大大方方</p>
        <p>包容，通化，我们的日子就是连续的喜剧</p>
        <p>最后两个人越来越像了</p>
        <p>你我都一样像猫看水塘里的鱼</p>
        <p>说草海隧道雨滴在车窗上的美</p>
        <p>有“宝宝你居然是人嗳”的疑惑</p>
        <p>发现人和猴子一样居然会骑车的搞笑</p>
        <p><br></p>
        <p>在强势过后的温柔</p>
        <p>还有突然涌动的思念</p>
        <p>以及日日夜夜的分别里</p>
        <p>我们彼此都一直是对方的小朋友</p>
        <p>也一直在另一个领域做对方的小大人</p>
        <p><br/></p>
        <p>细细一想</p>
        <p>叫你一万遍、一辈子宝宝都不够了</p>
      </div>

      <br>
      <div class="liwu-box">
        <h4>选礼物啦</h4>
        <br>
        <p>担心周年礼物买的不合适不对啦 所以要用这个方式来选择一下</p>
        <p>点击浏览图片可以在弹出框的
          <span class="tips">右上角</span>随机发现礼物，选择好的一周年的礼物都在下面，再次点击可以移除</p>
        <div class="liwu-wrap">
          <template v-if="liwuList.length > 0">
            <span v-for="(item, i) in liwuList" :key="i" class="liwu-box-item" @click="removeItem(item)">
              {{ item.name }} x
            </span>
            <div class="btn-box">
              <span class="liwu-box-item btn" @click="toSubmit" :class="{ active: hasTell }">
                {{ hasTell ? '重新通知' : '告诉宝宝' }}
              </span>
            </div>

          </template>
          <span v-else class="liwu-box-item">还没有选择哦</span>
        </div>
      </div>

    </div>

    <van-dialog v-model="show" show-cancel-button closeOnClickOverlay cancelButtonText="上一张" confirmButtonText="下一张" cancelButtonColor="#333" confirmButtonColor="#333" :beforeClose="beforeClose" @confirm="nextPage">
      <div class="content" id="boxx">
        <img class="you" :src="`https://cdn.bigpar.cn/love/2019/${active._url}`" @load="imageLoaded">
        <div class="foo">
          <div class="liwu" @click="selectActive">
            <van-icon v-if="active.selected" name="like" />
            <van-icon v-else name="like-o" /> {{ active.liwu || '这个没有哦' }}
          </div>
          <span>
            {{ active.descr }}
          </span>
          <span style="margin-left: 12px;">{{ active.shoottime }}</span>
        </div>
      </div>
    </van-dialog>
    <div class="waterfall-container">
      <div v-for="(item, i) in list" :key="i" class="item" :class="{ hide: hideIndex[i] }" @click="getItem(item, i)">
        <img :src="`https://cdn.bigpar.cn/love/2019/${item._pre}`" alt="">
      </div>
    </div>

    <!-- <van-image-preview v-model="showVant" :images="images" @change="onChange">
      <template v-slot:index>第页</template>
    </van-image-preview> -->
  </div>
</template>

<script>
import Vue from 'vue';
import list from './js/data.js';
import { Dialog, Icon, Toast, Button } from 'vant';
import domtoimage from 'dom-to-image';

const images = [...list.map($ => $.url)]

Vue.use(Icon);
Vue.use(Button);


export default {
  name: 'App',
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      hasTell: !!localStorage.getItem('__hasTell'),
      list: list,
      hideIndex: {},
      activeIndex: -1,
      active: {},
      show: false,
      currentIndex: 0,
      images: images,
      showVant: false,
      index: 0,
      hasLoaded: false,
      selected: JSON.parse(localStorage.getItem("__selected" || '[]')) || [],
      map: {
        "1": "情侣装",
        "2": "口红",
        "4": "裙子",
        "6": "包包",
        "10": "情侣装",
        "14": "情侣装",
        "16": "口红",
        "18": "鞋子",
        "19": "包包",
        "22": "万能礼物",
        "23": "鞋子",
        "25": "鞋子",
        "29": "抱抱",
        "35": "包包",
        "39": "万能礼物",
        "40": "衣服",
        "41": "包包",
        "43": "裙子",
        "44": "抱抱",
        "48": "包包",
        "49": "裙子",
        "51": "口红",
        "54": "裙子",
        "56": "抱抱",
        "57": "衣服",
        "58": "裙子",
        "59": "情侣装",
        "63": "套套",
        "66": "口红",
        "67": "裙子",
        "68": "裙子",
        "71": "衣服",
        "73": "套套",
        "75": "裙子",
        "78": "鞋子",
        "80": "抱抱",
        "81": "鞋子",
        "82": "万能礼物",
        "83": "鞋子",
        "84": "口红",
        "90": "裙子",
        "92": "情侣装",
        "93": "裙子",
        "94": "抱抱",
        "95": "抱抱",
        "96": "衣服",
        "97": "衣服",
        "99": "包包",
        "102": "抱抱",
        "107": "套套",
        "108": "裙子",
        "110": "鞋子",
        "111": "套套",
        "112": "情侣装",
        "115": "情侣装",
        "118": "裙子",
        "119": "口红",
        "122": "鞋子",
        "125": "抱抱",
        "128": "套套",
        "129": "套套",
        "131": "情侣装",
        "132": "裙子",
        "134": "包包",
        "135": "情侣装",
        "136": "衣服",
        "145": "套套",
        "146": "鞋子",
        "147": "抱抱",
        "148": "情侣装",
        "149": "口红",
        "150": "口红",
        "151": "衣服",
        "152": "裙子",
        "153": "衣服",
        "154": "套套",
        "157": "抱抱",
        "158": "抱抱",
        "159": "口红",
        "160": "衣服",
        "162": "套套",
        "164": "衣服",
        "165": "衣服",
        "166": "抱抱",
        "167": "情侣装",
        "168": "衣服",
        "169": "鞋子",
        "170": "抱抱",
        "171": "口红",
        "172": "抱抱",
        "173": "抱抱",
        "174": "情侣装",
        "175": "情侣装",
        "176": "口红",
        "178": "万能礼物",
        "181": "套套",
        "182": "口红",
        "187": "口红",
        "188": "情侣装",
        "191": "包包",
        "192": "套套",
        "194": "口红",
        "195": "鞋子",
        "197": "抱抱",
        "198": "情侣装",
        "200": "鞋子",
        "204": "鞋子",
        "207": "鞋子",
        "209": "情侣装",
        "210": "鞋子",
        "211": "套套",
        "213": "衣服",
        "216": "情侣装",
        "218": "鞋子",
        "220": "情侣装",
        "221": "鞋子",
        "223": "裙子",
        "225": "套套",
        "226": "裙子",
        "228": "抱抱",
        "232": "衣服",
        "233": "裙子",
        "235": "抱抱",
        "236": "情侣装",
        "237": "包包",
        "239": "包包",
        "240": "包包",
        "242": "衣服",
        "243": "抱抱",
        "245": "抱抱",
        "247": "鞋子",
        "250": "鞋子",
        "256": "情侣装",
        "257": "情侣装",
        "259": "裙子",
        "261": "包包",
        "262": "鞋子",
        "263": "万能礼物",
        "264": "衣服",
        "265": "抱抱",
        "267": "衣服",
        "272": "衣服",
        "274": "口红",
        "276": "万能礼物",
        "277": "裙子",
        "280": "衣服"
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    toSubmit() {
      if (this.liwuList.length > 3) {
        return Toast('今年只能选择三样哦')
      }
      if (this.liwuList.filter($ => $.name === '抱抱').length > 1) {
        return Toast('抱抱只能有一个')
      }
      // 开始提交
      fetch(`https://sc.ftqq.com/SCU87479T1204c04bf8a10cee3be0cf223aa82dd15e5cf8d0783f8.send?text=${this.liwuList.map($ => $.name).join('_')}&desp=${JSON.stringify(this.liwuList)}`)
      Toast('已经告诉啦，多次提交用最后一次哦')
      this.hasTell = true
      localStorage.setItem('__hasTell', true)
    },
    // 上一张
    beforeClose(action, done) {
      if (action === 'overlay') {
        return done()
      } else if (action === 'confirm') {
        return done(false)
      }
      const lastIndex = this.activeIndex - 1
      if (lastIndex < 0) {
        Toast('已经第一张啦')
        return
      }
      this.getItem(this.list[lastIndex], lastIndex);
      done(false)
    },
    // 下一张
    nextPage() {
      const page = this.activeIndex + 1
      if (page > this.list.length) {
        Toast('已经最后一张啦')
        return
      }
      this.getItem(this.list[page], page);
    },
    // 移除
    removeItem(item) {
      this.selected = this.selected.filter($ => $ !== item.i)
      localStorage.setItem('__selected', JSON.stringify(this.selected))
    },
    selectActive() {
      if (!this.active.liwu) {
        return
      }
      let list = JSON.parse(localStorage.getItem("__selected" || '[]')) || []
      const val = this.activeIndex
      const has = list.includes(val)
      if (has) {
        // 取消
        list = list.filter($ => $ !== val)
      } else {
        // 添加
        list.push(val)
      }
      this.$set(this.active, 'selected', has ? '' : true)
      this.selected = list;
      localStorage.setItem('__selected', JSON.stringify(list))
    },
    imageLoaded() {
      this.hasLoaded = true
    },
    saveImg() {
      const el = document.getElementById('boxx')
      if (!el) {
        return
      }
      domtoimage.toPng()
        .then(function (dataUrl) {
          var a = document.createElement('a')
          a.src = dataUrl;
          a.download = Date.now() + '.png'
          a.click()
        })
        .catch(() => {});
    },
    onChange() { },
    saveChage() {
      localStorage.setItem('love', JSON.stringify(this.list))
    },
    getItem(item, i) {
      this.hideIndex = {}
      this.active = item;
      this.$set(this.hideIndex, i, true)
      this.index = i
      this.show = true;
      this.showVant = true
      this.hasLoaded = false
      this.activeIndex = i;
      // 是否已选择
      this.$set(item, 'selected', (JSON.parse(localStorage.getItem('__selected'), '[]') || []).includes(i))
      // 是否有礼物
      const liwu = this.map[i]
      if (liwu) {
        this.$set(this.active, 'liwu', liwu)
      }
      // 前后随机8个
      const s = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      // this.show = true;
      s.forEach((g) => {
        const f = Math.random() * 8
        setTimeout(() => {
          if (f <= 4) {
            this.$set(this.hideIndex, `${i - Math.floor(f)}`, true)
          } else {
            this.$set(this.hideIndex, `${i + Math.floor(f)}`, true)
          }
        }, (g + 1) * 500)
      })
    }
  },
  computed: {
    liwuList() {
      return this.selected.map($ => ({ name: this.map[$], i: $ })) || []
    }
  },
}
</script>

<style lang="less">
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  padding: 20px;
  text-align: center;
  margin: 20px auto;
  .logo {
    width: 80%;
    height: auto;
    border-radius: 14px;
  }
  .descc {
    margin: 10px auto;
    line-height: 1.8;
  }
  .sense {
    margin: 10px auto;
  }
}
.app {
  .item {
    width: 24vw;
    height: 24vw;
    display: inline-block;
    overflow: hidden;
    margin: 0.4vw;
    border-radius: 5px;
    position: relative;
    &.hide {
      img {
        filter: grayscale(0);
        transform: scale(1.6);
      }
    }
    img {
      filter: grayscale(100%);
      transition: all 1.2s;
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}
.van-dialog__confirm {
  color: #333;
}
.content {
  position: relative;
  .liwu {
    // position: absolute;
    max-width: 80px;
    justify-content: center;
    font-size: 10px;
    // right: 8px;
    // bottom: 30px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    .van-icon {
      font-size: 14px;
      margin-right: 4px;
    }
    .van-icon-like {
      color: #df2228;
    }
  }
  .foo {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    min-height: 20px;
    font-size: 12px;
    padding: 4px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 100011;
  }
}
.liwu-box {
  margin: 14px auto;
  &-item {
    margin: 2px 4px;
    padding: 2px 6px;
    display: inline-block;
    border: 1px dashed #df2228;
    color: #df2228;
    font-size: 10px;
    border-radius: 4px;
    &.btn {
      font-size: 14px;
      border: 1px solid #df2228;
      border-radius: 12px;
    }
  }
  .liwu-wrap {
    margin: 20px auto;
    .btn-box {
      margin: 10px auto;
    }
  }
  p {
    color: #101010;
    font-size: 10px;
    line-height: 1.8;
  }
  .tips {
    color: #df2228;
  }
}
.you {
  width: 100%;
  height: auto;
  max-height: 140vw;
  min-height: 20vw;
  object-fit: cover;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  &.ff {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99998;
  }
}
</style>
