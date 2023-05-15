export function isMobile() {
     return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);

}
export function isiOS(){
    var str = isphoneOs();
    return str=="IOS"


}
export function isphoneOs () {

    var u = navigator.userAgent 
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isAndroid) {
      return 'Android'
    }

    if (isiOS) {
      return 'IOS'

    }
    return ''

}    

export function getnavbtnModels () {
    let arr = ["首页","关于我们","城乡融合","志愿者服务中心","新闻资讯","开放生态","联系我们"];
    let tag = 1;
    let modelarr = [];
    arr.forEach(title => {
        var obj = {		// 创建了一个含有属性和方法的对象
            title,	
            tag 
        }
        modelarr.push(obj);
        tag++;
        
    });
    return modelarr;

    

}  
 