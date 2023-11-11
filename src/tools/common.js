export const navmaxw = 1920//1920
export const navminw = 1200//1200
export const navminws = 980//780
export const navminwxs = 450

export function isMobile() {
    return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);

}
export function openUrl(url) {
    let ismobile = isMobile()
    if(ismobile){
        window.location.href = url
    }else{
        window.open(url,'_blank')
    }
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
    let arr = ["首页","关于我们","城乡融合","志愿服务中心","新闻资讯","开放生态","联系我们","志愿云"];
    let idarr = ["","aboutus","cxrh","vscenter","news","openecology","connectus","vslogin"];
    // let arr = ["首页","关于我们","城乡融合","志愿服务中心","新闻资讯","开放生态","联系我们"];
    // let idarr = ["","aboutus","cxrh","vscenter","news","openecology","connectus"];
    let tag = 1;
    let modelarr = [];
    arr.forEach(title => {
        var id = idarr[tag-1]
        var path = '/'+id
        var obj = {		// 创建了一个含有属性和方法的对象
            title,	
            tag,
            id,
            path
        }
        modelarr.push(obj);
        tag++;
        
    });
    return modelarr;

    

}  

export function getCenterClass(){
    let type = getBgClassType()
    let classtr = ''
    if(type==-1){
        classtr = 'mallw_max'
    }else if(type==0){
        classtr = 'mallw_max'
    }else if(type==1){
        classtr = 'mallw_small'
    }else if(type==2){
        classtr = 'mallw_mobile'
    }else{
        classtr = 'mallw_mobile_xs'
    } 
    return  classtr


}
export function getBgClassType(){
    let type = 0
    let width_screen = document.documentElement.offsetWidth||document.body.offsetWidth;
    if(width_screen>=navmaxw){
        type = -1
    }else if(width_screen<navmaxw&&width_screen>navminw){
        type = 0
    }else if(width_screen<=navminw&&width_screen>navminws){
        type = 1
    }else if(width_screen<=navminws&&width_screen>navminwxs){
        type = 2
    }else{
        type = 3
    } 
    // console.log("-getBgClassType-type-",type,width_screen)

    return  type


}
export function scrollToLocation(top,animate){
    let todic = {top}
    if(animate){

        todic['behavior'] = 'smooth'
    } 
    window.scrollTo(todic)


}

export function trimAll(ele){
    if(typeof ele === 'string'){
        return ele.split(/[\t\r\f\n\s]*/g).join('');
    }else{
        return ''
    }

}

export function hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

 