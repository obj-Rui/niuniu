/*
 * @Author: wangrui
 * @Date: 2023-07-14 15:16:13
 * @LastEditors: wangrui 1522468667@qq.com
 * @Description:
 * @LastEditTime: 2023-07-14 15:36:36
 */
// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
// import NButton from './button';
import miuUI from "./entry";
createApp({
  template: `
    <div>
    <SButton color="blue" round plain icon="search" ></SButton>
    <SButton color="green" round plain icon="edit" ></SButton>
    <SButton color="gray" round plain icon="check" ></SButton>
    <SButton color="yellow" round plain icon="message" ></SButton>
    <SButton color="red" round plain icon="delete" ></SButton>
</div>
    `,
})
  .use(miuUI)
  .mount("#app");
