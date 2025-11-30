import React from 'react';
import CommandCard, { Var } from './components/CommandCard';
import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'sec-identity',
    title: '第一章：公民身份注册',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 身份绑定</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">
          接入天市垣的第一步，请在您的<strong>个人专属群</strong>中建立坐标。绑定后解锁背包、信件、小群开设等所有核心权限。
        </p>
        
        <CommandCard content={<>
          注册坐标 <Var>恋综名</Var> <Var>用户名</Var> <Var>个人群群号</Var>
        </>} />

        <blockquote className="bg-white/5 border-r-2 border-r-tang-gold p-5 my-8 text-right italic text-white">
          提示：可以通过 <code>打开芥子空间</code> 查看背包，或 <code>st show</code> 查看面板。
        </blockquote>

        <CommandCard content={<>
          注册用户名 <Var>用户名</Var>
        </>} />
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">（游客模式：仅注册身份，无法接收私人信件）</p>
      </>
    )
  },
  {
    id: 'sec-letters',
    title: '第二章：鸿雁传书 (社交)',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 心动信 (朱雀传书)</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">
          每日最重要的心意投递。<br />
          <span className="text-tang-red">⚠️ 时间法则：每日 22:30 截止投递，22:31 由朱雀统一派送。</span>
        </p>

        <CommandCard content={<>
          朱雀传书 <Var>发信人</Var>to<Var>收信人</Var><br/>
          发信人：<Var>署名(可匿名)</Var><br/>
          收信人：<Var>对方称呼(可匿名)</Var><br/>
          传递媒介：<Var>物品描述</Var><br/>
          内容：<Var>正文(支持图片)</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">2. 小纸条 (长安速递)</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">即时送达。可带图片，需保证在一个气泡内发送。</p>
        <CommandCard content={<>
          长安速递 <Var>发信人(可略)</Var>to<Var>收信人</Var> <Var>内容</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">3. 礼物与道具 (小马物流)</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">道具和信用点转送与芥子空间直接关联。</p>

        <CommandCard content={<>
          小马物流 <Var>发信人</Var>to<Var>收信人</Var> 礼物 <Var>描述</Var>
        </>} />
        <CommandCard content={<>
          小马物流 <Var>发信人</Var>to<Var>收信人</Var> 道具 <Var>道具全名</Var> <Var>数量</Var>
        </>} />
        <CommandCard content={<>
          小马物流 <Var>发信人</Var>to<Var>收信人</Var> 信用点 <Var>数量</Var>
        </>} />
      </>
    )
  },
  {
    id: 'sec-hologram',
    title: '第三章：全息世界 (语擦)',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 启动全息舱 (开群)</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">
          类型说明：<br/>
          • <strong>小群 / 心愿</strong>：戏后结算信用点。<br/>
          • <strong>电话 / 微信 / 其他</strong>：不结算奖励。
        </p>

        <CommandCard content={<>
          登入全息舱 <Var>类型</Var> <Var>AxB</Var> <Var>时间段</Var> <Var>地点</Var>
        </>} />

        <div className="bg-tang-red/10 border border-tang-red/30 p-4 rounded text-sm text-[#ddd]">
          <strong className="text-tang-red block mb-2">⚠️ 严正警告：</strong>
          <ul className="list-disc list-inside space-y-1">
            <li>仅能开启当日小群。</li>
            <li>时间为24小时制，冒号为英文冒号。</li>
            <li><span className="text-white">24:00</span> 为临界值，请务必用 <span className="text-white">23:59</span> 代替！</li>
            <li>收到邀请后，请引用消息回复“<strong>同意</strong>”以获取二维码。</li>
            <li>入群后所有发言自动录入复盘，<strong>禁止随意下皮发言！</strong></li>
            <li>特殊情况请用 <code>p</code> 前缀，如：<code>p老师我来开戏！</code></li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">2. 登出与结算</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">系统自动结算信用点并重置。</p>
        <CommandCard content={<>离开全息舱</>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">3. 心愿榜</h3>
        <CommandCard content={<>
          递交心愿 <Var>恋综名</Var> <Var>时间</Var> <Var>地点</Var> <Var>心愿内容</Var>
        </>} />
        <CommandCard content={<>
          摘取心愿 <Var>恋综名</Var> <Var>编号</Var>
        </>} />
        <CommandCard content={<>查看心愿</>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">4. 星轨查询 (时间线)</h3>
        <CommandCard content={<>查看时间线</>} />
        <CommandCard content={<>
          查看时间线 <Var>Dn</Var>
        </>} />
      </>
    )
  },
  {
    id: 'sec-craft',
    title: '第四章：天工与养成',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 天工熔铸 (合成/分解)</h3>
        <CommandCard content={<>
          天工熔铸 <Var>道具名</Var>
        </>} />
        <CommandCard content={<>
          天工解构 <Var>道具名</Var>
        </>} />
        <CommandCard content={<>
          查看图纸 <Var>道具名</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">2. 修行进阶</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">查询等级、头衔及升级条件。</p>
        <CommandCard content={<>查看养成</>} />
      </>
    )
  },
  {
    id: 'sec-explore',
    title: '第五章：探索与经济',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 天垣市集</h3>
        <CommandCard content={<>逛逛市集</>} />
        <CommandCard content={<>
          购买市集商品 <Var>商品名</Var> <Var>数量</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">2. 星图踩点</h3>
        <CommandCard content={<>
          踩点坐标 <Var>地点名</Var>
        </>} />
        <CommandCard content={<>
          使用道具 <Var>道具名</Var> <Var>数量</Var>
        </>} />
        <CommandCard content={<>
          丢弃道具 <Var>道具名</Var> <Var>数量</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">3. 抽签</h3>
        <CommandCard content={<>
          抽取签筒 <Var>签名</Var>
        </>} />
        <CommandCard content={<>查看签筒</>} />
      </>
    )
  },
  {
    id: 'sec-service',
    title: '第六章：生活服务',
    content: (
      <>
        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">1. 盖洛点歌</h3>
        <CommandCard content={<>
          盖洛点歌 <Var>恋综名</Var><br/>
          点歌人：<Var>名(可匿名)</Var><br/>
          献给：<Var>名(可匿名)</Var><br/>
          歌名：<Var>名</Var><br/>
          节选歌词：<Var>内容(可图)</Var>
        </>} />

        <h3 className="text-xl font-bold text-tang-gold mt-8 mb-4">2. 贴心提醒</h3>
        <p className="text-[#ddd] text-base font-medium leading-relaxed mb-4">时间格式支持："每天"、"明晚八点"、"08月05日22:00"。</p>
        <CommandCard content={<>
          盖洛提醒 <Var>时间</Var> <Var>内容</Var> @<Var>某人</Var>
        </>} />
        <CommandCard content={<>查询提醒</>} />
        <CommandCard content={<>
          取消提醒 <Var>时间</Var> <Var>内容</Var>
        </>} />
      </>
    )
  }
];