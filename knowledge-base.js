const articles = [
  {
    id: 1,
    category: '安全',
    title: '1元机场陷阱与性价比避坑指南：超低价机场到底能不能用？',
    summary: '详细拆解低至 1 元/月机场的商业模式、隐藏陷阱、高倍率扣费与隐私风险，提供安全试错与备用选择指南。',
    content: `<p class="answer-box"><strong>简明结论：</strong>一元机场非常适合作为低成本应急备用节点，但不建议将其作为日常主力机场。超低价格背后往往伴随着超卖严重、晚高峰瘫痪、高倍率扣费以及较高的跑路和隐私风险。</p>

<h2>一、1元机场的低价商业模式真相</h2>
<p>在机场市场中，经常能看到宣称“1元/月”、“1.5元/100G”的极低价套餐。很多刚接触网络代理的新手往往会被这种极具性价比的宣传吸引。然而，从成本结构来看，优质的跨境专线带宽（如 IPLC/IEPL）和海外机房 BGP 入口成本高昂，单 GB 的传输成本远高于“1元套餐”的售价。那么1元机场是如何实现低价的？</p>
<p>通常情况下，1元机场采用的是<strong>极高超卖率与直连公网线路</strong>的结合方案。运营者在一条带宽有限的普通直连线路上挂载了成千上万的用户，依靠绝大多数用户“买而不常用”的闲置流量来平摊成本。一旦遇到晚高峰（20:00-23:00）大家集中使用，或者少数用户开启大文件下载，整条线路就会迅速陷入极度的拥堵状态。</p>

<h2>二、超低价机场常见的四大隐藏陷阱</h2>
<ul>
  <li><strong>1. 虚标带宽与极高丢包率：</strong>许多1元机场在宣传页上声称“千兆带宽”，但实际测速可能只有几兆到十几兆，且丢包率动辄超过 20%。看网页时频繁加载失败，看视频时不断缓冲降画质。</li>
  <li><strong>2. 隐藏的节点高倍率扣费：</strong>有些套餐虽然标注“每月 100G”，但其稳定稍好的节点倍率往往高达 5 倍甚至 10 倍。这意味着你实际使用 10G 流量，套餐内就会被扣除 50G-100G，用不了几天流量就会提前耗尽。</li>
  <li><strong>3. 售后维护缺失与随时跑路：</strong>1元套餐的利润极低，运营者通常无力提供客服支持，甚至没有提交工单的入口。一旦节点出现被封锁或服务器故障，可能几天无人修复；当收入无法覆盖服务器续费成本时，运营者随时可能关站跑路。</li>
  <li><strong>4. 隐私安全与出口 IP 污染：</strong>部分低价机场使用安全系数较低的协议，且出口 IP 被成百上千人共用，极易触发 Google 验证码、ChatGPT 访问拒绝（Access Denied）以及风控平台的封号处理。</li>
</ul>

<h2>三、怎样安全使用 1 元机场？</h2>
<p>虽然1元机场缺点明显，但只要掌握正确的风险隔离方法，它依然有其存在的价值：</p>
<ol>
  <li><strong>作为主机场掉线时的备用通道：</strong>主力机场因突发故障或维护暂时无法连接时，可以用1元机场作为临时节点，用于登录后台工单或接收紧急消息。</li>
  <li><strong>坚持短周期购买，绝不购买多年付：</strong>一元机场的生命周期往往较短，建议只选择按月付款（月付），切勿因为年付便宜几块钱而一次性预付多年。</li>
  <li><strong>做好隐私隔离，不传输敏感数据：</strong>在使用一元机场时，切勿登录个人网银、支付账号、重要电子邮箱或输入高风险隐私信息，避免流量被中转节点异常解析。</li>
  <li><strong>配合客户端分流规则：</strong>将一元机场的节点仅分配给普通浏览或低风险流量，重要业务和流媒体解锁仍走高质量线路。</li>
</ol>

<div class="article-source"><strong>数据与总结说明</strong><p>选购机场时不应单纯看价格高低，而应根据自身的实际场景、设备数量与稳定性要求综合评估。控制试错成本、建立备用方案才是长期稳定上网的保障。</p></div>`
  },
  {
    id: 2,
    category: '安全',
    title: '2026年免费机场全网寻找与安全使用全攻略：防范风险与节点获取法',
    summary: '盘点免费机场节点获取途径，深度揭露免费服务背后的安全隐患、流量劫持风险及安全使用隔离原则。',
    content: `<p class="answer-box"><strong>简明结论：</strong>天下没有免费的午餐。全网所谓的免费机场和公益订阅，大多存在流量广告劫持、隐私数据采集、高丢包率以及随时断连的问题。使用免费节点必须建立严格的安全隔离防护。</p>

<h2>一、全网免费机场节点的四大来源</h2>
<p>许多新手用户在刚接触网络代理时，都会搜索“免费机场订阅”或“公益节点”。目前网络上流传的免费节点主要来源于以下渠道：</p>
<ul>
  <li><strong>1. 商业机场的公益公测/每日签到：</strong>部分新开业的商业机场为了吸引流量，会提供少量免费节点，或通过每日签到赠送 100M-1G 的免费试用流量。这类节点相对规范，但流量极其受限。</li>
  <li><strong>2. Github/Telegram 开源节点池自动采集：</strong>网络上有大量自动爬取网络公开代理节点的程序，将散落的节点汇总生成统一订阅。这类节点数量庞大，但时延极高且失效极快。</li>
  <li><strong>3. 软件代理开发者的公益节点：</strong>部分客户端开发者或技术社区为了推行自家软件提供的公益服务器，通常速度和稳定性尚可，但连接人数众多导致拥堵。</li>
  <li><strong>4. 恶意钓鱼与流量采集节点：</strong>黑产团队建立的免费节点，其真实目的是收集连接用户的设备信息、访问域名日志，甚至是明文传输的敏感数据。</li>
</ul>

<h2>二、免费机场背后的四大核心风险</h2>
<p>使用免费节点最令人担忧的不是速度慢，而是无法预知的安全与隐私隐患：</p>

<h3>1. 流量中间人攻击（MITM）与明文数据泄露</h3>
<p>当你通过免费节点访问未全站加密（非 HTTPS）的网站时，节点运营者可以完全监视并记录你的传输内容，包括提交的表格、Cookie 凭证甚至账号密码。</p>

<h3>2. 恶意广告注入与 DNS 污染劫持</h3>
<p>部分免费节点会修改 DNS 解析，当你访问正常网页时强制弹出生持广告、赌博盘口链接或重定向到虚假钓鱼登录页，以此获取非法广告收益。</p>

<h3>3. 设备明文特征收集与隐私泄露</h3>
<p>公开节点的订阅链接可能包含跟踪代码，或者通过特定节点收集你的真实外网 IP、设备系统版本、常用应用列表等隐私画像。</p>

<h2>三、安全使用免费节点的“四不”防御规则</h2>
<p>若出于特定原因必须使用免费机场节点，请务必遵守以下安全规范：</p>
<ol>
  <li><strong>绝不登录资金账号：</strong>禁止在免费节点开启状态下登录支付宝、微信支付、网上银行或加密货币钱包。</li>
  <li><strong>绝不上传敏感身份文件：</strong>不要通过免费节点传输身份证件、合同文档、公司机密或私人相册。</li>
  <li><strong>绝不上安装来源不明的根证书：</strong>如果某个免费机场提示需要你在系统安装“安全根证书”或特定描述文件，必须立即拒绝并删除应用！</li>
  <li><strong>绝不使用系统默认主浏览器：</strong>建议在独立无痕模式或专门的沙盒浏览器中使用免费节点，防止主浏览器的 Cookie 被共享盗用。</li>
</ol>

<div class="article-source"><strong>安全使用提示</strong><p>如果对网络稳定性有基本要求，建议选择付费的月付性价比机场。每月几元钱即可获得远胜免费节点的稳定体验与安全保障。</p></div>`
  },
  {
    id: 3,
    category: '新手',
    title: 'Shadowrocket（小火箭）新手配置与高阶使用完整教程：从节点导入到规则分流',
    summary: 'iOS平台首选代理客户端小火箭（Shadowrocket）正版获取、订阅导入、规则分流配置及常见连通性故障排除全指南。',
    content: `<p class="answer-box"><strong>简明结论：</strong>Shadowrocket（俗称小火箭）是 iOS 平台上功能最全面、性价比最高的网络代理工具。掌握正版下载途径、正确导入订阅并合理设置规则分流，是顺畅使用的三大关键步骤。</p>

<h2>一、Shadowrocket 正版获取与下载注意事项</h2>
<p>由于地区政策原因，Shadowrocket 在中国大陆区 App Store 无法搜索下载。新手获取小火箭需注意以下几点：</p>
<ul>
  <li><strong>准备非大陆区 Apple ID：</strong>建议使用美区、港区或台区 Apple ID。小火箭官方售价为 2.99 美元。</li>
  <li><strong>切勿在系统设置中登录 iCloud：</strong>获取外区 Apple ID 后，仅需在 App Store 内部点击头像退出当前账号并登录外区账号，<strong>绝对不要在 iPhone 的“设置 -> 顶部 iCloud”中登录外区账号</strong>，防止设备被远程锁死。</li>
  <li><strong>谨防盗版与带毒客户端：</strong>切勿安装任何所谓的“小火箭破解版”、“免账号安装包”或网站提供的安装描述文件，这类安装包往往内嵌恶意脚本。</li>
</ul>

<h2>二、节点与订阅链接导入的三种快捷方式</h2>
<p>在机场后台获取订阅链接后，可以通过以下三种方式导入小火箭：</p>

<h3>1. 一键订阅导入（推荐）</h3>
<p>在手机浏览器打开机场后台，点击“一键导入 Shadowrocket”按钮，系统会自动唤醒小火箭应用并完成订阅节点添加。</p>

<h3>2. 手动复制订阅 URL 导入</h3>
<p>在机场后台复制通用订阅链接（或 Shadowsocks/V2Ray 订阅链接），打开小火箭 -> 点击右上角“+”号 -> 类型选择“Subscribe” -> 在 URL 处粘贴链接并保存。</p>

<h3>3. 扫码与剪贴板导入</h3>
<p>在电脑端打开机场节点的二维码，使用小火箭首页左上角的扫码功能扫描；或直接复制单个节点节点链接（如 ss:// 或 vless://），打开小火箭时会自动提示添加。</p>

<h2>三、小火箭全局路由模式详解</h2>
<p>小火箭首页的“全局路由”选项决定了设备流量如何分流，新手务必搞懂四种模式的区别：</p>
<ul>
  <li><strong>配置（Recommend）：</strong>智能分流模式。中国大陆网站直接连接，海外被封锁网站走节点代理，既节省流量又保证国内应用打开速度。</li>
  <li><strong>代理（Proxy）：</strong>全局代理模式。手机上的所有网络请求（无论国内国外）都强制通过选择的节点转发，可能导致国内应用访问变慢。</li>
  <li><strong>直连（Direct）：</strong>全局直连模式。所有流量都不经过代理节点，相当于关闭代理服务。</li>
  <li><strong>场景（Scene）：</strong>高级自动切换模式。根据当前连接的 Wi-Fi 或移动网络自动匹配不同的代理规则。</li>
</ul>

<h2>四、常见故障排查与自救方案</h2>
<ol>
  <li><strong>连上后所有网页打不开（Invalid Config）：</strong>通常是分流规则更新错误。在小火箭底栏点击“配置” -> 点击当前生效规则旁的“i”标 -> 重新重置为默认配置即可。</li>
  <li><strong>节点延迟正常但无法上网：</strong>进入“设置 -> UDP”确认是否开启代理；或重新更新一次订阅链接试看节点 IP 是否已变更。</li>
  <li><strong>小火箭后台被系统挂起：</strong>进入手机“设置 -> 通用 -> 后台 App 刷新”，确保小火箭的后台刷新开关保持开启状态。</li>
</ol>

<div class="article-source"><strong>教程小结</strong><p>小火箭支持 Shadowsocks、VMess、VLESS、Trojan、Hysteria 2 等全套协议。定期在应用内左滑刷新订阅，可以时刻保持节点配置为最新状态。</p></div>`
  },
  {
    id: 4,
    category: '新手',
    title: 'Clash / Sing-box / V2rayN 客户端选型全景对比与调优指南',
    summary: '针对Windows、macOS、Android与iOS主流代理客户端进行多维度对比，详解Sing-box与Clash的核心差异与TUN模式调优。',
    content: `<p class="answer-box"><strong>简明结论：</strong>不同操作系统对应的最佳客户端选择有所差异：Windows 首选 Clash Verge Rev 或 V2rayN，macOS 推荐 Clash Verge 或 ClashX Meta，iOS 首选 Shadowrocket/Stash，Android 推荐 Sing-box 或 Clash Meta。</p>

<h2>一、主流代理客户端对比矩阵</h2>
<p>为了帮助用户快速找到适合自己设备的客户端，下表对比了各平台主流代理软件的核心指标：</p>

<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
  <thead>
    <tr style="background:var(--bg-subtle,#f4f6f9);border-bottom:2px solid var(--border-color,#e2e8f0);">
      <th style="padding:10px;text-align:left;">客户端</th>
      <th style="padding:10px;text-align:left;">支持平台</th>
      <th style="padding:10px;text-align:left;">界面友好度</th>
      <th style="padding:10px;text-align:left;">核心特点与优势</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid var(--border-color,#e2e8f0);">
      <td style="padding:10px;"><strong>Clash Verge Rev</strong></td>
      <td style="padding:10px;">Win / Mac / Linux</td>
      <td style="padding:10px;">★★★★★</td>
      <td style="padding:10px;">现代美观UI、支持 Clash Meta 内核、内置 TUN 模式一键开启。</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border-color,#e2e8f0);">
      <td style="padding:10px;"><strong>Sing-box</strong></td>
      <td style="padding:10px;">全平台通用</td>
      <td style="padding:10px;">★★★☆☆</td>
      <td style="padding:10px;">新一代通用代理内核，占用内存小，原生支持 Hysteria 2/TUIC 协议。</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border-color,#e2e8f0);">
      <td style="padding:10px;"><strong>V2rayN</strong></td>
      <td style="padding:10px;">Windows</td>
      <td style="padding:10px;">★★★☆☆</td>
      <td style="padding:10px;">老牌经典工具，自定义参数极强，适合技术极客与多协议测试。</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border-color,#e2e8f0);">
      <td style="padding:10px;"><strong>Shadowrocket</strong></td>
      <td style="padding:10px;">iOS / iPadOS</td>
      <td style="padding:10px;">★★★★☆</td>
      <td style="padding:10px;">iOS 性价比之王，规则分流完善，支持 URL / 二维码极速导入。</td>
    </tr>
  </tbody>
</table>

<h2>二、Sing-box 与 Clash 内核的核心区别</h2>
<p>在当前的技术生态中，Sing-box 正逐步成为继 Clash 之后最受瞩目的代理内核。两者的主要差异在于：</p>
<ul>
  <li><strong>性能与内存开销：</strong>Sing-box 采用 Go 语言精心重构，规则匹配效率大幅提升，运行内存占用仅为同等规则下 Clash 的 1/3 左右，特别适合老旧设备和移动终端。</li>
  <li><strong>协议支持深度：</strong>Sing-box 率先原生实现了 Hysteria 2、TUIC v5 和 VLESS-REALITY 协议的高效解析，而 Clash 需要依赖社区分支内核（如 Mihomo / Clash Meta）方能支持。</li>
  <li><strong>配置语法门槛：</strong>Clash 使用结构清晰的 YAML 格式，易于手动修改；Sing-box 使用 JSON 结构，语法更为严谨但也稍显复杂。</li>
</ul>

<h2>三、为什么一定要开启 TUN（虚拟网卡）模式？</h2>
<p>传统的代理服务主要依赖“系统 HTTP/SOCKS5 代理”。这种方式存在很大局限性：许多应用（如 Epic/Steam 游戏客户端、CMD/PowerShell 命令行工具、部分模拟器）会自动绕过系统代理，导致代理失效。</p>
<p>开启 <strong>TUN 模式</strong> 后，客户端会在操作系统中创建一个虚拟网卡，将整机所有的网络流量（在网络层级别）接管并按规则分流。无论是玩联机外服游戏、终端代码下载，还是特定专业软件，都能实现无死角代理。</p>

<h2>四、新手选型建议</h2>
<ol>
  <li>如果使用 <strong>Windows 或 macOS</strong>，建议优先下载 <strong>Clash Verge Rev</strong>，其UI界面精致且一键切换节点非常顺手。</li>
  <li>如果使用 <strong>Android</strong> 且机场包含 Hysteria 2 协议节点，推荐使用 <strong>Sing-box 官方客户端</strong> 或 <strong>Surfboard</strong>。</li>
  <li>如果使用 <strong>iPhone/iPad</strong>，直接在 App Store 获取 <strong>Shadowrocket</strong> 或 <strong>Stash</strong> 即可。</li>
</ol>

<div class="article-source"><strong>使用建议</strong><p>客户端只是用来接管与传输流量的壳，网络速度的快慢与稳定程度，核心依然取决于你所使用的机场线路质量。</p></div>`
  },
  {
    id: 5,
    category: '线路',
    title: 'IPLC / IEPL 专线机场解密：晚高峰无感延迟与跨境优化的终极真相',
    summary: '深入剖析IPLC与IEPL国际专线原理、物理跨境链路优势、倍率计费规则及真假专线鉴别方法。',
    content: `<p class="answer-box"><strong>简明结论：</strong>IPLC 和 IEPL 是企业级点对点物理跨境内网专线。专线机场最大的优势在于不经过国家公网防火墙（GFW），即便在敏感时期或晚高峰，也能提供接近零丢包、超低抖动与极速连通体验。</p>

<h2>一、什么是 IPLC 与 IEPL 内网专线？</h2>
<p>在选购高端机场时，经常会看到“广港 IPLC”、“沪日 IEPL”或“京德专线”等标注。要理解它们的价值，首先需要明确其底层网络物理架构：</p>
<ul>
  <li><strong>IPLC（International Private Leased Circuit）：</strong>国际专线私用电路。即电信运营商在两个国家/地区之间拉开的点对点物理光纤传输通道，不经过公网路由转发。</li>
  <li><strong>IEPL（International Ethernet Private Line）：</strong>国际以太网专线。基于二层以太网技术的企业级专线，相比 IPLC 具备更高的协议扩展灵活性与更低的网络延迟。</li>
</ul>
<p>简而言之，普通直连或公网中转机场就像在繁忙的高速公路上开车，逢年过节或晚高峰必定堵车；而 IPLC/IEPL 专线则相当于自己修建了一条专有的地下隧道，不受外界交通拥堵和天气影响。</p>

<h2>二、专线机场的三大不可替代优势</h2>

<h3>1. 彻底免疫 GFW 封锁与网络波动</h3>
<p>由于专线的数据传输属于企业内网跨境，数据包在出境时不经过公网防火墙的深度包检测（DPI）。因此专线节点不会发生被封锁 IP 的情况，敏感时期依然坚如磐石。</p>

<h3>2. 晚高峰无感延迟与超低抖动</h3>
<p>公网中转线路在晚高峰 20:00-23:00 期间，物理出口往往会产生严重挤压导致丢包率飚升至 10%-30%；而专线预留了独享物理带宽，无论何时测试，丢包率均无限接近于 0%。</p>

<h3>3. 极速握手与优质流媒体解锁体验</h3>
<p>专线节点物理距离短、跳转路由节点少，能够大幅缩短 TCP 和 TLS 握手耗时。在使用 4K 流媒体高码率播放、FPS 外服游戏联机时，体验极为流畅。</p>

<h2>三、如何鉴别“真专线”与“假宣传”？</h2>
<p>专线带宽价格极其昂贵（每 1Mbps 独享带宽月租可达数百元人民币），因此部分劣质机场会拿普通中转线路假冒 IPLC 专线。以下是鉴别真伪的科学方法：</p>
<ol>
  <li><strong>查看晚高峰 MTR/Traceroute 路由路径：</strong>使用 MTR 工具测试节点出口。真专线从内网入口 IP 到香港出口 IP 之间，节点跳转数通常在 3-5 跳以内，且中间完全不出现公网 202.97 或 59.43 等公网骨干网路由跳数。</li>
  <li><strong>连续测试丢包率与抖动：</strong>在晚高峰 21:00 连续进行 100 次 Ping 连通测试。如果丢包率为 0% 且延迟抖动不超过 2ms，方符合专线品质；若丢包率大于 5%，必为普通中转假冒。</li>
  <li><strong>看节点倍率与套餐定价：</strong>专线的成本决定了其不可能出现“10元/月无限流量”的套餐。真专线机场的流量单价通常较高，或在热门节点上设置 2 倍至 5 倍的高倍率。</li>
</ol>

<div class="article-source"><strong>选购建议</strong><p>如果你的使用场景包含实时外服游戏、高频跨境办公、秒杀冲浪或对稳定度有极端要求，IPLC/IEPL 专线是终极方案；若仅为日常轻度看剧与浏览网页，优质的公网中转套餐性价比更高。</p></div>`
  },
  {
    id: 6,
    category: '安全',
    title: '机场跑路前有哪些征兆？风险防范与订阅安全自救指南',
    summary: '总结机场失联与跑路前夕常见的异常信号，提供止损防坑策略、套餐周期选择建议与个人订阅安全防范。',
    content: `<p class="answer-box"><strong>简明结论：</strong>机场行业门槛低、流动性大，几乎每周都有机场因成本覆盖困难或外部因素选择跑路。学会辨识跑路前的异常征兆，并坚守“月付原则”，是保卫个人资金与订阅安全的最佳武器。</p>

<h2>一、机场跑路前夕的 5 大危险征兆</h2>
<p>根据多年对机场生态的观察，机场运营者在决定跑路或关站前，通常会展现出以下几种典型的异常行为：</p>
<ul>
  <li><strong>1. 疯狂推出骨折级大促与“多年付/永久套餐”：</strong>运营者资金链即将断裂时，往往会推出诸如“买一年送一年”、“100元终身无限流量”等极具诱惑力的超级优惠，试图在关站前圈一笔热钱。</li>
  <li><strong>2. 官方 Telegram 频道禁言或解散交流群：</strong>当大量节点出现故障且运营者无意修复时，为了阻止用户维权抱怨，他们会开启 Telegram 频道全员禁言，甚至直接关停用户交流群。</li>
  <li><strong>3. 客服工单长期无人回复：</strong>提交服务工单后，连续 48-72 小时以上没有任何人工客服答复，或仅有机器人自动回复无关痛痒的内容。</li>
  <li><strong>4. 节点大面积变红掉线且更新频繁失败：</strong>主线节点批量瘫痪，官方没有任何线路维护公告；或者主站域名频繁更换且缺乏安全证书。</li>
  <li><strong>5. 运营团队在社交平台销声匿迹：</strong>机场背后的技术主导人员 Telegram 账号长时间显示“最近未上线”或彻底注销。</li>
</ul>

<h2>二、防范跑路风险的黄金防坑法则</h2>

<h3>法则一：坚守“月付”底线，切勿盲目囤积长期套餐</h3>
<p>机场服务具有强烈的时效性与不确定性。再老牌、再著名的机场，也不保证能稳定运营三年五年。折算下来年付虽然看似便宜 20%-30%，但一旦遭遇机场跑路，剩余的月份将全部化为乌有。按月付费能把单次损失降到最低。</p>

<h3>法则二：建立“主备双机场”机制</h3>
<p>不要把所有鸡蛋放在同一个篮子里。日常可以准备一个质量优良的优质中转机场作为主用，同时配置一个低成本的月付机场或备用节点。主线路突发故障时，备用线路能保证工作学习不中断。</p>

<h3>法则三：保护个人付款隐私</h3>
<p>在购买机场套餐充值时，优先选择支持第三方担保或具备隐私保护的支付渠道。切勿直接使用银行卡直连或向个人微信/支付宝二维码进行大额转账。</p>

<h2>三、发现跑路征兆后的紧急处理步骤</h2>
<ol>
  <li><strong>解绑自动扣款授权：</strong>如果曾使用支付宝、微信或 PayPal 绑定了机场的周期性自动扣款协议，需第一时间在支付软件内关闭授权。</li>
  <li><strong>导出并备份配置信息：</strong>保存好自己的常用规则配置，防止主站关闭后无法提取节点信息。</li>
  <li><strong>及时重置敏感关联账号密码：</strong>如果在该机场注册时使用了与其他重要平台相同的邮箱和密码，请立即修改关联账号密码。</li>
</ol>

<div class="article-source"><strong>安全提示</strong><p>面对极度夸张的低价大促时，时刻保持理性。天下没有亏本做生意的卖家，过低的价格往往意味着极高的跑路风险。</p></div>`
  },
  {
    id: 7,
    category: '流媒体',
    title: 'Netflix、Disney+ 与 ChatGPT / Claude 解锁失败排查全流程',
    summary: '详解跨国流媒体与AI工具风控机制，提供节点解锁判断层级、IP风控属性排查及DNS缓存清理避坑方案。',
    content: `<p class="answer-box"><strong>简明结论：</strong>解锁失败通常由 IP 属性变更为数据中心 IP、平台风控数据库更新、本地 DNS 缓存污染或客户端分流规则错误所致。通过按层级排查与清除缓存，绝大多数解锁故障均可快速恢复。</p>

<h2>一、节点解锁的 4 个质量层级</h2>
<p>在宣传页上，机场往往会标注“全节点解锁 Netflix/ChatGPT”。但在实际使用中，解锁效果其实分为以下四个不同的质量层级：</p>
<ul>
  <li><strong>层级 1：网页能打开（Basic Access）：</strong>仅代表网络连通性正常，能够正常载入官网首页。</li>
  <li><strong>层级 2：账号能登录（Auth Pass）：</strong>可以成功输入账号密码进入后台，但可能无法观看完整版权库。</li>
  <li><strong>层级 3：只能看非版权自制剧（Restricted）：</strong>在 Netflix 上只能看到自制剧，搜不到第三方版权热播剧集，说明该 IP 已被 Netflix 识别为代理 IP 实施了半封锁。</li>
  <li><strong>层级 4：全功能 4K 原生解锁（Full Unlock）：</strong>完美解锁当地全部版权剧集、支持 4K 高清播放，且 ChatGPT 交互毫无阻碍。</li>
</ul>

<h2>二、ChatGPT 与 AI 工具访问被拒（Error 1020）排查</h2>
<p>在使用 ChatGPT、Claude 或 Midjourney 等 AI 工具时，最常遇到的报错是 <code>Access Denied (Error 1020)</code> 或 Cloudflare 人机验证死循环。这主要是因为：</p>
<ol>
  <li><strong>IP 风险评分（Risk Score）过高：</strong>同一出口 IP 被太多用户同时用于请求 OpenAI 接口，导致 Cloudflare 将该 IP 判定为恶意爬虫或自动脚本。</li>
  <li><strong>节点地区不在 AI 官方支持范围内：</strong>使用了香港、俄罗斯等非 OpenAI 支持地区的代理节点。</li>
  <li><strong>浏览器 Cookie 残留错误信息：</strong>先前失败的访问在浏览器本地留下了被标记的 Cookie，即便更换了干净节点依然被拒绝。</li>
</ol>

<h2>三、流媒体解锁故障排查 5 步法</h2>
<p>当遇到 Netflix 或 Disney+ 突然无法播放时，请按以下标准化流程排查：</p>
<ol>
  <li><strong>第 1 步：确认节点地区匹配：</strong>观看美区 Netflix 必须连接美国节点；使用 ChatGPT 建议切至新加坡、日本或美国原生节点。</li>
  <li><strong>第 2 步：切换同地区其他备用节点：</strong>机场通常会提供多个同一地区的节点（如“香港 01”、“香港 02”），尝试切换到其他节点。</li>
  <li><strong>第 3 步：彻底清理浏览器/ App 缓存：</strong>在手机设置中强行停止应用并清理缓存；电脑端清除特定域名的 Cookie 记录，或直接开启无痕/隐身窗口测试。</li>
  <li><strong>第 4 步：检查客户端 DNS 与分流设置：</strong>确保小火箭或 Clash 的 DNS 解析设置为远程安全 DNS（如 8.8.8.8 或 1.1.1.1），避免本地运营商 DNS 污染导致解锁失效。</li>
  <li><strong>第 5 步：在节点检测工具中核验 IP 属性：</strong>访问 <code>scamalytics.com</code> 或 <code>ipinfo.io</code>，查看当前节点的 IP 是否为 Residential（住宅原生 IP）。</li>
</ol>

<div class="article-source"><strong>经验总结</strong><p>平台的风控规则是动态变化的，今天能解锁的节点明天可能需要机场补充 DNS 解锁服务器。挑选流媒体机场时，要看运营者更新解锁 IP 的响应速度。</p></div>`
  },
  {
    id: 8,
    category: '测速',
    title: '机场测速跑满几百兆，为什么看视频和网页依然卡顿？',
    summary: '解构 Speedtest 测速与实际网络体验脱节的核心原因，分析单线程/多线程、丢包率、延迟抖动与DNS解析对真实体验的影响。',
    content: `<p class="answer-box"><strong>简明结论：</strong>测速截图上的“跑满 500M”往往是多线程并发连接本地测速节点的结果。而看视频、打开网页和实时语音高度依赖单线程传输、延迟抖动与丢包率。测速好看不等于实际体验好。</p>

<h2>一、测速跑满与实际卡顿的四大核心矛盾</h2>

<h3>1. 多线程并发测速 vs 单线程应用传输</h3>
<p>常见的 Speedtest 默认采用 8-16 个并发线程同时拉取数据，即使每个线程速度只有 30Mbps，叠加起来也能凑出 500Mbps 的惊人数据。然而，浏览器打开网页、播放 YouTube/Netflix 视频时，核心传输主要依赖<strong>单线程 TCP 连接</strong>。如果节点的单线程能力较差，测速数据再漂亮，看视频依然会频繁缓冲。</p>

<h3>2. 测速服务器近 vs 目标网站服务器远</h3>
<p>测速软件通常会自动为你匹配地理位置最近的测速服务器（例如在香港节点测速时连接香港 Speedtest 节点）。但这并不代表你访问部署在美东或欧洲的网站时也能达到同样速度。跨境跨境骨干网拥堵往往发生在跨洋海底光缆段。</p>

<h3>3. 峰值下载速度 vs 延迟抖动与高丢包率</h3>
<p>即使瞬时峰值速度很高，如果线路丢包率达到 3% 以上，TCP 协议就会频繁触发重传机制，导致网络请求陷入“停顿-重传-恢复”的死循环。对于网页加载、FPS 游戏和视频会议而言，1% 的丢包带来的负面体验远超速度下降 50%。</p>

<h2>二、TCP 窗口缩减机制对视频加载的致命打击</h2>
<p>网络传输遵循 TCP 拥塞控制算法。当物理线路发生丢包时，接收方会自动缩小“TCP 接收窗口（TCP Window Size）”，传输速率会瞬间呈断崖式下跌。只有重新经过数个 RTT（往返耗时）没有丢包后，速度才会缓慢爬升。这就是为什么高丢包线路看视频会频繁出现“突然卡顿到 480P”的原因。</p>

<h2>三、科学评估机场真实体验的方法</h2>
<p>抛弃单一的 Speedtest 截图，建议使用以下更加客观全面的测试手段：</p>
<ol>
  <li><strong>进行单线程速度测试：</strong>在测速设置中将连接模式由“Multi（多线程）”修改为“Single（单线程）”，测试真实的单线程带宽。</li>
  <li><strong>使用 Fast.com 进行视频专项测试：</strong>Fast.com 节点直接部署在 Netflix 的 CDN 节点上，其测试结果能真实反映高码率视频播放能力。</li>
  <li><strong>连续 Ping/MTR 丢包率测试：</strong>在晚高峰时段对节点出口 IP 进行连续 200 次 Ping 测试，观察延迟的标准差（抖动）以及丢包率指标。</li>
</ol>

<div class="article-source"><strong>测速防坑小贴士</strong><p>不要轻信商家宣传页上的极限测速图。只有在晚高峰 20点-23点，在自己的本地网络环境下亲自测试得出的连续体验，才是最准确的依据。</p></div>`
  },
  {
    id: 9,
    category: '线路',
    title: 'VLESS、Trojan、Hysteria 2 与 TUIC 代理协议性能与抗封锁对比',
    summary: '深度拆解常见代理协议底层传输原理，对比 TCP 类与基于 UDP 的新型协议在弱网环境、高丢包率及抗封锁表现上的优劣。',
    content: `<p class="answer-box"><strong>简明结论：</strong>传统的 Trojan 和 VLESS-REALITY 协议抗封锁能力强、伪装度高；而新一代基于 UDP 的 Hysteria 2 和 TUIC 协议则是恶劣弱网与高丢包环境下的提速利器。根据本地网络类型选择对应协议能显著提升体验。</p>

<h2>一、代理协议演进简史与分类</h2>
<p>网络代理协议经历了数代技术革新，主要分为以下两大派系：</p>
<ul>
  <li><strong>TCP 派系（Shadowsocks / VMess / Trojan / VLESS）：</strong>数据基于 TCP 协议传输。通过 TLS 加密与真实网站证书伪装（如 VLESS-REALITY），将代理流量伪装成正常的 HTTPS 网页浏览流量，避开防火墙检测。</li>
  <li><strong>UDP 派系（Hysteria 2 / TUIC）：</strong>数据基于 UDP 协议传输。借鉴了 Google QUIC 协议的设计理念，专门针对高丢包、高延迟的恶劣网络环境进行了拥塞控制优化。</li>
</ul>

<h2>二、主流协议性能与抗封锁对比</h2>

<h3>1. VLESS-REALITY：当前伪装度最高的 TCP 协议</h3>
<p>VLESS 是一种无状态轻量级协议。结合 <strong>REALITY</strong> 技术后，它不需要运营者自己购买域名，而是借用大型正规网站（如 Apple、Microsoft）的 TLS 证书进行流量掩护。GFW 探测时只会看到与合规大站的正常 TLS 握手，抗封锁能力极强。</p>

<h3>2. Hysteria 2（歇斯底里）：弱网与跨网提速神器</h3>
<p>Hysteria 2 采用了自定义的拥塞控制算法。当遇到物理线路丢包时，传统 TCP 会主动减速，而 Hysteria 2 会进行“暴力补发数据包”，强行在丢包率 10%-20% 的劣质公网线路上跑满带宽。非常适合移动宽带或蜂窝网络用户。</p>

<h3>3. TUIC：低延迟与快速建连首选</h3>
<p>TUIC 基于 QUIC 协议打造，实现了 0-RTT 极速连接握手。在网络频繁切换（如从 Wi-Fi 切换到 5G）时，能够实现连接无缝缝合，不会出现网页断连或应用报错。</p>

<h2>三、运营商与网络环境协议匹配指南</h2>
<ol>
  <li><strong>电信 / 联通骨干网环境：</strong>公网质量相对优良，推荐使用 <strong>VLESS-REALITY 或 Trojan 协议</strong>，享受极佳的稳定度与低 CPU 占用。</li>
  <li><strong>移动宽带 / 校园网 / 弱网环境：</strong>跨网质量较差且丢包严重，强烈建议开启 <strong>Hysteria 2 协议节点</strong>，能够带来数倍的提速效果。</li>
</ol>

<div class="article-source"><strong>协议选购提示</strong><p>协议并非越新越好。Hysteria 2 对服务器 CPU 开销较大，且部分本地运营商对 UDP 流量存在限速政策，选型时应以实测为准。</p></div>`
  },
  {
    id: 10,
    category: '安全',
    title: '机场订阅链接泄露紧急处置与个人网络隐私安全防护规范',
    summary: '解析订阅链接的明文本质与泄露风险，提供订阅被盗刷后的重置与清理流程，以及第三方向量订阅转换的安全隐患。',
    content: `<p class="answer-box"><strong>简明结论：</strong>订阅链接包含你的个人账户凭证（Token）。订阅链接一旦泄露，任何人都可以获取你的全部节点配置、盗用你的套餐流量，甚至导致设备连接被无限限制。泄露后必须第一时间在后台重置！</p>

<h2>一、机场订阅链接的明文本质与危险性</h2>
<p>当我们在机场后台复制“订阅链接”并粘贴到客户端时，这个链接本质上是一个带有独一无二账户密钥的 URL（例如 <code>https://example.com/api/v1/client/subscribe?token=a1b2c3d4...</code>）。</p>
<p>当客户端访问这个 URL 时，机场服务器会返回经过 Base64 加密的全部节点服务器 IP、端口、密码及协议参数。**如果他人获得了你的订阅链接，就等同于获得了你账户的节点使用权。**</p>

<h2>二、订阅链接泄露的 3 个高发途径</h2>
<ul>
  <li><strong>1. 在公开论坛、TG 群聊粘贴截图或日志：</strong>在寻求技术帮助时，新手常把小火箭的诊断日志或配置文件截图发到公开群，图中直接露出了带有 Token 的完整订阅地址。</li>
  <li><strong>2. 使用免费的公共第三方“订阅转换”服务：</strong>将订阅链接输入到未知来源的第三方 Subconverter 网站进行格式转换，恶意转换站可以在后台直接记录并转卖你的 Token。</li>
  <li><strong>3. 客户端配置文件被公共云盘同步：</strong>将包含明文节点配置的软件文件夹备份到无密码的网盘或公开 Github 仓库中。</li>
</ul>

<h2>三、订阅链接泄露后的紧急处置 4 步法</h2>
<ol>
  <li><strong>第 1 步：登录机场后台重置订阅密钥（Reset Token）：</strong>在机场用户中心找到“重置订阅链接”或“修改订阅密钥”按钮并点击。重置后，原先泄露的链接将彻底作废。</li>
  <li><strong>第 2 步：在所有客户端中删除旧节点配置：</strong>打开手机和电脑上的代理客户端，选定原先导入的订阅列表并执行“彻底删除”。</li>
  <li><strong>第 3 步：重新导入生成的新订阅链接：</strong>在机场后台重新复制更新后的新订阅链接，再次导入客户端并刷新节点。</li>
  <li><strong>第 4 步：检查账户在线设备与流量扣减：</strong>查看后台“历史登录记录”与流量统计，确认是否有未知地区的 IP 在持续消耗你的套餐额度。</li>
</ol>

<h2>四、个人网络代理安全防护终极检查清单</h2>
<ul>
  <li>√ 绝不在任何公开场合透露包含个人 Token 的网址。</li>
  <li>√ 尽量使用客户端原生的订阅解析功能，避免使用不明第三方的订阅转换网站。</li>
  <li>√ 为机场官网账号设置独立的高强度密码，并开启双重身份验证（2FA）。</li>
</ul>

<div class="article-source"><strong>安全防护建议</strong><p>时刻将订阅链接提升到与“账号密码”同等的安全级别来保管，提高网络安全防范意识才能享受放心的上网体验。</p></div>`
  },

  // 10 篇原有基础文章 (IDs 11-20)
  { id: 11, category: '新手', title: '什么是机场、节点和订阅链接？新手入门完整解释', summary: '从三个基础概念开始，理解客户端、订阅和节点之间的关系。' },
  { id: 12, category: '新手', title: '2026 年机场怎么选？从预算、流量到线路的完整指南', summary: '先确定使用场景，再比较月均成本、流量、设备限制和线路。' },
  { id: 13, category: '新手', title: '机场订阅链接怎么用？Windows、macOS、iOS 导入方法', summary: '不同系统入口不同，但核心流程都是复制、导入、更新和连接。' },
  { id: 14, category: '新手', title: '月付、季付还是年付？机场套餐周期选择建议', summary: '长期套餐不一定更划算，应把服务变化和退款风险算入成本。' },
  { id: 15, category: '新手', title: '机场流量 100GB 够用吗？不同场景用量估算', summary: '文字办公、短视频、高清影视和下载任务的流量差异很大。' },
  { id: 16, category: '线路', title: '直连、中转、隧道和专线有什么区别？', summary: '名称不是质量保证，关键是高峰期路由、拥堵和实际可用性。' },
  { id: 17, category: '线路', title: 'IEPL、IPLC 是什么？专线机场一定更快吗？', summary: '专线通常强调跨境传输路径，但最终体验仍受入口和出口影响。' },
  { id: 18, category: '线路', title: '机场倍率是什么意思？1 倍、2 倍节点如何计算流量', summary: '倍率决定扣除流量，不等于速度倍数，选节点前应先看计费规则。' },
  { id: 19, category: '线路', title: '香港、日本、新加坡节点怎么选？', summary: '节点距离只是参考，运营商路由和使用目标同样重要。' },
  { id: 20, category: '线路', title: '为什么同一个机场不同地区体验差异很大？', summary: '本地运营商、入口链路、跨境路由和目标网站共同决定体验。' },

  // 10 篇原有测速与流媒体文章 (IDs 21-30)
  { id: 21, category: '测速', title: '机场测速怎么看？延迟、抖动、丢包和速度详解', summary: '不要只看下载峰值，连续可用性和丢包更影响真实体验。' },
  { id: 22, category: '测速', title: '晚高峰机场怎么测？20 点到 23 点测试方法', summary: '固定节点、固定设备、重复采样，才能比较不同日期的变化。' },
  { id: 23, category: '测速', title: '节假日线路稳定性为什么要单独测试？', summary: '长假流量结构不同于普通工作日，需要独立记录和比较。' },
  { id: 24, category: '测速', title: 'Speedtest 很快但视频卡顿，问题可能在哪里？', summary: '测速服务器近不等于目标服务近，单次峰值也不代表持续带宽。' },
  { id: 25, category: '测速', title: '如何建立自己的机场测速记录表？', summary: '记录时间、网络、节点、延迟、下载、上传与丢包，使用中位数。' },
  { id: 26, category: '流媒体', title: 'Netflix、Disney+、YouTube 解锁是什么意思？', summary: '能打开、能登录和能持续播放是三个不同层级。' },
  { id: 27, category: '流媒体', title: '看 4K 视频需要多少速度和流量？', summary: '持续带宽比瞬时峰值重要，同时需要计算每小时流量消耗。' },
  { id: 28, category: '流媒体', title: '流媒体解锁失败怎么办？节点切换与缓存排查', summary: '先确认地区与账号，再更换节点、清理缓存并重新登录。' },
  { id: 29, category: '流媒体', title: '为什么同一节点今天能解锁明天不能？', summary: '平台风控、IP 属性和服务商调整都会让解锁状态发生变化。' },
  { id: 30, category: '流媒体', title: 'YouTube 很快但 Netflix 很慢，原因是什么？', summary: '不同平台使用不同 CDN、IP 判断和传输路径，表现不能互相替代。' },

  // 10 篇原有跨境与安全文章 (IDs 31-40)
  { id: 31, category: '跨境', title: '跨境电商使用机场要注意什么？', summary: 'IP 地区一致性、账号环境和长连接稳定性比峰值速度重要。' },
  { id: 32, category: '跨境', title: '店铺登录应该固定节点吗？如何减少环境变化', summary: '频繁切换地区会增加账号环境变化，工作场景应保持一致。' },
  { id: 33, category: '跨境', title: 'ChatGPT、Claude 等 AI 工具节点怎么选？', summary: '关注地区可用性、会话稳定和长文本响应，不只看测速。' },
  { id: 34, category: '跨境', title: '远程办公如何选择稳定线路？', summary: '会议、文件上传和远程桌面对延迟、上传与丢包要求不同。' },
  { id: 35, category: '跨境', title: '多人团队共享机场套餐要注意哪些限制？', summary: '确认设备数、并发、账号规则和流量，避免触发限制。' },
  { id: 36, category: '安全', title: '1 元机场为什么可能不好用？低价套餐避坑指南', summary: '极低价可能是短期入口，应检查续费、倍率、限速和售后。' },
  { id: 37, category: '安全', title: '免费机场安全吗？使用前需要知道的风险', summary: '来源不明的配置可能带来隐私、可用性和软件安全问题。' },
  { id: 38, category: '安全', title: '订阅链接泄露怎么办？重置与安全检查步骤', summary: '订阅链接相当于访问凭证，泄露后应及时重置并更新客户端。' },
  { id: 39, category: '安全', title: '机场跑路前可能有哪些信号？', summary: '异常促销、长期套餐、停止维护和售后失联都值得警惕。' },
  { id: 40, category: '安全', title: '机场年付套餐值得买吗？价格之外的风险评估', summary: '年付月均便宜，但应考虑服务变化、退款规则和资金风险。' }
];

