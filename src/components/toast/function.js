import Vue from 'vue';
import Component from './fun-toast';

const ToastConstructor = Vue.extend(Component);

const instances = [];
let seed = 1;

const removeInstance = (instance,removeHeight) => {
    if (!instance) return;
    const len = instances.length;
    const index = instances.findIndex(inst => instance.id === inst.id);

    instances.splice(index, 1);
    if (len <= 1) return;
    for (let i = index; i < len - 1; i++) {
        let offset = instances[i].verticalOffset;
        instances[i].verticalOffset =
            parseInt(offset) - removeHeight - 16;
    }
};

const toast = (options) => {
    if(Vue.prototype.$isServer) return;
    const {
        autoClose,
        ...rest
    } = options;

    const instance = new ToastConstructor({
        propsData: {
            ...rest
        },
        data: {
            autoClose: autoClose === undefined ? 2000 : autoClose
        }
    });

    const id = `toast_${seed++}`;
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;

    let verticalOffset = 80;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    verticalOffset += 16;
    instance.verticalOffset = verticalOffset;

    const removeHeight = instance.vm.$el.clientHeight;

    instances.push(instance);

    instance.vm.$on('closed', () => {
        removeInstance(instance,removeHeight);
        document.body.removeChild(instance.vm.$el);
        instance.vm.$destroy();
    });
    return instance.vm;
};

export default toast;
