<template>
    <div class="all-file">
        <!-- 头部banner图 -->
        <div class="banner-all">
            <!-- 图 -->
            <img src="../../../assets/img/banner.png" alt="">
            <!-- 定位点 -->
            <div>
            </div>
        </div>
        <!-- 中间图 -->
        <div class="center-photo">
            <!-- 描述文字 -->
            <div class="der-font">
                <h2>About Us</h2>
                <div class="line"></div>
                <p>普天之下，万物如尘，唯汝是吾心头之珠。渗吾之骨，融吾之血，割舍不得。</p>
                <p>今执红颜以宣白：</p>
                <p>枕前发尽千般愿。要休且待青山烂，水面上秤砣浮。</p>
                <p>直待黄河彻底枯。休即未能休，且待三更见日头。</p>
            </div>
            <!-- 轮播图 -->
            <div class="der-photo">
                <!-- 图片部分 -->
                <div class="top-wall">
                    <img src="../../../assets/img/about-1.jpg" alt="">
                    <img src="../../../assets/img/about-2.jpg" alt="">
                    <img src="../../../assets/img/about-3.jpg" alt="">
                </div>
                <!-- 介绍部分 -->
                <div class="center-text">
                    <div class="in-text">
                    <div>
                        <h3>郁金香</h3>
                        <h4>Tulips</h4>
                        <p>一切都像曾经有过的模样，我以此为化身接受永恒的爱意，看过世间万物，直言皆不如你。</p>
                    </div>
                    <div>
                        <h3>荔枝玫瑰</h3>
                        <h4>Litchi Rose</h4>
                        <p>十五六岁时的心悸，我以为那便是一生，遇见你，清风明月，如归年少，而你在我心上。</p>
                    </div>
                    <div>
                        <h3>芍药</h3>
                        <h4>Peony</h4>
                        <p>最怕是别离，最忆是相思，折一支粉白，去一丝雍容，添一分心事，山水相逢，缓缓归。</p>
                    </div>   
                    </div>
                </div>
            </div>
        </div>
        <!-- 每日推荐 -->
        <div class="day">
            <div class="day-photo">
                <div class="day-left">
                    <img src="../../../assets/img/day-1.jpg" alt="">
                    <img src="../../../assets/img/day-2.jpg" alt="">
                </div>
                <div class="day-right">
                    <div class="day-text">
                        <div class="center-one">
                            <div class="first">
                                    <p class="one">宣白</p>
                                    <p class="one-one">推荐</p>
                            </div>
                            <div class="two">

                            </div>
                        </div>
                        <div class="center-two">
                            <p class="tree">更多</p>
                        </div>
                    </div>
                    <img src="../../../assets/img/day-3.jpg" alt="">
                    <img src="../../../assets/img/day-4.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- 广告条幅 -->
        <div class="message">
            <img src="../../../assets/img/message.png" alt="">
        </div>
        <!-- 定制服务展示-->
        <div class="server">
            <h2>宣白定制</h2>
            <div class="line"></div>
            <div class="foot">
                <img src="../../../assets/img/foot-1.jpg" alt="">
                <img src="../../../assets/img/foot-2.jpg" alt="">
                <img src="../../../assets/img/foot-3.jpg" alt="">
                <img src="../../../assets/img/foot-4.jpg" alt="">
                <img src="../../../assets/img/foot-5.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name:'views',
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(["getAllData"]),
        getData(){
            this.getAllData().then(res => {
                console.log(res)
            })
        }
    },
  mounted(){
    this.getData();
  }
}
</script>
<style>
/* <link rel="stylesheet" href="../assets/css/reset.min.css"> */
/* 整体项目 */
/* .all-file{
    background-color: aqua;
}
.header-top{
    background-color: red;
} */
/* 头部banner图 */
.banner-all{
    /* background-color: antiquewhite; */
    height: 550px;
}

/* 中间图 */
/* .center-photo{

} */
.der-font{
    /* 文字居中对齐 */
    text-align:center;
    margin-bottom: 50px;
}
h2{
    color: rgb(168, 167, 167);
    font-size: 34px;
    font-weight: 400;
    padding-top: 80px;
    font-family:Arial;
}
.line{
    width: 35px;
    height: 5px;
    margin: 10px auto 50px;
    background-color: rgb(172, 4, 4);
}
.der-font p{
    color: rgb(168, 167, 167);
    font-size: 18px;
    font-weight: 200;
    font-family:Arial;
}
/* 轮播图 */
.der-photo{
    /* background-color:rgb(116, 150, 218); */
    height: 530px;
}
/* 图片部分 */
.der-photo .top-wall{
    text-align: center;
    background-color:rgb(242, 244, 248);   
}
.der-photo img{
    width: 20%;
    margin: 0 10px;
}
/* 介绍部分 */
.center-text{
    /* background-color: rgb(204, 183, 224); */
    /* height: 100px; */
    width: 100%;
}
.in-text{
    /* background-color: antiquewhite; */
    /* width: 910px; */
    position: absolute;
    left: 18.5%;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin: 15px 0 0 0;
}
.in-text div{
    width: 300px;
    height: 30px;
}
.in-text div h3{
    color: rgb(232, 100, 100);
}
.in-text div h4{
    color: gray;
}
.in-text div:nth-child(1){
    margin-left: 0;
}
.in-text div:nth-child(3){
    margin-right: 0;
}
.in-text div:nth-child(2){
    margin: 0 10px;
}

/* 每日推荐 */
.day{
    /* background-color: antiquewhite; */
    height: 800px;
    display: flex;
    justify-content: center;
}
.day-photo{
    /* background-color: blue; */
    width: 920px;
    height: 800px;
    position: relative;
}
.day-photo img{
    margin-bottom: 10px;
}
.day-left{
    width: 49.5%;
    float: left;
}
.day-right{
    width: 49.5%;
    float: right;
}
.day-right .day-text{
    width: 100%;
    height: 148px;
    background-color: rgb(235, 235, 235);
    margin-bottom: 10px;
}
.day-text .center-one{
    padding-top: 40px;
    padding-left: 25px;
}
.day-right .day-text .center-one .first{
    display: flex;
}
.day-right .day-text .center-one .first .one{
    color: rgb(230, 29, 29);
    font-size: 22px;
    letter-spacing: 9px;
    margin-bottom: 8px;
}
.day-right .day-text .center-one .first .one-one{
    color: rgb(106, 104, 104);
    font-size: 22px;
    letter-spacing: 9px;
    margin-bottom: 8px;
}
.day-right .day-text .center-one .two{
    width: 50px;
    height: 5px;
    background-color: rgb(231, 20, 20);
}
.day-right .day-text .center-two .tree{
    float: right;
    margin-right: 20px;
    margin-top: 30px;
}
/* 广告条幅 */
.message{
    padding-top: 30px;
}
/* 定制服务展示 */
.server{
    /* background-color: aqua; */
    width: 70%;
    height: 550px;
    margin: 0 auto;
}
.server h2{
    margin-left: -30px;
}
.server .line{
    width: 150px;
    height: 5px;
    background-color: rgb(178, 176, 176);
    margin:10px 0 0 -35px;
}
.server .foot{
    display: flex;
    justify-content: center;
}
.server .foot img{
    width: 20%;
    margin: 40px 10px 0 10px;
}
</style>