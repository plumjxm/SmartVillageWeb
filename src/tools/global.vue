<script type="text/javascript">
    const appname = '智惠乡村'

    //城乡融合数据
    const cxrhlist = [
        {
          img:require('../../static/cxrh/1.jpg'),
          title:'乡村振兴共创实验室',
          intro:'挖掘乡村场景，通过场景设计和数字创新推动乡村振兴，培育更多的乡村场景升级为社区配套。'
        },
        {
          img:require('../../static/cxrh/2.jpg'),
          title:'乡村振兴微光行动计划',
          intro:'基于乡村场景的微光行动设计，实现城乡之间的持续联动，用一个个微小的行动，助力乡村振兴和城乡融合发展。'
        },
        {
          img:require('../../static/cxrh/3.jpg'),
          title:'e岗通',
          intro:'依托e岗通的一体化解决方案，以城市的技术、产业、文化、人力资源为基础，将城市的资源集群整体向乡村主动渗透，创造城乡之间的共享价值、社区能力、跨领域合作和在地的自主性和永续性，推动城乡深度融合，构建乡村振兴的可持续发展路径。'
        },
    ]
    
  
    //志愿者中心数据
    const zyzcenterlist = [
        {
          title:'志愿服务组织之一(民政部)',
          intro:'家',
          pagename:'jjpage',
          number:8,

        },
        {
          title:'"阳光使者"乡村服务基地',
          intro:'个',
          pagename:'jjpage',
          number:394,
        },
        {
          title:'共享行动媒体报道阅读量',
          intro:'亿',
          pagename:'jjpage',
          number:4.8,
        }

    ]

     //开放生态数据
    const kfstlist = [
        {
          img:require('../../static/openst/Frame@2x-0-d.png'),
          title:'生态伙伴',
          intro:'挖掘乡村场景',
          hoverimg:require('../../static/openst/Frame@2x-0.jpg')
        },
        {
          img:require('../../static/openst/Frame@2x-1-d.png'),
          title:'渠道入驻',
          intro:'助力乡村振兴和城乡融合发展。',
          hoverimg:require('../../static/openst/Frame@2x-1.jpg')

        },
        {
          img:require('../../static/openst/Frame@2x-2-d.png'),
          title:'共建未来社区',
          intro:'创造城乡之间的共享价值、社区能力',
          hoverimg:require('../../static/openst/Frame@2x-2.jpg')

        }
        
    ]


    //联系电话地址等
    const connectlist = [
        {
            
            iconname:require('../../static/connect/phone.png'),
            title:"联系电话",
            intro:"13910166419",
            type:1,
        },
        {
            iconname:require('../../static/connect/email.png'),
            title:"联系邮箱",
            intro:"info@zhihuicun.org.cn",
            type:2,
        },
        {
            iconname:require('../../static/connect/address.png'),
            title:"联系地址",
            intro:"北京市东城区金鱼池中街1号院1号楼2层1单元230室",
            type:3
        },



    ]


    const connect_codelist = [ 
          {img:require('../../static/gzh.jpg'),title:appname+'公众号'},
          {img:require('../../static/wb.jpg'),title:appname+'微博'}
    ]
    export default {

        appname,
        cxrhlist,
        zyzcenterlist,
        kfstlist,
        connectlist,
        connect_codelist

    }

</script>
