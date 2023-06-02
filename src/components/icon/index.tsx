import Display from './display'
import Github from './github'
import Logo from './logo'
import Moon from './moon'
import Sun from './sun'

const iconMap: IconMap = {
  display: (props: IconProps) => Display(props),
  github: (props: IconProps) => Github(props),
  sun: (props: IconProps) => Sun(props),
  logo: (props: IconProps) => Logo(props),
  moon: (props: IconProps) => Moon(props),
}

export default function Icon({
  as,
  width = 24,
  height = 24,
  role = 'img',
  ...iconProps
}: IconProps) {
  if (!as) throw Error('as 속성을 정의해 주세요!')

  return iconMap[as]({ width, height, 'aria-label': as, role, ...iconProps })
}
