import Toast from './toast';

export default {
    extends:Toast,
    computed:{
        style() {
            return {
                position:'fixed',
                left:'50%',
                transform:'translateX(-50%)',
                top:`${this.verticalOffset}px`,
                transition:'all linear 0.3s',
                zIndex:9999
            };
        }
    },
    data(){
        return {
            verticalOffset:80,
            visible: true,
            autoClose:2000
        }
    },
    mounted(){
        this.createTimer();
    },
    methods:{
        createTimer(){
            if(this.autoClose){
                this.timer = setTimeout(() => {
                    this.visible = false;
                },this.autoClose)
            }
        },
        clearTimer(){
            if(this.timer){
                clearTimeout(this.timer);
            }
        }
    },
    beforeDestory() {
        this.clearTimer();
    }
}
