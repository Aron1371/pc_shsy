<template>
  <div
    class="slide-main"
    id="touchMain"
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <div class="slide-box" id="slideContent">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
        :style="{ zIndex: index === currentIndex ? 2 : 1 }"
      >
        <a :stat="`sslink-${index + 1}`" href="##">
          <img :src="slide.image" :alt="slide.title" />
        </a>
      </div>

      <a class="prev" href="javascript:;" @click="prevSlide" stat="prev1001">
        <img src="/img/l-btn.png" alt="上一张" />
      </a>
      <a class="next" href="javascript:;" @click="nextSlide" stat="next1002">
        <img src="/img/r-btn.png" alt="下一张" />
      </a>
    </div>

    <div class="item">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ cur: index === currentIndex }"
        @click="goToSlide(index)"
        :stat="`item${1001 + index}`"
        href="javascript:;"
      ></a>
    </div>
  </div>

  <div class="centent1_bg">
    <div class="centent1 centent2" style="background: #f5f5f5">
      <!--最新资讯-->
      <div class="news_bg">
        <div class="content_tlt news_tlt">
          最新资讯<span class="content_tlt_eng">丨News</span>
        </div>
        <div class="news_img">
          <ul
            class="pic"
            style="position: relative; width: 400px; height: 303px"
          >
            <li style="position: absolute; width: 400px; left: 0px; top: 0px">
              <a>
                <img src="../../img/11111344cwwx.jpg" />
              </a>
            </li>
          </ul>
        </div>
        <ul class="news_class">
          <li
            class="news_class_tlt"
            :class="{ news_class_tlt_now: activeTab === 2 }"
            @click="switchTab(2)"
          >
            公司新闻
          </li>
          <li
            class="news_class_tlt"
            :class="{ news_class_tlt_now: activeTab === 1 }"
            @click="switchTab(1)"
          >
            通知公告
          </li>
          <li
            class="news_class_tlt"
            :class="{ news_class_tlt_now: activeTab === 3 }"
            @click="switchTab(3)"
          >
            行业资讯
          </li>
          <li
            class="news_class_tlt"
            :class="{ news_class_tlt_now: activeTab === 4 }"
            @click="switchTab(4)"
          >
            会员专区
          </li>
          <li
            class="news_class_tlt"
            :class="{ news_class_tlt_now: activeTab === 5 }"
            @click="switchTab(5)"
          >
            保供有我
          </li>
        </ul>
        <ul class="news_list_bg" :class="{ active: activeTab === 2 }">
          <li class="news_list">
            <a>上海石油天然气交易中心关于虚假"推荐信"的严正声明</a>
          </li>
          <li class="news_list">
            <a>关于防范电信诈骗的风险提示</a>
          </li>
          <li class="news_list">
            <a>上海石油天然气交易中心入选2023年国际金融十大新闻</a>
          </li>
          <li class="news_list">
            <a>董保成：生物天然气绿色核证与定价机制探索</a>
          </li>
          <li class="news_list">
            <a
              >刘芸芸：全球变暖下极端天气事件多发，初步研判今冬明春仍存阶段性低温天气风险</a
            >
          </li>
          <li class="news_list">
            <a>熊维：供需双轮驱动，共筑LNG贸易新格局</a>
          </li>
          <li class="news_list">
            <a>林宁：引领液化天然气的未来——到2035年基于场景的分析的战略见解</a>
          </li>
          <li class="news_list">
            <a>黄天石：美国LNG供应的显著增加将提高市场提前出现供应过剩的风险</a>
          </li>
          <li class="news_list">
            <a>粟科华：中国天然气市场转向更具韧性的现代化产业体系</a>
          </li>
          <li class="news_list">
            <a
              >张春军：上海石油天然气交易中心创新交易产品
              服务油气行业高质量发展</a
            >
          </li>
          <li class="news_list">
            <a>范孟华：新能源发电全面入市助力全国统一能源市场建设</a>
          </li>
          <li class="news_list">
            <a>王保群：管网平衡气量交易将助推天然气市场价格机制的形成</a>
          </li>
          <div class="more">
            <a>更多&gt;&gt;</a>
          </div>
        </ul>
        <ul class="news_list_bg" :class="{ active: activeTab === 1 }">
          <li class="news_list">
            <a
              >关于开展中国石化天然气分公司2025年10月"易气无忧"服务竞拍交易的通知</a
            >
          </li>
          <li class="news_list">
            <a>关于开展管道天然气竞价交易的公告</a>
          </li>
          <li class="news_list">
            <a
              >关于开展国家管网集团"管网通"产品冬季保供专享系列竞价交易的公告</a
            >
          </li>
          <li class="news_list">
            <a>关于长三角区域2025年12月交货液化天然气预售挂牌交易上线的公告</a>
          </li>
          <li class="news_list">
            <a
              >关于开展中国石化天然气分公司内陆液厂LNG液体贸易批发竞价交易的公告（2025年10月）</a
            >
          </li>
          <li class="news_list">
            <a>中海石油气电集团浙江分公司关于开展LNG运力竞价交易的公告</a>
          </li>
          <li class="news_list">
            <a>关于发布9月年度合同转让交易价格的公告</a>
          </li>
          <li class="news_list">
            <a
              >关于江苏华电华汇能源有限公司启通天然气管道开放沿线接口业务的公告</a
            >
          </li>
          <li class="news_list">
            <a>关于开展中海石油气电集团LNG资源竞价交易的公告</a>
          </li>
          <li class="news_list">
            <a>华北分公司关于开展2025年10月份LNG运力竞价交易公告</a>
          </li>
          <li class="news_list">
            <a
              >关于开展国家管网集团"管网通"产品冬季保供专享系列竞价交易的公告</a
            >
          </li>
          <li class="news_list">
            <a
              >关于开展中国石油天然气股份有限公司天然气销售分公司管道气公开市场交易的通知（2025年10月场次）</a
            >
          </li>
          <div class="more">
            <a>更多&gt;&gt;</a>
          </div>
        </ul>
        <ul class="news_list_bg" :class="{ active: activeTab === 3 }">
          <li class="news_list">
            <a
              >10月6日-12日中国液化丙烷、丁烷综合进口到岸价格指数为112.77、112.49点</a
            >
          </li>
          <li class="news_list">
            <a>10月6日-12日中国原油综合进口到岸价格指数为117.40点</a>
          </li>
          <li class="news_list">
            <a>10月6日-12日中国LNG综合进口到岸价格指数为99.98点</a>
          </li>
          <li class="news_list">
            <a>前三季度我国进口原油4.23亿吨</a>
          </li>
          <li class="news_list">
            <a>四季度，国际油气市场将走向何方？</a>
          </li>
          <li class="news_list">
            <a>"国产慧眼"透视万米深地</a>
          </li>
          <li class="news_list">
            <a>E-Gas系统：10月6日-12日当周中国LNG进口量约74万吨</a>
          </li>
          <li class="news_list">
            <a>「CLD周评」CLD价格下跌，美欧天然气价格涨跌不一</a>
          </li>
          <li class="news_list">
            <a>国新办举行新闻发布会 介绍2025年前三季度进出口情况</a>
          </li>
          <li class="news_list">
            <a>巴西正式申请加入国际能源署</a>
          </li>
          <li class="news_list">
            <a>万吨级油气生产设施成功"安家"南海 年减碳1.18万吨</a>
          </li>
          <li class="news_list">
            <a>能源转型虽加速 石油仍不可替代</a>
          </li>
          <div class="more">
            <a>更多&gt;&gt;</a>
          </div>
        </ul>
        <ul class="news_list_bg" :class="{ active: activeTab === 4 }">
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年10月15日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a>中海油江苏分公司关于10月11日LNG销售挂牌价格的公告</a>
          </li>
          <li class="news_list">
            <a>中海油浙江关于10月11日华东浙沪市场价格调整公告</a>
          </li>
          <li class="news_list">
            <a>中海油江苏分公司关于10月1日LNG销售挂牌价格的公告</a>
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司广东分公司关于2025年10月1日-10月31日LNG交易挂牌价公告（广东、湖南地区）</a
            >
          </li>
          <li class="news_list">
            <a>中海油江苏分公司关于9月23日LNG销售挂牌价格的公告</a>
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月23日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月22日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月19日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月18日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月15日LNG交易挂牌价公告</a
            >
          </li>
          <li class="news_list">
            <a
              >中海石油气电集团有限责任公司华北分公司关于2025年9月9日LNG交易挂牌价公告</a
            >
          </li>
          <div class="more">
            <a>更多&gt;&gt;</a>
          </div>
        </ul>

        <ul class="news_list_bg" :class="{ active: activeTab === 5 }">
          <li class="news_list">
            <a
              >「保供有我」致敬每一份坚守与担当！票选倒计时，谁是你心中的保供之星？</a
            >
          </li>
          <li class="news_list">
            <a>新年首"秀"等您来！第四届"保供有我"火热征稿中</a>
          </li>
          <li class="news_list">
            <a>「保供有我」陪您过大年！网络投票正式开启~</a>
          </li>
          <li class="news_list">
            <a
              >第四届"保供有我"冬季天然气保供创意作品征集及评选活动颁奖典礼在京举行</a
            >
          </li>
          <li class="news_list">
            <a>「保供有我」第四届获奖榜单正式揭晓！精彩作品邀您共赏~</a>
          </li>
          <li class="news_list">
            <a
              >「保供有我」国家管网北方新闻中心：记者走基层系列报道之一《我在"北极"守国脉》</a
            >
          </li>
          <li class="news_list">
            <a
              >「保供有我」沈阳港华燃气有限公司：百日坚守 情暖沈城
              沈阳港华冬季保供的暖心力量</a
            >
          </li>
          <li class="news_list">
            <a
              >「保供有我」白山中裕城市燃气有限公司：极寒之境
              蓝焰丹心——长白山的温暖动脉</a
            >
          </li>
          <li class="news_list">
            <a>「保供有我」北京燃气集团新闻中心：守护蓝色生命线</a>
          </li>
          <li class="news_list">
            <a>「保供有我」申能集团：SHENERGY冬季燃气保供「智慧CP」</a>
          </li>
          <li class="news_list">
            <a
              >「保供有我」中海石油气电集团有限责任公司海南分公司：我的爸爸不爱我</a
            >
          </li>
          <li class="news_list">
            <a
              >「保供有我」国家管网集团北方管道有限责任公司：凛冬已至
              守护温暖</a
            >
          </li>
          <div class="more">
            <a>更多&gt;&gt;</a>
          </div>
        </ul>
      </div>
      <!--会员服务-->
    </div>
  </div>

  <div class="centent2_bg">
    <div class="centent1">
      <!--指数发布-->
      <div class="index_bg">
        <div class="content_tlt index_tlt">
          指数发布<span class="content_tlt_eng">丨Index</span>
        </div>
        <ul class="index_class">
          <li
            class="index_class_tlt"
            :class="{ index_class_tlt_now: activeIndexTab === 6 }"
            @click="switchIndexTab(6)"
            style="width: 192px"
          >
            中国LNG综合进口到岸价格指数
          </li>
          <li
            class="index_class_tlt"
            :class="{ index_class_tlt_now: activeIndexTab === 5 }"
            @click="switchIndexTab(5)"
            style="width: 122px"
          >
            中国LNG出厂价格
          </li>
          <li
            class="index_class_tlt"
            :class="{ index_class_tlt_now: activeIndexTab === 7 }"
            @click="switchIndexTab(7)"
            style="width: 132px"
          >
            中国汽柴油批发价格
          </li>
          <li
            class="index_class_tlt"
            :class="{ index_class_tlt_now: activeIndexTab === 9 }"
            @click="switchIndexTab(9)"
            style="width: 192px"
          >
            中国原油综合进口到岸价格指数
          </li>
          <li
            class="index_class_tlt"
            :class="{ index_class_tlt_now: activeIndexTab === 10 }"
            @click="switchIndexTab(10)"
            style="width: 192px"
          >
            中国LPG综合进口到岸价格指数
          </li>
        </ul>

        <div class="index_chart" :class="{ active: activeIndexTab === 6 }">
          <div class="chart">
            <img src="../../img/indexzhishu1.jpg" />
          </div>
        </div>

        <div class="index_chart" :class="{ active: activeIndexTab === 5 }">
          <div class="chart" style="width: 1198px">
            <img src="../../img/indexzhishu2.jpg" />
          </div>
        </div>

        <div class="index_chart" :class="{ active: activeIndexTab === 7 }">
          <div class="chart" style="width: 1198px">
            <img src="../../img/indexzhishu3.jpg" />
          </div>
        </div>

        <div class="index_chart" :class="{ active: activeIndexTab === 9 }">
          <div class="chart" style="width: 1198px">
            <img src="../../img/indexzhishu5.jpg" />
          </div>
        </div>

        <div class="index_chart" :class="{ active: activeIndexTab === 10 }">
          <div class="chart" style="width: 1198px">
            <img src="../../img/indexzhishu6.jpg" />
          </div>
        </div>

        <ul class="index_desc">
          <span
            >&nbsp;&nbsp;&nbsp;&nbsp;在遵守中国有关法律与本声明的前提下，本网站数据仅供研究使用，未经上海石油天然气交易中心书面许可，任何机构或者个人不得以商业目的使用本网站的任何内容。</span
          >
        </ul>
      </div>

      <!-- LNG报价行情 -->
      <div class="price_bg">
        <div class="content_tlt price_tlt" style="width: 1176px">
          LNG报价行情<span class="content_tlt_eng">丨LNG Price</span>
        </div>

        <div
          id="Data_release"
          style="
            width: 1176px;
            height: 374px;
            float: right;
            padding-right: 10px;
            overflow-y: scroll;
          "
        >
          <form name="myform" id="myform" method="post">
            <h2></h2>
          </form>
          <table
            class="form02"
            id="pngexchangedata-dt"
            style="width: 100%; margin: 8px 0px 20px"
            data-page-length="25"
            data-language="{'url':'/exdata/static/datatables/i18n/zh_CN.json'}"
            data-ajax-url="/exdata/pngexchangedata/pagelist.json"
            data-ordering="false"
            data-paging="true"
          >
            <thead>
              <tr
                class="firstRow"
                style="
                  padding-top: 10px;
                  color: rgb(255, 255, 255);
                  height: 36px;
                  background-color: #4e6189;
                  position: sticky;
                  top: 0;
                  z-index: 10;
                "
              >
                <th style="text-overflow: ellipsis">报价单位</th>
                <th style="text-overflow: ellipsis">接收站名</th>
                <th style="text-overflow: ellipsis">销售地</th>
                <th style="text-overflow: ellipsis">价格</th>
                <th style="text-overflow: ellipsis">买卖方向</th>
              </tr>
            </thead>
            <tbody id="tbody_content">
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司华北分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  国网天津接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  不限
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4050元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司华北分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  北燃南港
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  不限
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4050元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司浙江分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  宁波接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  浙江
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4830元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司浙江分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  宁波接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  上海
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4830元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司广东分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  珠海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  广东
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  -
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司广东分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  珠海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  湖南
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4750元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司华北分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  滨海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华北
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4200元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司广东分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  珠海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  湖北
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  -
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  滨海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  江苏
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4100元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  滨海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  安徽
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4100元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  滨海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  河南
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4100元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  宁波接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  江苏
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4120元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  宁波接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  安徽
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4120元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司江苏分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  宁波接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  河南
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4120元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新原平液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  -
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司广东分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  珠海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  广东(粤东)
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4650元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  中海石油气电集团有限责任公司广东分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  珠海接收站
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  广东(除粤东)
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  4750元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新天煜液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3800元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新大同液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  -
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新太原液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  -
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新晋东液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3930元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新晋中液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3820元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新临汾液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3680元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新襄垣液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3870元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新运城液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3800元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
              <tr role="row" style="text-align: center; height: 30px">
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西华新液化天然气集团有限公司销售分公司
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  华新寿阳液化
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  山西
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  3870元/吨
                </td>
                <td
                  style="
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  "
                >
                  卖出
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "../../assets/market_3001_11_index.css";

