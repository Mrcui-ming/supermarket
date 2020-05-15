<template>
  <div id="car">
    <!-- nav部分 start-->
    <nav-bar class="car-navbar">
      <div slot="center" class="car-navbar-ele">购物车({{length}})</div>
    </nav-bar>
    <!-- nav部分 end -->
    <!-- item部分 start-->
    <better-scroll class="car-bscroll" ref="scroll">
      <car-list></car-list>
    </better-scroll>
    <!-- item部分 end -->
    <!-- 结算工具栏 start -->
    <car-bottom-bar @Settle="settle"></car-bottom-bar>
    <!-- 结算工具栏 end -->
    <Toast v-show="toshow">{{messages}}</Toast>
  </div>
</template>

<script>
import BetterScroll from "components/common/bscroll/Bscroll";
import NavBar from "components/common/navbar/NavBar";
import CarList from "./ChildComps/CarList";
import CarBottomBar from "./ChildComps/CarBottomBar";
import Toast from "components/common/toast/Toast";

import { mapGetters } from "vuex";
export default {
  name: "Car",
  components: {
    NavBar,
    BetterScroll,
    CarList,
    CarBottomBar,
    Toast
  },
  data() {
    return {
      toshow: false,
      messages: ""
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters({
      length: "carLength"
    })
  },
  methods: {
    settle(options) {
      if (options === 0) {
        this.toshow = true;
        this.messages = "请添加商品";
        setTimeout(() => {
          this.toshow = false;
          this.messages = "";
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
#car {
  height: 100vh;
}
.car-navbar {
  background-color: #ff8198;
  border: 0;
}
.car-navbar .car-navbar-ele {
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.car-bscroll {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>