const categoryAdvice = {
  新手: '新手最容易犯的错误，是先看价格再想用途。更可靠的顺序是先列出设备数量、每月大致流量、常用地区和主要用途，再比较对应套餐。不要因为年付折算便宜就忽略服务变化风险，也不要把节点数量等同于可用节点数量。',
  线路: '线路名称用于描述传输方式，但不能单独证明质量。入口拥堵、跨境路由、出口负载、目标网站和本地运营商都会影响结果。比较线路时应在相同设备、相同网络和相近时段下重复测试。',
  测速: '一次测速只能描述当时状态。有效记录应包含日期、时段、运营商、设备、节点、延迟、抖动、丢包、下载和上传，并至少连续测试三次。比较时优先使用中位数，避免只展示最好成绩。',
  流媒体: '流媒体体验包含访问、登录、地区识别、清晰度和连续播放。页面写着支持解锁，只能说明具备访问条件，实际效果仍会随着平台风控、IP 属性和节点负载变化。',
  跨境: '跨境业务更重视环境一致性和连接连续性。频繁切换国家、IP 或设备，可能增加平台验证。工作用途应选择固定地区，保留备用节点，并避免多人共用同一业务账号。',
  安全: '安全判断不能只看价格。需要核对客户端来源、订阅链接保管、付款周期、退款规则和服务商维护状态。任何要求关闭安全软件或安装来路不明程序的操作都应暂停。'
};