// 轮播图数据
const slides = ref([
  { image: "/img/1.jpg", title: "轮播图1" },
  { image: "/img/2.jpg", title: "轮播图2" },
  { image: "/img/3.jpg", title: "轮播图3" },
  { image: "/img/4.jpg", title: "轮播图4" },
  { image: "/img/5.jpg", title: "轮播图5" },
]);

// 当前显示的轮播图索引
const currentIndex = ref(0);
let autoPlayTimer = null;

// 切换到下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

// 切换到上一张
const prevSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1;
};

// 跳转到指定轮播图
const goToSlide = (index) => {
  currentIndex.value = index;
};

// 自动播放
const startAutoPlay = () => {
  autoPlayTimer = setInterval(() => {
    nextSlide();
  }, 4000); // 每4秒切换一次
};

// 暂停自动播放
const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 恢复自动播放
const resumeAutoPlay = () => {
  if (!autoPlayTimer) {
    startAutoPlay();
  }
};

// 组件挂载时开始自动播放
onMounted(() => {
  startAutoPlay();
});

// 组件卸载时清理定时器
onUnmounted(() => {
  pauseAutoPlay();
});

// Tab切换功能
const activeTab = ref(2); // 默认显示公司新闻

// 切换tab
const switchTab = (tabId) => {
  activeTab.value = tabId;
};

