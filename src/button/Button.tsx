import { defineComponent, PropType, toRefs } from 'vue';
import 'uno.css';
export type ISize = 'small' | 'medium' | 'large';
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export type IconType = 'search' | 'edit' | 'check' | 'message' | 'star-off' | 'delete' | 'add' | 'share';
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue', // 设定默认颜色
  },
  icon: {
    type: String as PropType<IconType | ''>,
    default:''
  },
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },
};
export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    };
    return () => (
      <button
        class={`
             py-2 
             px-4 
             font-semibold 
             rounded-lg 
             shadow-md 
             text-white 
             bg-${props.color}-500 
             hover:bg-${props.color}-700 
             border-none 
             cursor-pointer 
             m-1
             mx-1
             py-${size[props.size].y}
             `}
      >
        {props.icon != '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