const topicFocus = [
  '低价机场虽然便宜，但在晚高峰或极端网络环境下波动明显。使用前做好心理预期与风险隔离。',
  '免费服务模式不一，数据传输未经加密或缺乏审计时存在泄露隐患。高敏感业务切勿依赖免费节点。',
  'iOS 设备使用 Shadowrocket 关键在于正版账号获取与合理的规则分流机制。',
  '客户端是接管流量的界面，选择好用、节省资源的客户端能显著提升网络操控体验。',
  '专线能够提供极高稳定性与低丢包率，但成本高昂，适合对连通质量有高要求的高端用户。',
  '跑路风险防范的核心是控制预付周期，坚持月付是规避资金风险最直接的手段。',
  '解锁体验涉及出口 IP 属性与风控库，遇到无法播放时按标准化排查步骤处理。',
  '峰值测速仅作参考，真正决定长久体验的是单线程速度、线路抖动与晚高峰连续稳定性。',
  '协议不仅决定加密方式，更决定弱网环境下的抗丢包与握手效率，应按本地宽带特点选择。',
  '订阅链接相当于私人令牌，任何时候都应避免公开泄露，发现异常第一时间在后台重置。'
];

function articleBody(a) {
  if (a.content) {
    return a.content;
  }
  const advice = categoryAdvice[a.category] || categoryAdvice['新手'];
  const focus = topicFocus[(a.id - 1) % topicFocus.length] || '网络体验由本地运营商、入口线路、节点负载、目标服务和使用时间共同决定。';
  return `<p class="answer-box"><strong>简明结论：</strong>${a.summary} 判断时不要只看单个参数，要把价格、限制、真实场景和长期风险放在一起。</p>
<h2>这个问题为什么重要？</h2>
<p>${a.title.replace(/[？?].*/, '')}直接影响购买成本和日常体验。网络体验由本地运营商、入口线路、节点负载、目标服务和使用时间共同决定，因此需要把可核验信息与实际测试分开。</p>
<p>${focus}</p>
<h2>核心指标与选购建议</h2>
<p>${advice}</p>
<h2>推荐的操作步骤</h2>
<ol>
  <li>明确用途：浏览、视频、AI、跨境业务或远程办公。</li>
  <li>记录预算、设备数量和每月流量，不为用不到的额度付费。</li>
  <li>优先月付或短周期试用，确认本地网络表现后再决定是否长期购买。</li>
  <li>选择两个以上常用节点，在日间与晚高峰分别测试。</li>
  <li>记录延迟、丢包、持续速度和实际应用表现，使用中位数判断。</li>
</ol>
<div class="article-source"><strong>数据说明</strong><p>本文为方法型知识内容，不以服务商宣传代替实测。涉及套餐与价格时应以服务商当前页面为准，线路表现需结合地区、运营商、节点和时段验证。</p></div>`;
}

