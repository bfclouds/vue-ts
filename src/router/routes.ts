import { RouteRecordRaw } from 'vue-router'
const modules = import.meta.globEager('./modules/*.ts');
console.log(modules)

const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const mod: RouteRecordRaw = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export default routeModuleList
