import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors} from './../styles';

const Icons = (
  width,
  height,
  color,
) => ({
  motorcycle: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M17.98 10.875c-.143-1.206-1.113-2.206-2.356-2.425a2.96 2.96 0 00-1.79.225l-.75-1.075h1.166a.411.411 0 00.417-.4v-.8c0-.219-.19-.4-.417-.4h-.658a.439.439 0 00-.299.119l-.742.712-.456-.656A.434.434 0 0011.75 6h-1.647c-.202 0-.397.138-.43.331-.045.25.156.469.41.469h1.446l.553.8H8c-.3-.225-1.042-.8-2.5-.8h-.833a.411.411 0 00-.417.4c0 .219.189.4.417.4h.416c.82 0 1.478.256 1.98.688l-.157.28a3.068 3.068 0 00-.99-.168C4.31 8.4 3 9.656 3 11.2 3 12.744 4.309 14 5.917 14c1.471 0 2.682-1.044 2.884-2.4h2.116a.414.414 0 00.416-.412c0-1.1.521-2.082 1.341-2.738l.463.669c-.664.575-1.055 1.431-.95 2.381.143 1.338 1.301 2.406 2.695 2.494 1.816.112 3.307-1.363 3.098-3.119zM5.917 13.2c-1.146 0-2.084-.9-2.084-2s.938-2 2.084-2c.208 0 .403.031.592.081l-.957 1.731a.387.387 0 00.007.394.433.433 0 00.358.194H7.96c-.195.912-1.035 1.6-2.044 1.6zm9.166 0c-1.146 0-2.083-.9-2.083-2 0-.55.234-1.044.605-1.406l1.133 1.625a.407.407 0 00.345.181.407.407 0 00.235-.069.39.39 0 00.11-.556L14.296 9.35c.247-.094.507-.15.787-.15 1.146 0 2.084.9 2.084 2s-.938 2-2.084 2z"
        fill={color}
      />
    </Svg>
  ),
  bill: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M8.694 7.943c.496-.573 1.098-.86 1.806-.86s1.31.287 1.806.86S13.05 9.2 13.05 10c0 .799-.248 1.484-.744 2.057s-1.098.86-1.806.86-1.31-.287-1.806-.86S7.95 10.8 7.95 10c0-.799.248-1.484.744-2.057zm2.868 3.515v-.416c0-.14-.07-.209-.212-.209h-.425V8.542c0-.14-.07-.209-.213-.209h-.371a.62.62 0 00-.346.104l-.398.26c-.071.053-.106.114-.106.183 0 .035.017.07.053.104l.212.365a.257.257 0 00.186.078.3.3 0 00.133-.026v1.432H9.65c-.142 0-.213.07-.213.209v.416c0 .14.071.209.213.209h1.7c.142 0 .213-.07.213-.209zM18.15 5c.23 0 .425.087.584.26a.736.736 0 01.266.573v8.334a.816.816 0 01-.266.599.803.803 0 01-.584.234H2.85a.896.896 0 01-.61-.234.86.86 0 01-.24-.6V5.834c0-.225.08-.416.24-.573A.848.848 0 012.85 5h15.3zm-.425 7.083V7.917c-.478 0-.885-.157-1.222-.47a1.661 1.661 0 01-.478-1.197H4.975c0 .469-.168.868-.505 1.198-.318.312-.717.469-1.195.469v4.166c.478 0 .877.165 1.195.495.337.313.505.703.505 1.172h11.05c0-.469.16-.86.478-1.172.337-.33.744-.495 1.222-.495z"
        fill={color}
      />
    </Svg>
  ),
  burger: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1zM6 10a1 1 0 011-1h9a1 1 0 110 2H7a1 1 0 01-1-1zM3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        fill={color}
      />
    </Svg>
  ),
  check: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15 6.758a.805.805 0 00-.18-.516l-.878-1.03A.582.582 0 0013.503 5a.582.582 0 00-.438.212L8.832 10.19 6.935 7.955a.582.582 0 00-.438-.213.582.582 0 00-.439.213l-.877 1.03A.805.805 0 005 9.5c0 .19.065.379.18.515l2.336 2.743.878 1.03a.582.582 0 00.438.212.582.582 0 00.439-.212l.877-1.03 4.671-5.485A.805.805 0 0015 6.758z"
        fill={color}
      />
    </Svg>
  ),
  close: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M14 12.686a.55.55 0 00-.159-.386l-2.3-2.3 2.3-2.3a.55.55 0 000-.77l-.77-.771a.55.55 0 00-.77 0L10 8.459l-2.3-2.3a.55.55 0 00-.77 0l-.771.77a.55.55 0 000 .77L8.459 10l-2.3 2.3a.55.55 0 000 .77l.77.771a.55.55 0 00.77 0l2.301-2.3 2.3 2.3a.55.55 0 00.77 0l.771-.77a.55.55 0 00.159-.385z"
        fill={color}
      />
    </Svg>
  ),
  cog: (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M11.667 10A1.67 1.67 0 0110 11.667 1.67 1.67 0 018.333 10 1.67 1.67 0 0110 8.333 1.67 1.67 0 0111.667 10zM15 9.29a.237.237 0 00-.189-.234l-1.191-.182a3.591 3.591 0 00-.267-.638c.221-.306.462-.593.684-.892a.246.246 0 00.006-.293c-.273-.384-.73-.788-1.074-1.107a.257.257 0 00-.163-.065.222.222 0 00-.156.059l-.925.696a3.824 3.824 0 00-.586-.24l-.182-1.199c-.013-.11-.117-.195-.234-.195H9.277a.239.239 0 00-.234.182c-.104.39-.143.814-.189 1.211-.202.065-.403.15-.592.248l-.899-.697a.29.29 0 00-.169-.065c-.221 0-1.1.95-1.256 1.165a.252.252 0 00-.06.15c0 .059.027.11.066.156.24.293.475.586.697.899-.105.195-.19.39-.254.599l-1.211.182c-.098.02-.176.137-.176.234v1.446c0 .11.078.214.189.234l1.191.176c.065.221.156.436.267.644-.221.306-.462.593-.683.892a.253.253 0 00-.007.3c.273.377.73.781 1.074 1.094a.233.233 0 00.163.071.25.25 0 00.163-.059l.918-.696c.189.098.384.176.586.24l.182 1.199c.013.11.117.195.234.195h1.446a.238.238 0 00.234-.182c.104-.39.143-.814.189-1.211.202-.065.403-.15.592-.248l.899.704a.33.33 0 00.169.058c.221 0 1.1-.957 1.257-1.165a.217.217 0 00.058-.15.257.257 0 00-.065-.163 13.69 13.69 0 01-.697-.898c.104-.189.183-.384.254-.593l1.205-.182c.104-.02.182-.137.182-.234V9.29z"
        fill={color}
      />
    </Svg>
  ),
  "credit-card": (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15 5H5c-.55 0-1 .469-1 1.042v7.916C4 14.531 4.45 15 5 15h10c.55 0 1-.469 1-1.042V6.042C16 5.469 15.55 5 15 5zM5 5.833h10c.106 0 .2.098.2.209V7.5H4.8V6.042c0-.111.094-.209.2-.209zm10 8.334H5c-.106 0-.2-.098-.2-.209V10h10.4v3.958c0 .111-.094.209-.2.209zm-9.4-.834h1.6V12.5H5.6v.833zm2.4 0h2.4V12.5H8v.833z"
        fill={color}
      />
    </Svg>
  ),
  "left-arrow": (props) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19 9.671c0-.349-.214-.657-.556-.657H5.096L6.489 7.51a.693.693 0 000-.935l-.357-.38A.584.584 0 005.704 6a.594.594 0 00-.432.195L2.176 9.533A.712.712 0 002 10c0 .175.067.344.176.462l3.096 3.348c.114.118.27.19.432.19a.59.59 0 00.428-.19l.357-.39a.67.67 0 00.18-.462.67.67 0 00-.18-.463l-1.393-1.51h13.348c.342 0 .556-.307.556-.656V9.67z"
        fill={color}
      />
    </Svg>
  )
})



export const Icon = ({
  name = 'motorcycle',
  width = 40,
  height = 40,
  color = colors.black,
  ...props
}) => {
  const Component = Icons(width, height, color)[name];
  return <Component {...props} />
};