const app = document.getElementById('libraryApp'), params = new URLSearchParams(location.search), id = +params.get('id');

function renderArticle(a) {
  document.title = `${a.title}｜机场精准查`;
  document.querySelector('meta[name="description"]').content = a.summary;
  document.querySelector('.library-hero').style.display = 'none';
  app.innerHTML = `<article class="knowledge-article">
    <a class="back-library" href="library.html">← 返回知识库</a>
    <span class="article-category">${a.category} / ARTICLE ${String(a.id).padStart(2, '0')}</span>
    <h1>${a.title}</h1>
    <div class="article-meta">
      <span>更新：2026-10-08</span>
      <span>约 6-8 分钟阅读</span>
      <span>机场精准查编辑部</span>
    </div>
    ${articleBody(a)}
    <div class="related-links">
      <strong>继续阅读</strong>
      ${articles.filter(x => x.id !== a.id).slice(0, 3).map(x => `<a href="library.html?id=${x.id}">${x.title} →</a>`).join('')}
    </div>
  </article>`;
  
  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.summary,
    dateModified: '2026-10-08',
    author: { '@type': 'Organization', name: '机场精准查' }
  });
  document.head.appendChild(schema);
}

function renderList(page = 1, query = '', category = '') {
  const filtered = articles.filter(a => (!category || a.category === category) && (a.title + a.summary + a.category).toLowerCase().includes(query.toLowerCase()));
  const pages = Math.max(1, Math.ceil(filtered.length / 6));
  const current = Math.min(page, pages);
  const items = filtered.slice((current - 1) * 6, current * 6);

  app.innerHTML = `
    <div class="library-toolbar">
      <div>
        <h2>热门话题与热搜指南</h2>
        <p>从基础概念到实际使用，按热门问题快速查找权威答案。</p>
      </div>
      <input id="articleSearch" value="${query}" placeholder="搜索 40 篇知识文章 (包含一元机场、免费机场、小火箭...)" aria-label="搜索知识文章">
    </div>
    <div class="category-tabs">
      <button class="${category ? '' : 'active'}" data-cat="">全部</button>
      ${['新手', '线路', '测速', '流媒体', '跨境', '安全'].map(c => `<button class="${category === c ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('')}
    </div>
    <section class="knowledge-grid">
      ${items.map(a => `<a class="knowledge-card" href="library.html?id=${a.id}">
        <span>${a.category} · ARTICLE ${String(a.id).padStart(2, '0')}${a.id <= 10 ? ' · 热搜' : ''}</span>
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <em>阅读全文 →</em>
      </a>`).join('') || '<p>没有找到相关文章。</p>'}
    </section>
    <nav class="pagination" aria-label="文章分页">
      ${Array.from({ length: pages }, (_, i) => `<a class="${i + 1 === current ? 'active' : ''}" href="library.html?page=${i + 1}" data-page="${i + 1}" aria-label="第 ${i + 1} 页">${i + 1}</a>`).join('')}
    </nav>`;

  document.getElementById('articleSearch').oninput = e => renderList(1, e.target.value, category);
  document.querySelectorAll('[data-page]').forEach(b => b.onclick = e => {
    e.preventDefault();
    const next = +b.dataset.page;
    history.pushState({}, '', `library.html?page=${next}`);
    renderList(next, query, category);
    scrollTo({ top: document.querySelector('.library-toolbar').offsetTop - 30, behavior: 'smooth' });
  });
  document.querySelectorAll('[data-cat]').forEach(b => b.onclick = () => renderList(1, query, b.dataset.cat));
}

const selected = articles.find(a => a.id === id);
selected ? renderArticle(selected) : renderList(+params.get('page') || 1);

addEventListener('popstate', () => {
  const current = new URLSearchParams(location.search);
  const article = articles.find(a => a.id === +current.get('id'));
  article ? renderArticle(article) : renderList(+current.get('page') || 1);
});
