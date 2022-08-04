<template>
   <!-- 头部导航栏 -->
    <div class="header-top">          
        <!-- 头部 -->
        <ul class="header-menu">
            <!-- logo -->
            <li class="logo">
                <a href="#" ><img src="../../../assets/img/logo.jpg" alt=""></a>
            </li>
            <li  v-for="(item,index) in menu" :key="index" >
                <router-link :to="{path:item.path}" active-class="item">{{item.title}}</router-link>
            </li>
            <li class="input" >
                <input type="text"  id="name">
                <div class="search" >
                    <img src="../../../assets/img/search.png" alt="搜索">
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return {
        menu:[
            {title:'Home',path: '/app/index/h'},
            {title:'Type', path:'/app/index/t'},
            {title:'Occasion',path:'/app/index/o'},
            {title:'Object', path:'/app/index/b'},
            {title:'Variety',path:'/app/index/v'},
            {title:'Festival',path:'/app/index/f'},
        ]

    }
  },
}
</script>
<style scoped>
/* 头部导航栏 */
.header-top .header-menu{
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: antiquewhite; */
    height: 90px;  
}
.header-top .header-menu li{
    margin: 0 25px;
}
.header-top .header-menu .item{
    padding: 0 30px;
    font-family:  monospace;
    color: rgb(105, 104, 104);
}
.header-top .header-menu li  .a-one{
    color: rgb(195, 57, 57);
}
.header-top .header-menu li  a:hover{
    color: rgb(195, 57, 57);
}
.header-top .header-menu li .search{
    width: 20px;
    height: 20px;
    position: absolute;
    margin-left: 123px;
    margin-top: -21px;
    
}
</style>