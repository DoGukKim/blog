import Github from './github'

const iconMap: IconMap = {
  github: (props: IconProps) => Github(props),
}

export default function Icon({
  as,
  width = 24,
  height = 24,
  role = 'img',
  ...iconProps
}: IconProps) {
  if (!as) throw Error('as 속성을 정의해 주세요!')

  return iconMap[as]({ width, height, role, ...iconProps })
}
