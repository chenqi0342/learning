//jsx运行的基础 virtual dom
//react组件在内部维护的一套虚拟dom状态，
//这套dom状态最终会映射到真实dom节点上，当虚拟dom状态发生变化，计算虚拟dom之间的区别，产生一个diff，吧diff高效的映射到ui上
//virtaul dom的两个假设
//组件的dom结构是相对稳定的
//类型相同的兄弟节点，可以被唯一标识,key
//key,降低diff算法复杂度，优化性能
//虚拟dom是一层一层比较的，线性比较，复杂度只有O(n)
