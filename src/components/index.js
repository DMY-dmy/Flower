import Toast from './toast/function';

const components = {
    Toast,
};

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
    Vue.prototype.$loading = Load;
    Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};