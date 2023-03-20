import type {
  PermissionModeConstants,
  RouterTransitionConstants,
  SessionTimeoutProcessingConstants,
  SettingButtonPositionConstants,
} from "@celeris/constants";

export interface MenuSetting {
  collapsed: boolean;
}

export interface HeaderSetting {
  shouldShow: boolean;

  shouldShowFullScreen: boolean;

  shouldShowSearch: boolean;
}

export interface TransitionSetting {
  // 是否开启页面切换动画
  // Whether to open the page switching animation
  shouldEnable: boolean;
  // 路由基本切换动画
  // Route basic switching animation
  basicTransition: RouterTransitionConstants;
  // 是否开启页面切换加载
  // Whether to open page switching loading
  shouldOpenPageLoading: boolean;
  // 是否开启顶部进度条
  // Whether to open the top progress bar
  shouldOpenNProgress: boolean;
}
/**
* 项目配置接口
*/
export interface ProjectConfig {
  // 是否显示配置按钮
  // Whether to display the setting button
  shouldShowSettingButton: boolean;

  // 是否显示主题切换按钮
  // Whether to display the dark mode toggle button
  shouldShowDarkModeToggle: boolean;

  // 配置按钮显示位置
  // The position of the setting button display
  settingButtonPosition: SettingButtonPositionConstants;

  // 权限模式
  // The permission mode
  permissionMode: PermissionModeConstants;

  // 会话超时处理方式
  // The session timeout processing method
  sessionTimeoutProcessing: SessionTimeoutProcessingConstants;

  // 网站灰色模式，开启可能是因为某些悲伤的日子
  // Whether to enable the gray mode of the website, which may be enabled due to some sad days
  shouldEnableGrayMode: boolean;

  // 是否开启色弱模式
  // Whether to enable the color weak mode
  shouldEnableColorWeak: boolean;

  // 主题颜色
  // The theme color
  themeColor: string;

  // 主界面全屏显示，不显示菜单和顶部
  // Whether to display the main interface in full screen, without menu and top bar
  shouldShowFullContent: boolean;

  // 是否显示 logo
  // Whether to display the logo
  shouldShowLogo: boolean;

  // 是否显示全局底部
  // Whether to display the global footer
  shouldShowFooter: boolean;

  // 头部设置
  // The header setting
  headerSetting: HeaderSetting;

  // 菜单设置
  // The menu setting
  menuSetting: MenuSetting;

  // 动画配置
  // The animation configuration
  transitionSetting: TransitionSetting;

  // 页面布局是否启用 keep-alive
  // Whether to enable keep-alive for page layout
  shouldOpenKeepAlive: boolean;

  // 锁屏时间
  // The lock screen time
  lockTime: number;

  // 是否显示面包屑
  // Whether to display the breadcrumb
  shouldShowBreadCrumb: boolean;

  // 是否显示面包屑图标
  // Whether to display the breadcrumb icon
  shouldShowBreadCrumbIcon: boolean;

  // 是否使用 error-handler-plugin
  // Whether to use the error-handler-plugin
  shouldUseErrorHandle: boolean;

  // 是否开启返回顶部
  // Whether to enable the back to top function
  shouldUseOpenBackTop: boolean;

  // 是否可以嵌入 iframe 页面
  // Whether to embed iframe pages
  canEmbedIFramePage: boolean;

  // 是否在切换界面时删除未关闭的消息并通知
  // Whether to delete unclosed messages and notify when switching pages
  shouldCloseMessageOnSwitch: boolean;

  // 是否在切换界面时取消已发送但未响应的 http 请求
  // Whether to cancel sent but unresponsive http requests when switching pages
  shouldRemoveAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  APP_TITLE: string;
  // Service interface url
  API_URL: string;
  // Project abbreviation
  APP_SHORT_NAME: string;
}

export interface GlobEnvConfig extends ImportMetaEnv {
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;

  VITE_USER_NODE_ENV: string;
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
}

// App Environment Variables
// 应用程序环境变量
export interface ViteEnvVariables extends GlobEnvConfig {

  // Node environment type
  // Node环境类型
  NODE_ENV: string;

  // Vite configuration port number
  // Vite配置端口号
  VITE_PORT: number;

  // Whether to use mock data
  // 是否使用模拟数据
  VITE_USE_MOCK: boolean;

  // Whether to enable PWA
  // 是否开启 PWA
  VITE_USE_PWA: boolean;

  // The public path when deployed
  // 部署时的公共路径
  VITE_PUBLIC_PATH: string;

  // Proxy configuration
  // 代理配置
  VITE_PROXY: [string, string][];

  // Website title
  // 网站标题
  VITE_GLOB_APP_TITLE: string;

  // Website short name
  // 网站短名称
  VITE_GLOB_APP_SHORT_NAME: string;

  // Whether to use CDN acceleration
  // 是否使用 CDN 加速
  VITE_USE_CDN: boolean;

  // Whether to remove console in production environment
  // 是否在生产环境中去除 console
  VITE_DROP_CONSOLE: boolean;

  // Whether to enable https
  // 是否启用 https
  VITE_USE_HTTPS: boolean;

  // Whether to compress build products
  // 是否压缩构建产物
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";

  // Whether to delete the original file after compression
  // 是否删除原始文件
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;

  // Whether to support legacy browsers
  // 是否兼容老版本浏览器
  VITE_LEGACY: boolean;

  // Whether to enable image compression
  // 是否启用图片压缩
  VITE_USE_IMAGEMIN: boolean;
}
