import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

let instance = null;

function render(props = {}) {
    const { container } = props;
    instance = createApp(App).use(router).mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
//--------- 生命周期函数------------//
export async function bootstrap() {
    /* bootstrap 只会在微应用初始化的时候调用一次，
     * 下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
     * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
     */
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    //应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法。
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    //应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例。
    console.log('instance', instance.$destroy)
        // instance.$destroy();
        // instance.$el.innerHTML = '';
    instance = null;
}
//update：可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效。