// 指数发布标签页功能
const activeIndexTab = ref(6); // 默认显示中国LNG综合进口到岸价格指数

// 切换指数标签页
const switchIndexTab = (tabId) => {
  activeIndexTab.value = tabId;
};
</script>

<style scoped>
.slide {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 297px !important; /* 覆盖原来的490px */
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  display: block !important; /* 覆盖原来的display: none */
  z-index: 1;
}

.slide.active {
  opacity: 1;
  z-index: 2;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide a {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.item a {
  transition: all 0.3s ease;
}

.item a:hover {
  opacity: 0.8;
}

/* Tab切换样式 */
.news_class_tlt {
  cursor: pointer;
  transition: all 0.3s ease;
}

.news_class_tlt:hover {
  background: #c16e00;
  color: #fff;
}

.news_list_bg {
  display: none;
}

.news_list_bg.active {
  display: block;
}

/* 确保所有a标签都有手型光标 */
a {
  cursor: pointer;
}

/* 新闻列表链接样式 */
.news_list a {
  cursor: pointer;
  color: #666;
  text-decoration: none;
}

.news_list a:hover {
  color: #333;
  text-decoration: underline;
}

/* 指数发布标签页样式 */
.index_class_tlt {
  cursor: pointer;
  transition: all 0.3s ease;
}

.index_class_tlt:hover {
  background: #c16e00;
  color: #fff;
}

.index_chart {
  display: none;
}

.index_chart.active {
  display: block;
}

/* 使指数声明固定在指数发布模块底部 */
.index_bg {
  position: relative;
  padding-bottom: 48px; /* 预留空间避免内容被声明遮挡 */
}

.index_desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>