import type { CSSProperties, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { Locale } from '../locale/types';

export interface TooltipProps extends CommonProps {
    /**
     * 样式类名的品牌前缀
     */
    prefix?: string;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: CSSProperties;

    /**
     * tooltip 的内容
     */
    children?: ReactNode;

    /**
     * 弹出层位置
     */
    align?: AlignEnum;

    placement?: AlignEnum;

    /**
     * 触发元素
     */
    trigger?: ReactElement;

    /**
     * 触发行为
     * 鼠标悬浮，鼠标点击 ('hover', 'click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用 triggerType 为 click 的 Balloon 组件
     */
    triggerType?: string | Array<string>;

    /**
     * 弹层组件 style，透传给 Popup
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     */
    popupProps?: PopupProps;
    /**
     * 弹层在触发以后的延时显示，单位毫秒 ms
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     */
    mouseLeaveDelay?: number;

    /**
     * 是否 pure render
     */
    pure?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层 id, 传入值才会支持无障碍
     */
    id?: string;
    followTrigger?: boolean;
    /**
     * 开启 v2
     */
    v2?: boolean;
    /**
     * [v2] 箭头是否指向目标元素的中心
     */
    arrowPointToCenter?: boolean;
    autoFocus?: boolean;

    alignEdge?: boolean;
    autoAdjust?: boolean;
    rtl?: boolean;
    visible?: boolean;
}

export interface TooltipState {
    align?: AlignEnum;
    innerAlign: boolean;
}

export type AlignEnum =
    | 't'
    | 'r'
    | 'b'
    | 'l'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br'
    | 'lt'
    | 'lb'
    | 'rt'
    | 'rb';

/** @api Balloon */
export interface BalloonProps extends CommonProps {
    prefix?: string;
    pure?: boolean;
    rtl?: boolean;
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: CSSProperties;

    /**
     * 浮层的内容
     */
    children?: ReactNode;

    size?: string;
    /**
     * 标题
     * @version 1.23
     */
    title?: ReactNode;

    /**
     * 样式类型
     */
    type?: 'normal' | 'primary';

    /**
     * 弹层当前显示的状态
     */
    visible?: boolean;

    /**
     * 弹层默认显示的状态
     */
    defaultVisible?: boolean;

    onCloseClick?: () => void;
    /**
     * 弹层在显示和隐藏触发的事件
     * @param visible 弹层是否隐藏和显示
     * @param type 触发弹层显示或隐藏的来源，closeClick 表示由自带的关闭按钮触发；fromTrigger 表示由 trigger 的点击触发；docClick 表示由 document 的点击触发
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * 弹出层对齐方式
     */
    alignEdge?: boolean;
    /**
     * [v2] 弹层偏离触发元素的像素值
     */
    placementOffset?: number;
    /**
     * 是否显示关闭按钮
     */
    closable?: boolean;

    /**
     * 弹出层位置
     */
    align?: AlignEnum;
    alignment?: string;

    /**
     * 弹层相对于 trigger 的定位的微调，接收数组 [hoz, ver], 表示弹层在 left / top 上的增量
     * e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     */
    offset?: Array<number>;

    /**
     * 触发元素
     */
    trigger?: ReactElement;

    /**
     * 触发行为
     * 鼠标悬浮，鼠标点击 ('hover','click') 或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用 click
     */
    triggerType?: string | Array<string>;

    onClick?: () => void;
    onHover?: () => void;
    /**
     * 任何 visible 为 false 时会触发的事件
     */
    onClose?: () => void;

    /**
     * 是否进行自动位置调整
     */
    needAdjust?: boolean;

    /**
     * 弹层在触发以后的延时显示，单位毫秒 ms
     */
    delay?: number;

    /**
     * 鼠标放置后的延时显示，单位毫秒 ms
     */
    mouseEnterDelay?: number;

    /**
     * 鼠标离开后的延时显示，单位毫秒 ms
     */
    mouseLeaveDelay?: number;

    /**
     * 浮层关闭后触发的事件，如果有动画，则在动画结束后触发
     */
    afterClose?: () => void;

    /**
     * 强制更新定位信息
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层出现后是否自动 focus 到内部第一个元素
     */
    autoFocus?: boolean;

    /**
     * 安全节点：对于 triggetType 为 click 的浮层，会在点击除了浮层外的其它区域时关闭浮层.safeNode 用于添加不触发关闭的节点，值可以是 dom 节点的 id 或者是节点的 dom 对象
     */
    safeNode?: string | ReactNode;

    /**
     * 用来指定 safeNode 节点的 id，和 safeNode 配合使用
     */
    safeId?: string;

    /**
     * 配置动画的播放方式，格式是 \{ in: '', out: '' \}，常用的动画 class 请查看 Animate 组件文档
     * @param in 进场动画
     * @param out 出场动画
     */
    animation?: { in: string; out: string } | boolean;

    /**
     * 弹层的 dom 节点关闭时是否删除
     */
    cache?: boolean;

    /**
     * 指定浮层渲染的父节点，可以为节点 id 的字符串，也可以返回节点的函数。
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => ReactNode);

    container?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 弹层组件 style，透传给 Popup
     */
    popupStyle?: CSSProperties;

    /**
     * 弹层组件 className，透传给 Popup
     */
    popupClassName?: string;

    /**
     * 弹层组件属性，透传给 Popup
     */
    popupProps?: PopupProps;

    /**
     * 弹层 id, 传入值才会支持无障碍
     */
    id?: string;
    followTrigger?: boolean;

    /**
     * 开启 v2 版本
     * @version 1.25
     */
    v2?: boolean;
    /**
     * [v2] 箭头是否指向目标元素的中心
     * @version 1.25
     */
    arrowPointToCenter?: boolean;
    /**
     * 	[v2] 是否进行自动位置调整，默认自动开启
     * @version 1.25
     */
    autoAdjust?: boolean;
}

export interface BalloonState {
    visible?: boolean;
    align?: AlignEnum;
    innerAlign?: boolean;
}

export interface BalloonInnerProps extends CommonProps {
    prefix?: string;
    rtl?: boolean;
    closable?: boolean;
    children?: ReactNode;
    title?: ReactNode;
    className?: string;
    alignEdge: boolean;
    onClose: MouseEventHandler<HTMLAnchorElement>;
    style?: CSSProperties;
    align: AlignEnum;
    type: string;
    isTooltip?: boolean;
    pure: boolean;
    v2?: boolean;
    id?: string;
    locale: Locale['Balloon'];
    text?: string;
}
