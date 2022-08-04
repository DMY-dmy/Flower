<template>
    <transition name="fade"
                @after-leave="afterLeave"
                @after-enter="afterEnter">
        <div class="toast"
             v-show="visible"
             :style="style">
            <svg-icon :icon-class="type" class="toast-item"></svg-icon>
            <span class="toast-item">{{message}}</span>
        </div>
    </transition>
</template>

<script>
    // const typeMap = ['success','error','warring'];

    export default {
        name: "toast",
        props:{
            message:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default: 'success'
            }
        },
        data(){
            return {
                visible: true
            }
        },
        methods:{
            afterLeave(){
                this.$emit('closed');
            },
            afterEnter(){
            },
        },
        computed:{
            style(){
                return {
                }
            }
        }
    }
</script>

<style scoped >
    /* .toast{
        border-radius: 3px;
        font-size: 0;
        background-color: rgba(169,169,169,0.7);
        @include setPadding(14px,40px,14px,40px);

        .toast-item{
            display: inline-block;
            &:nth-child(1){
                width: 24px;
                height: 24px;
            }
            &:nth-child(2){
                font-size: 14px;
                vertical-align: top;
                line-height: 24px;
                color: #ffffff;
                padding-left: 9px;
            }
        }
    } */
   /* @media  screen and(min-width:320px) and(max-width:786px){
       .toast{
         width: 300px;
       }
    } */
</style>
