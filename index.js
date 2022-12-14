const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '快递',
    '空包',
    '代发',
    'v2',
    '单号',
    '你妈',
    '你筝',
    '傻逼',
    'maplesuagrt'
  ],
  disallowIPList: [
    '220.173.125.83',
    '222.83.150.92'
  ],
  secureDomains: [
    'qystudio.ltd',
    'qystu.cc',
    'www.qystudio.ltd',
    'www.qystu.cc',
    'qystudio0.vercel.app',
    'waline.qystudio.ltd',
    'waline.qystu.cc',
    'kotodama.yunyoujun.cn'
  ],
  mailSubject: '{{parent.nick}}，您在 {{site.name}} 上发表的评论,收到了来自 {{self.nick}} 的回复',
  mailSubjectAdmin: '{{site.name}} 上收到了来自 {{self.nick}} 的留言',
  mailTemplate: '<div style="border-radius:5px;width:680px;margin:30px auto 0;max-width:100%"><div style="box-shadow:0 0 30px 0 rgb(219 216 214);border-radius:5px;width:630px;margin:auto;max-width:100%;;margin-bottom:-30px"><div style="width:200px;height:40px;margin-left:0;text-align:center;line-height:40px;text-decoration:none;color:#fff;background-color:#94a9b9;border-radius:5px 0">Dear: {{parent.nick}}</div><div style="line-height:180%;padding:0 15px 12px;margin:auto;color:rgb(0, 0, 0);font-size:14px;margin-bottom:0"><h2 style="border-bottom:1px solid #ddd;font-size:16px;font-weight:400;padding:0px 0 10px 8px"><span style="color:#12addb;font-weight:700">&gt;</span>您在<a style="text-decoration:none;color:#f55066;;font-weight:bold;"href="{{site.postUrl}}" target="_blank">《{{site.name}}》</a>的评论有了新的回复呐~</h2><div style="padding:0 12px 0 12px;margin-top:18px"><div class="Messages_box"><p style="display:flex;justify-content:flex-end">您的评论：</p><div class="ax_post_box-comments-single Messages-author" style="display: flex;justify-content: flex-end;margin-bottom: 5px"><div class="ax_post_box-comment-avatar" style="width: auto;flex: none;order: 2"><img src="{{self.nick}}" style="width: 40px;height: 40px;border-radius: 5px"></div><div class="ax_post_box-comment-text" style="position: relative;margin-right: 10px"><span class="ax_post_box-comment-text-before" style="width: 0;height: 0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid;border-left-color:#f4f4f4;border-right:0;border-right-color:transparent;right: -7px;left: auto;top: 12px;position: absolute"></span><div class="ax_post_box-comment-text-inner" style="background-color: #f1f3fa;padding: 10px;border-radius: 9px;margin-bottom: 3px">{{parent.comment | safe}}</div></div></div><p><strong>{{self.nick}}</strong> 给你回复：</p><div class="ax_post_box-comments-single Messages-user" style="display: flex;margin-bottom: 5px"><div class="ax_post_box-comment-avatar" style="width: auto;flex: none"><img src="{{self.avatar}}" style="width: 40px;height: 40px;border-radius: 5px"></div><div class="ax_post_box-comment-text" style="position: relative;margin-left: 10px"><span class="ax_post_box-comment-text-before" style="width: 0;height: 0;border-top: 8px solid transparent;border-bottom: 8px solid transparent;border-right: 8px solid;border-right-color: #f4f4f4;left: -7px;right: auto;top: 12px;position: absolute"></span><div class="ax_post_box-comment-text-inner" style="background-color: #f1f3fa;padding: 10px;border-radius: 9px;margin-bottom: 3px">{{self.comment | safe}}</div></div></div></div></div><div style="color:#8c8c8c;font-size:10px;width:100%;text-align:center;word-wrap:break-word;margin-top: 20px;"><p>不因何事去制作 只因兴趣而创造</p></div><div style="text-align:center"><a style="text-decoration:none;color:#fff;background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);padding:5px 20px;border-radius:4px;position:absolute;margin-left:-35px;margin-top:10px" href="{{site.postUrl}}" target="_blank">查看</a></div></div><div style="color:#8c8c8c;font-size:10px;width:100%;text-align:center;margin-top:50px"><p>本邮件为系统自动发送，请勿直接回复~</p></div><div style="color:#8c8c8c;padding-bottom: 10px;font-size:10px;width:100%;text-align:center"><p>©2020-always Copyright {{site.name}}</p></div></div></div>',
  mailTemplateAdmin: '<div style="border-radius:5px;width:680px;margin:30px auto 0;max-width:100%"><div style="box-shadow:0 0 30px 0 rgb(219 216 214);border-radius:5px;width:630px;margin:auto;max-width:100%;;margin-bottom:-30px"><div style="line-height:180%;padding:0 15px 12px;margin:10px auto;color:rgb(0, 0, 0);font-size:14px;margin-bottom:0"><h2 style="border-bottom:1px solid #ddd;font-size:16px;font-weight:400;padding:13px 0 10px 8px"><span style="color:#12addb;font-weight:700">&gt;</span>您的网站<a style="text-decoration:none;color:#f55066;font-weight:bold;" href="{{site.postUrl}}" target="_blank">《{{site.name}}》</a>有了新的评论耶~</h2><div style="padding:0 12px 0 12px;margin-top:18px"><div class="Messages_box"><p><strong>{{self.nick}}</strong> 给你评论：</p><div class="ax_post_box-comments-single Messages-user" style="display: flex;margin-bottom: 5px"><div class="ax_post_box-comment-avatar" style="width: auto;flex: none"><img src="{{self.avatar}}" style="width: 40px;height: 40px;border-radius: 5px"></div><div class="ax_post_box-comment-text" style="position: relative;margin-left: 10px"><span class="ax_post_box-comment-text-before" style="width: 0;height: 0;border-top: 8px solid transparent;border-bottom: 8px solid transparent;border-right: 8px solid;border-right-color: #f4f4f4;left: -7px;right: auto;top: 12px;position: absolute"></span><div class="ax_post_box-comment-text-inner" style="background-color: #f1f3fa;padding: 10px;border-radius: 9px;margin-bottom: 3px">{{self.comment | safe}}</div></div></div></div><p>其他信息：</p><p style="background-color:#f5f5f5;border:0 solid #ddd;padding:10px 15px;margin:18px 0">邮箱：<a href="mailto:{{self.mail}}">{{self.mail}}</a><br>状态：{{self.status}}</p></div><div style="color:#8c8c8c;font-size:10px;width:100%;text-align:center;word-wrap:break-word;"><p>不因何事去制作 只因兴趣而创造</p></div><div style="text-align:center"><a style="text-decoration:none;color:#fff;background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);padding:5px 20px;border-radius:4px;position:absolute;margin-left:-35px;margin-top:10px" href="{{site.postUrl}}" target="_blank">查看</a></div></div><div style="color:#8c8c8c;margin-top: 50px;padding-bottom: 10px;font-size:10px;width:100%;text-align:center"><p>©©2020-always Copyright {{site.name}}</p></div></div></div>			'
});
