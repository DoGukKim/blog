type Icons = 'display' | 'github' | 'sun' | 'moon'

type IconMap = Record<Icons, (props: IconProps) => React.ReactElement>

type IconProps = React.ComponentPropsWithRef<'svg'> & {
  as?: Icons
}
