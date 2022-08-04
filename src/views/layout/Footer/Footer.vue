<template>
    <!-- 尾部相关服务 -->
    <div class="footer">
        <!-- 上部 -->
        <div class="top">
            <!-- 第一块 -->
            <div class="footer-one">
                <h2>宣白·Gru</h2>
                <div class="footer-one-icon">
                    <img src="../../../assets/img/weiBo.png" alt="">
                    <img src="../../../assets/img/qq.png" alt="">
                    <img src="../../../assets/img/weChat.png" alt="">
                </div>
            </div>
            <!-- 第二块 -->
            <div class="footer-two">
                <b>新手指南</b>
                <div class="p">
                    <p>购物流程</p>
                    <p>支付方式</p>
                    <p>常见问题</p> 
                </div>
                
            </div>
            <!-- 第三块 -->
            <div class="footer-three">
                <b>售后服务</b>
                <div class="p">
                    <p>退款说明</p>
                    <p>保养物语</p>                     
                </div>
            </div>
            <!-- 第四块 -->
            <div class="footer-four">
                <b>物流配送</b>
                <div class="p">
                    <p>配送方式</p>
                    <p>配送服务</p>                     
                </div>
            </div>
            <!-- 第五块 -->
            <div class="footer-five">
                <b>关于我们</b>
                <div class="p">
                    <p>联系我们</p>
                    <p>加入我们</p>                   
                </div>
            </div>
        </div>
        <!-- 下部 -->
        <div class="under">
            <div class="font">
                <p>宣白商业股份有限公司</p>
                <p>www.gru.com</p>                   
            </div>

        </div>
    </div>
</template>

<script>

export default {
  name:'Footer',
}
</script>
<style scoped >  
/* 尾部相关服务 */
.footer{
    height: 260px;
}
.footer .top{
    height: 180px;
    background-color: rgb(208, 208, 208);
    display: flex;
    justify-content: center;
}
.footer .top>div{
    margin: 50px 0 30px 30px;
}
.footer .top .footer-one{
    width: 150px;
    height: 100px;
    /* background-color: aqua; */
}
.footer .top .footer-one h2{
    color: gray;
    font-size: 16px;
    letter-spacing: 5px;
    padding-top: 0px;
    margin-bottom: 20px;
    /* margin-left: 24px; */

}
.footer .top .footer-one .footer-one-icon{
    display: flex;
}
.footer .top .footer-one .footer-one-icon img{
    width: 20px;
    margin: 0 10px;
}
.footer .top .footer-two{
    width: 150px;
    height: 100px;
    /* background-color: aqua; */
}
.footer .top .footer-three{
    width: 150px;
    height: 100px;
    /* background-color: aqua; */
}
.footer .top .footer-four{
    width: 150px;
    height: 100px;
    /* background-color: aqua; */
}
.footer .top .footer-five{
    width: 150px;
    height: 100px;
    /* background-color: aqua; */
}

.footer .top .footer-two b{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px;
}
.footer .top .footer-two .p{
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
    /* margin-left: 5px; */
}
.footer .top .footer-three b{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px; 
}
.footer .top .footer-three .p{
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-left: 5px;
}
.footer .top .footer-four b{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px;
}
.footer .top .footer-four .p{
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-left: 5px;
}
.footer .top .footer-five b{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px;
}
.footer .top .footer-five .p{
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-left: 5px;
}
.footer .under{
    height: 80px;
    background-color: rgb(231, 231, 231); 
    text-align: center;
}
.footer .under .font{
    padding-top: 20px;
    
}
</style>