<template>
  <section class="w-date-picker-wrap">
    <div class="w-date-picker-content">
      <div class="w-date-picker-top">
        <li @click="PreMonth(myDate, false)">
          <div class="w-arrow-left"></div>
        </li>
        <li class="current-day">{{ checkedDate }}</li>
        <li @click="NextMonth(myDate, false)">
          <div class="w-arrow-right"></div>
        </li>
      </div>
      <div class="w-content">
        <div
          class="w-content_item"
          v-for="(week, index) in weekName"
          :key="index"
        >
          <div class="week-item">
            {{ week }}
          </div>
        </div>
      </div>
      <div class="w-content">
        <div
          class="w-content_item"
          v-bind:class="[{ w_isToday: item.isToday }]"
          v-for="(item, index) in list"
          :key="index"
          @click="clickDay(item, index)"
        >
          <div
            class="w-day-item"
            v-bind:class="[
              { w_isMark: item.isMark },
              { w_other_dayhide: item.otherMonth !== 'nowMonth' },
              { w_want_dayhide: item.dayHide },
              { w_chose_day: item.chooseDay },
              setClass(item)
            ]"
          >
            {{ item.id }}
          </div>
        </div>
      </div>
    </div>
    <div class="confirm" v-show="!hideFooter">
      <span class="confirm-btn cancel">取消</span>
      <span class="confirm-btn ok">确认</span>
    </div>
  </section>
</template>
<script>
import timeUtil from "../date-picker";
export default {
  name: "WDatePicker",
  data() {
    return {
      myDate: [], //当前时间
      list: [], // 月份list
      historyChose: [], //选过的时间
      checkedDate: ""
    };
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    weekName: {
      type: Array,
      default: () => ["日", "一", "二", "三", "四", "五", "六"]
    },
    //如果是true  weekName就从周日开始
    sundayStart: {
      type: Boolean,
      default: () => true
    },
    agoDayHide: { type: String, default: "0" }, //用于屏蔽过去的时间戳
    futureDayHide: { type: String, default: `2554387200` }, //用于屏蔽未来的时间戳
    hideFooter: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  created() {
    this.intStart();
    this.myDate = new Date();
  },
  methods: {
    intStart() {
      timeUtil.sundayStart = this.sundayStart;
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },

    //当前选中日期
    clickDay: function(item, index) {
      if (item.otherMonth === "nowMonth" && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== "nowMonth") {
        item.otherMonth === "preMonth"
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date);
      }
      //传给父组件
      this.$emit("input", item.date.replace(/\//g, "-"));
    },
    ChoseMonth: function(date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = new Date(date);
      this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function(date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, "preMonth");
      this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function(date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, "nextMonth");
      this.$emit("changeMonth", timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function() {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map(k => {
        return timeUtil.dateFormat(k);
      });
      markDateMore = markDateMore.map(k => {
        k.date = timeUtil.dateFormat(k.date);
        return k;
      });
      return [markDate, markDateMore];
    },
    getList: function(date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs();
      // this.checkedDate = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let monthStr = date.getMonth() + 1;
      if (monthStr < 10) monthStr = "0" + monthStr;
      this.checkedDate = `${date.getFullYear()}-${monthStr}`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = "";
        let k = arr[i];
        // k.chooseDay = k.isToday;
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || "";
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          this.$emit("isToday", nowTime);
        }
        let flag = !k.dayHide && k.otherMonth === "nowMonth";
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit("choseDay", nowTime);
          this.historyChose.push(nowTime);
          k.chooseDay = true;
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime &&
          !chooseDay &&
          flag
        ) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted() {
    this.getList(this.myDate, timeUtil.setToday());
  },
  watch: {
    markDate: {
      handler() {
        this.getList(this.myDate);
      },
      deep: true
    },
    markDateMore: {
      handler() {
        this.getList(this.myDate);
      },
      deep: true
    },
    agoDayHide: {
      handler(val) {
        this.agoDayHide = parseInt(val);
        this.getList(this.myDate);
      },
      deep: true
    },
    futureDayHide: {
      handler(val) {
        this.futureDayHide = parseInt(val);
        this.getList(this.myDate);
      },
      deep: true
    },
    sundayStart: {
      handler() {
        this.intStart();
        this.getList(this.myDate);
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.w-date-picker-wrap {
  width: 324px;
  position: relative;
  box-shadow: 0 2px 3px rgba(#000, 0.3);

  li {
    list-style: none;
  }
  .confirm {
    height: 36px;
    display: flex;
    justify-content: flex-end;
    line-height: 36px;
    background: #fff;
    border-top: 1px solid #ededed;
    &-btn {
      font-size: 14px;
      padding: 0 12px;
      cursor: pointer;
      &.ok {
        color: #f00;
      }
      &.cancel {
        color: #999;
      }
    }
  }

  .w-date-picker-content {
    width: 100%;
    overflow: hidden;
    .w-date-picker-top {
      display: flex;
      border-bottom: 1px solid #ededed;
      li {
        cursor: pointer;
        display: flex;
        color: #fff;
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 40px;
      }
      .current-day {
        cursor: auto;
        flex: 2.5;
        font-weight: bolder;
        color: #f00 !important;
      }
    }
  }

  .w-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 5%;
    box-sizing: border-box;
  }

  .w-content:first-child .w-content_item_tag,
  .w-content:first-child .w-content_item {
    color: #ddd;
  }

  .w-content_item {
    width: 13.5%;
    text-align: center;
    color: #fff;
    position: relative;
    font-size: 14px;
    height: 36px;
    .week-item {
      width: 36px;
      height: 36px;
      line-height: 36px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999999;
    }
    .w-day-item {
      width: 36px;
      height: 36px;
      line-height: 36px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #222222;
      cursor: pointer;
    }
  }

  .w-arrow-left {
    width: 12px;
    height: 12px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    transform: rotate(-45deg);
  }

  .w-arrow-left:active,
  .w-arrow-right:active {
    border-color: #ddd;
  }

  .w-arrow-right {
    width: 12px;
    height: 12px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
  }
  .w-content_item > .w_isMark {
    margin: auto;
    border-radius: 100px;
    background: blue;
    z-index: 2;
  }
  .w-content_item .w_other_dayhide {
    color: #bfbfbf;
  }
  .w-content_item .w_want_dayhide {
    color: #bfbfbf;
  }
  .w-content_item .w_isToday {
    background: yellow;
    border-radius: 100px;
  }
  .w-content_item .w_chose_day {
    background: green;
    border-radius: 100px;
  }

  .w-date-picker-content {
    background-color: #fff !important;
  }

  .w-content_item {
    color: #777 !important;
  }

  .w-arrow-left {
    border-top: 2px solid #aaa !important;
    border-left: 2px solid #aaa !important;
  }

  .w-arrow-right {
    border-top: 2px solid #aaa !important;
    border-right: 2px solid #aaa !important;
  }

  .w_chose_day {
    background: #f00 !important;
    color: #fff !important;
    border-radius: 100px !important;
  }
}
</style>
