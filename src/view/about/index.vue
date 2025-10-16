<template>
  <div class="date_index_bg">
    <div class="centent2">
      <div class="centent_left_bg">
        <div class="centent_left">
          <div class="centent_left_tlt" >关于我们</div>
          <ul>
            <li class="centent_left_menu_tlt">中心介绍</li>
            <li
              class="centent_left_menu"
              :class="{ centent_left_menu_now: activeTab === 1 }"
              @click="switchTab(1)"
            >
              成立背景
            </li>
            <li
              class="centent_left_menu"
              :class="{ centent_left_menu_now: activeTab === 2 }"
              @click="switchTab(2)"
            >
              理念和价值观
            </li>
            <li
              class="centent_left_menu"
              :class="{ centent_left_menu_now: activeTab === 3 }"
              @click="switchTab(3)"
            >
              发展愿景
            </li>
          </ul>
          <ul>
            <li
              class="centent_left_menu_tlt"
              :class="{ centent_left_menu_now: activeTab === 4 }"
              @click="switchTab(4)"
            >
              组织架构
            </li>
          </ul>
          <ul>
            <li
              class="centent_left_menu_tlt"
              :class="{ centent_left_menu_now: activeTab === 5 }"
              @click="switchTab(5)"
            >
              团队建设
            </li>
          </ul>
          <ul>
            <li
              class="centent_left_menu_tlt"
              :class="{ centent_left_menu_now: activeTab === 6 }"
              @click="switchTab(6)"
            >
              联系我们
            </li>
          </ul>
        </div>
        <!-- div class="centent_left_qr"><img src="/img/foot_qr.png"></div -->
      </div>
      <!-- Tab内容区域 -->
      <div class="centent_right">
        <!-- 成立背景 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 1 }">
          <div class="centent_right_tlt">成立背景</div>
          <div class="centent_right_chart">
            <p style="line-height: 2em; margin-top: 10px; margin-bottom: 10px">
              <span
                style="font-family: 微软雅黑, Microsoft YaHei; font-size: 16px"
                >上海石油天然气交易中心是在国家发改委、国家能源局直接指导下，由上海市人民政府批准设立的能源交易平台。2015年3月4日在上海自贸区注册成立，2015年7月1日试运行，2016年11月26日正式运行。</span
              >
            </p>
            <p
              style="
                text-align: left;
                line-height: 2em;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              <span
                style="font-family: 微软雅黑, Microsoft YaHei; font-size: 16px"
                >上海石油天然气交易中心由十家股东单位组成：新华社、中国石油、中国石化、中国海油、申能集团、北京燃气、新奥能源、中国燃气、港华燃气、中国华能，注册资本金10亿元，类型为有限责任公司（国内合资）。</span
              >
            </p>
            <p
              style="
                text-align: center;
                line-height: 2em;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              <img
                src="../../img/27163953efco.png"
                title="20250527163649.png"
                _src="../../img/27163953efco.png"
                alt="20250527163649.png"
                style="text-align: center; max-width: 50%"
              />
            </p>
            <p style="line-height: 2em; margin-top: 10px; margin-bottom: 10px">
              <span
                style="font-family: 微软雅黑, Microsoft YaHei; font-size: 16px"
                >秉承“公开、公平、公正、专业、诚信、高效”原则，上海石油天然气交易中心充分利用现代信息技术，打造专业化、国际化的能源交易平台，开展天然气、非常规天然气、液化石油气、石油等能源产品的现货和中远期交易，提供交易、交割、结算、技术、征信、金融、资讯、场所、设施等综合服务。</span
              >
            </p>
            <p
              style="
                text-align: center;
                line-height: 2em;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              <img
                alt=""
                src="../../img/2017-01-10-11-15-04_6605681402898444_901905918560008192.png"
              />
            </p>
            <p style="line-height: 2em; margin-top: 10px; margin-bottom: 10px">
              <span
                style="font-family: 微软雅黑, Microsoft YaHei; font-size: 16px"
                >交易中心实行会员制，符合会员资格要求的国内外交易商都能进场交易。更多详情，请登陆交易中心官方网站"入市指南"栏目，或扫描二维码关注交易中心微信公众号。</span
              >
            </p>
          </div>
        </div>

        <!-- 理念和价值观 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 2 }">
          <div class="centent_right_tlt">理念和价值观</div>
          <div class="centent_right_chart">
            <p
              style="
                text-align: center;
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong>历史担当</strong></span
              >
            </p>
            <p
              style="
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
                text-align: center;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong
                  ><strong
                    style="
                      font-family: 微软雅黑, 'Microsoft YaHei';
                      font-size: 18px;
                      text-align: center;
                      white-space: normal;
                    "
                    >Historical Responsibility</strong
                  ></strong
                ></span
              >
            </p>
            <p
              style="
                text-align: center;
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong>创新思维</strong></span
              >
            </p>
            <p
              style="
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
                text-align: center;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong
                  ><strong
                    style="
                      font-family: 微软雅黑, 'Microsoft YaHei';
                      font-size: 18px;
                      text-align: center;
                      white-space: normal;
                    "
                    >Creative Thinking</strong
                  ></strong
                ></span
              >
            </p>
            <p
              style="
                text-align: center;
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong>服务精神</strong></span
              >
            </p>
            <p
              style="
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
                text-align: center;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong
                  ><strong
                    style="
                      font-family: 微软雅黑, 'Microsoft YaHei';
                      font-size: 18px;
                      text-align: center;
                      white-space: normal;
                    "
                    >Service Spirit</strong
                  ></strong
                ></span
              >
            </p>
            <p
              style="
                text-align: center;
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
              "
            >
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                "
                ><strong>卓越品格</strong></span
              >
            </p>
            <p
              style="
                text-align: center;
                font-size: medium;
                font-family: DengXian;
                white-space: normal;
                margin-top: 10px;
                margin-bottom: 10px;
                line-height: 1.5em;
              "
            >
              <strong
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 18px;
                  text-align: center;
                  white-space: normal;
                "
                >Extraordinary Character</strong
              >
            </p>
          </div>
        </div>

        <!-- 发展愿景 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 3 }">
          <div class="centent_right_tlt">发展愿景</div>
          <div class="centent_right_chart">
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >近期
                </span></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >成为中国石油天然气交易及定价中心</span
              >
            </p>
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >Short term</span
                ></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >&nbsp; &nbsp;Become a trading and pricing center for oil and
                gas &nbsp;in China</span
              >
            </p>
            <p dir="ltr"><br /></p>
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >中期</span
                ></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
              >
                成为亚太地区石油天然气交易及定价中心</span
              >
            </p>
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >Mid term&nbsp;</span
                ></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >&nbsp; Become a trading and pricing center for oil and gas in
                the Asia-Pacific region</span
              >
            </p>
            <p dir="ltr"><br /></p>
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >远期</span
                ></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
              >
                成为具有全球影响力 &nbsp;的石油天然气交易及定价中心</span
              >
            </p>
            <p
              dir="ltr"
              style="margin-top: 10px; margin-bottom: 10px; line-height: 1.75em"
            >
              <strong
                ><span
                  style="
                    font-family: 微软雅黑, 'Microsoft YaHei';
                    font-size: 16px;
                  "
                  >Long term</span
                ></strong
              ><span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
              >
                &nbsp;&nbsp;Become an influential trading and pricing center for
                oil and gas in the world</span
              >
            </p>
            <p dir="ltr"><br /></p>
          </div>
        </div>

        <!-- 组织架构 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 4 }">
          <div class="centent_right_tlt">组织架构</div>
          <div class="centent_right_chart">
            <p></p>
            <p>
              <img
                src="../../img/101519510i5i.png"
                title="微信截图_20251010151819.png"
                _src="../../img/101519510i5i.png"
                alt="微信截图_20251010151819.png"
                width="719"
                height="508"
                style="width: 719px; height: 508px"
              />
            </p>
          </div>
        </div>

        <!-- 团队建设 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 5 }">
          <div class="centent_right_tlt">团队建设</div>
          <div class="centent_right_chart">
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  text-indent: 2em;
                  font-size: 16px;
                "
                >上海石油天然气交易中心高度重视团队和文化建设，着力打造专业化、年轻化、国际化的人才队伍，着力营造风清气正干事业、齐心协力谋发展的企业文化。</span
              >
            </p>
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  text-indent: 2em;
                "
                ><br
              /></span>
            </p>
            <p style="text-indent: 0em; text-align: center">
              <img
                src="../../img/31205723r1s7.jpg"
                title="1.商飞.jpg"
                alt="1.商飞.jpg"
                width="650"
                height="433"
                border="0"
                vspace="0"
                style="text-align: center; width: 650px; height: 433px"
              />
            </p>
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >上海石油天然气交易中心部分员工到中国商飞参观学习，学习“长期奋斗、长期攻关、长期吃苦、长期奉献”的商飞精神。</span
              >
            </p>
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                ><br
              /></span>
            </p>
            <p style="text-indent: 0em; text-align: center">
              <img
                src="../../img/31205829revn.jpg"
                title="2.洋山港.jpg"
                alt="2.洋山港.jpg"
                width="650"
                height="387"
                border="0"
                vspace="0"
                style="text-align: center; width: 650px; height: 387px"
              />
            </p>
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >上海石油天然气交易中心部分员工到洋山港LNG接收站参观学习，学习洋山LNG接收站严谨细致、安全高效的工作作风。</span
              >
            </p>
            <p style="text-indent: 2em"><br /></p>
            <p style="text-indent: 0em; text-align: center">
              <img
                src="../../img/31210133q1wc.jpg"
                title="3.参观周恩来展.jpg"
                alt="3.参观周恩来展.jpg"
                width="650"
                height="280"
                border="0"
                vspace="0"
                style="text-align: center; width: 650px; height: 280px"
              />
            </p>
            <p style="text-indent: 2em">
              <span
                style="
                  font-family: 微软雅黑, 'Microsoft YaHei';
                  font-size: 16px;
                "
                >上海石油天然气交易中心部分员工参观“愿相会于中华腾飞世界时—人民总理周恩来陈列展”，缅怀伟人风范，激发爱国热情，砥砺创业精神。</span
              >
            </p>
            <p><br /></p>
          </div>
        </div>

        <!-- 联系我们 -->
        <div class="centent_right_tab" :class="{ active: activeTab === 6 }">
          <div class="centent_right_tlt">联系我们</div>
          <div class="centent_right_chart">
            <p style="text-align: left">
              <img
                src="../../img/16094734xh5s.png"
                title="2.png"
                _src="/u/cms/www/202501/16094734xh5s.png"
                alt="2.png"
              />
            </p>
            <p
              style="
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 0px;
                text-wrap-mode: wrap;
                line-height: 2em;
              "
            >
              <span
                style="
                  font-size: 16px;
                  font-family: 微软雅黑, 'Microsoft YaHei';
                "
                >通讯地址：上海市浦东新区临港新片区云鹃北路18弄C1幢5层6层</span
              >
            </p>
            <p
              style="
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 0px;
                text-wrap-mode: wrap;
                line-height: 2em;
              "
            >
              <span
                style="
                  font-size: 16px;
                  font-family: 微软雅黑, 'Microsoft YaHei';
                "
                >邮政编码：201306</span
              >
            </p>
            <p
              style="
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 0px;
                text-wrap-mode: wrap;
                line-height: 2em;
              "
            >
              <span
                style="
                  font-size: 16px;
                  font-family: 微软雅黑, 'Microsoft YaHei';
                "
                >客服电话：021-68821717</span
              >
            </p>
            <p
              style="
                margin-top: 0px;
                margin-bottom: 0px;
                padding: 0px;
                text-wrap-mode: wrap;
                line-height: 1.5em;
              "
            >
              <span
                style="
                  font-size: 16px;
                  font-family: 微软雅黑, 'Microsoft YaHei';
                "
              ></span>
            </p>
            <p style="text-align: left">
              <!--<p><iframe src="/ims/static/ueditor/dialogs/map/show.html#center=121.507964,31.247521&zoom=18&width=530&height=340&markers=121.507964,31.247521&markerStyles=l,A" frameborder="0" width="534" height="344"></iframe></p>-->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import "../../assets/content.css";

// 获取路由信息
const route = useRoute();

// Tab切换功能
const activeTab = ref(1); // 默认显示成立背景

// 切换tab
const switchTab = (tabId) => {
  activeTab.value = tabId;
};

// 根据路由参数设置初始tab
onMounted(() => {
  // 可以通过查询参数来设置初始tab，例如 ?tab=2
  const tabParam = route.query.tab;
  if (tabParam && !isNaN(tabParam)) {
    const tabId = parseInt(tabParam);
    if (tabId >= 1 && tabId <= 6) {
      activeTab.value = tabId;
    }
  }
});
</script>

<style scoped>
/* Tab切换样式 */
.centent_left_menu {
  cursor: pointer;
  transition: all 0.3s ease;
}

.centent_left_menu:hover {
  background: #c16e00;
  color: #fff;
}

.centent_left_menu_tlt {
  cursor: pointer;
  transition: all 0.3s ease;
}

.centent_left_menu_tlt:hover {
  background: #c16e00;
  color: #fff;
}

/* Tab内容样式 */
.centent_right_tab {
  display: none;
}

.centent_right_tab.active {
  display: block;
}

/* 确保所有a标签都有手型光标 */
a {
  cursor: pointer;
}
</style>