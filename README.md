这是第一次上传文件至github，只是做了一个简单的项目。
介绍：
该项目的作用是对字符串进行简单的处理，从而满足一些简单的需求。包括去除空格，转化小写，添加后缀。主要的逻辑是运用中间件函数：
```
function middleWare(initValue,next){
  //对initValue进行处理，例如：
  let currentValue=initValue+'1'
  //将currentValue传到下一个中间价：
  next(currentValue)
}
```
next函数要自定义。
多个中间件顺序执行，以达到想要的需求
