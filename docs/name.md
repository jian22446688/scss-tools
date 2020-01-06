# 简写名称规则说明文档

## 它的痛点

- 对于每一个div 我们都要写对应的css类。 这个在开发的过程中非常浪费时间，并且不好维护。

> 用scss公共库实现样式和业务组件解耦， 快速提高开发效率！

对于每一个div 我们都要写对应的css类。 这个在开发的过程中非常浪费时间，并且不好维护。

我们发现项目的样式和组件耦合，导致每一个组件都有大量的css ,在这些css中绝大部分都是font-size、 padding 、margin、flex、color...
我们能不能像个办法 把这些常用的样式全部集成，这样我们就可以把所有的样式都从公共类中引用了。

把高频的样式集成到一个公共样式文件中

我们做了一个公共样式文件， 几乎所有高频的css都放进去了。

真实的使用体验
对于一般管控系统 比如基于element-ui ant-design 基本可以做到几乎不用写额外的样式 对于H5 css样式数量也几乎可以做到减少一半

- 只需要引入一个公共文件 足够简单
- 几乎每一个项目都能用到这些公共样式 使用足够高频
- 自从用了它，可以早点下班啦！
- 一次生成，到处复制。

> 说有的 class 前缀都是 cc-***

## size

| 属性名      | 简写名          | 说明      |
|---------- |-------------- |---------- |
| margin | mar | mar-n |
| margin: 0 0 | mar | mar-n-n |
| margin-top | mar-t | mar-t-n |
| margin-bottom | mar-b | mar-b-n |
| margin-left | mar-l | mar-l-n |
| margin-right | mar-r | mar-r-n |
| padding | pad | pad-n |
| padding: 0 0 | pad | pad-n-n |
| padding-top | pad-t | pad-t-n |
| padding-bottom | pad-b | pad-b-n |
| padding-left | pad-l | pad-l-n |
| padding-right | pad-r | pad-r-n |
| height | h | h-n |
| width | w | w-n |
| top | t | t-n |
| bottom | b | t-n |
| left | l | l-n |
| right | r | r-n |
| font-size | f-s${n}| n = 8 + 2 -- n = 30 |
| box-shadow | bs-b | -- |
| box-shadow | bs-d | -- |
| box-shadow | bs-l | -- |
| border | bc-b | -- |
| border | bc-l | -- |
| border-radius | br-0 | -- |
| border-radius | br-2 | -- |
| border-radius | br-4 | -- |
| min-height | h-min-2 | -- |
| max-height | h-max-2 | -- |
| min-width | w-min-2 | -- |
| max-width | w-max-2 | -- |
| line-height | h-line-2 | -- |

## other

| 属性名      | 简写名          | 说明      |
|---------- |-------------- |---------- |
| pointer-events | click--invalid | pointer-events:none |
| user-select | onselect | user-select: none |
| float | f--left | float:left |
| float | f--right | float:right |
| position | pos--a | position:absolute |
| position | pos--r | position:relative |
| position | pos--f | position:fixed |
| position | pos--s | position:static |
| position | pos--i | position:inherit |
| cursor | cur--a | cursor:auto |
| cursor | cur--c | cursor:crosshair |
| cursor | cur--d | cursor:default |
| cursor | cur--p | cursor:pointer |
| cursor | cur--m | cursor:move |
| cursor | cur--t | cursor:text |
| cursor | cur--w | cursor:wait |
| cursor | cur--h | cursor:help |
| font-weight | fw--n | font-weight:normal |
| font-weight | fw--b | font-weight:bold |
| font-weight | fw--l | font-weight:lighter |
| text-align | ta--c | text-align:center |
| text-align | ta--l | text-align:left |
| text-align | ta--r | text-align:right |
| text-decoration | td--o | text-align:overline |
| text-decoration | td--l | text-align:line-through |
| text-decoration | td--u | text-align:underline |
| text-decoration | td--n | text-align:none |
| overflow | ov--v | overflow:visible |
| overflow | ov--h | overflow:hidden |
| overflow | ov--s | overflow:scroll |
| overflow | ov--a | overflow:auto |

## common

| 属性名      | 简写名          | 说明      |
|---------- |-------------- |---------- |
| clearfix | clearfix | 清除浮动 |
| pointer-events | click--invalid | pointer-events:none |
| user-select | onselect | user-select: none |
| float | f--left | float:left |
| float | f--right | float:right |
| text-overflow | t-no-wrap | 文本不换行 |
| text-overflow | t-mr-2 | 文字显示2行 |
| text-overflow | t-mr-3 | 文字显示3行 |
| -- | tri-l | 左边三角形 |
| -- | tri-r | 右边三角形 |
| -- | tri-d | 下边三角形 |
| -- | tri-u | 上边三角形 |

## flex

| 属性名      | 简写名          | 说明      |
|---------- |-------------- |---------- |
| display: flex | flex | flex布局 |
| flex | flex--1 | flex 大小 1-24 |
| flex-direction: row | flex--r | 默认值: 主轴为水平方向，起点在左端 |
| flex-direction: column | flex--c | 主轴为垂直方向，起点在上沿 |
| flex-direction: row-reverse | flex--rr | 主轴为水平方向，起点在右端 |
| flex-direction: column-reverse | flex--cr | 主轴为垂直方向，起点在下沿 |
| flex-wrap: wrap |flex--wrap | 换行，第一行在上方 |
| flex-wrap: nowrap |flex--nowrap | 默认: 不换行 |
| align-self: flex-start |flex--asfs | 交叉轴的起点对齐 |
| align-self: flex-end |flex--asfe | 交叉轴的终点对齐 |
| align-self: center |flex--asc | 交叉轴的中点对齐 |
| align-self: baseline |flex--asb | 项目的第一行文字的基线对齐 |
| align-self: stretch |flex--ass | 默认: 如果项目未设置高度或设为auto，将占满整个容器的高度 |
| align-items: flex-start |flex--aisfs | 交叉轴的起点对齐 |
| align-items: flex-end |flex--aife | 交叉轴的终点对齐 |
| align-items: center |flex--aic | 交叉轴的中点对齐 |
| align-items: baseline |flex--aib | 项目的第一行文字的基线对齐 |
| align-items: stretch |flex--ais | 默认: 如果项目未设置高度或设为auto，将占满整个容器的高度 |
| align-content: flex-start |flex--aisfs | 与交叉轴的起点对齐 |
| align-content: flex-end |flex--aife | 与交叉轴的终点对齐 |
| align-content: center |flex--aic | 与交叉轴的中点对齐 |
| align-content: space-between |flex--aib | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍 |
| align-content: stretch |flex--ais | 默认值: 轴线占满整个交叉轴 |
| align-content: space-around |flex--ais | 默认: 如果项目未设置高度或设为auto，将占满整个容器的高度 |
| justify-content: flex-start |flex--jfs | 默认值: 左对齐 |
| justify-content: flex-end |flex--jfe | 右对齐 |
| justify-content: center |flex--jc | 居中 |
| justify-content: space-between |flex--jsb | 两端对齐，项目之间的间隔都相等 |
| justify-content: space-around |flex--jsa | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 |

## color

| 属性名      | 简写名          | 说明      |
|---------- |-------------- |---------- |
| background-color | bg-w | <i style="color: #FFFFFF">DOME</i> |
| background-color | bg-b | <i style="color: #000000">DOME</i> |
| background-color | bg-p | <i style="color: #409EFF">DOME</i> |
| background-color | bg-s | <i style="color: #67C23A">DOME</i> |
| background-color | bg-e | <i style="color: #E6A23C">DOME</i> |
| background-color | bg-d | <i style="color: #F56C6C">DOME</i> |
| background-color | bg-i | <i style="color: #909399">DOME</i> |
| background-color | bg-l1 | <i style="color: #53a8ff">DOME</i> |
| background-color | bg-l2 | <i style="color: #66b1ff">DOME</i> |
| background-color | bg-l3 | <i style="color: #79bbff">DOME</i> |
| background-color | bg-l4 | <i style="color: #8cc5ff">DOME</i> |
| background-color | bg-l5 | <i style="color: #a0cfff">DOME</i> |
| background-color | bg-l6 | <i style="color: #b3d8ff">DOME</i> |
| background-color | bg-l7 | <i style="color: #c6e2ff">DOME</i> |
| background-color | bg-l8 | <i style="color: #d9ecff">DOME</i> |
| background-color | bg-l9 | <i style="color: #ecf5ff">DOME</i> |
| background-color | bg-t1 | <i style="color: #303133">DOME</i> |
| background-color | bg-t2 | <i style="color: #606266">DOME</i> |
| background-color | bg-t3 | <i style="color: #909399">DOME</i> |
| background-color | bg-t4 | <i style="color: #C0C4CC">DOME</i> |
| color | tc-w | <i style="color: #FFFFFF">DOME</i> |
| color | tc-b | <i style="color: #000000">DOME</i> |
| color | tc-p | <i style="color: #409EFF">DOME</i> |
| color | tc-s | <i style="color: #67C23A">DOME</i> |
| color | tc-e | <i style="color: #E6A23C">DOME</i> |
| color | tc-d | <i style="color: #F56C6C">DOME</i> |
| color | tc-i | <i style="color: #909399">DOME</i> |
| color | tc-l1 | <i style="color: #53a8ff">DOME</i> |
| color | tc-l2 | <i style="color: #66b1ff">DOME</i> |
| color | tc-l3 | <i style="color: #79bbff">DOME</i> |
| color | tc-l4 | <i style="color: #8cc5ff">DOME</i> |
| color | tc-l5 | <i style="color: #a0cfff">DOME</i> |
| color | tc-l6 | <i style="color: #b3d8ff">DOME</i> |
| color | tc-l7 | <i style="color: #c6e2ff">DOME</i> |
| color | tc-l8 | <i style="color: #d9ecff">DOME</i> |
| color | tc-l9 | <i style="color: #ecf5ff">DOME</i> |
| color | tc-t1 | <i style="color: #303133">DOME</i> |
| color | tc-t2 | <i style="color: #606266">DOME</i> |
| color | tc-t3 | <i style="color: #909399">DOME</i> |
| color | tc-t4 | <i style="color: #C0C4CC">DOME</i> |
