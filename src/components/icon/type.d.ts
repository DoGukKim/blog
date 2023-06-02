type Icons = 'display' | 'github' | 'sun' | 'logo' | 'moon'

type IconMap = Record<Icons, (props: IconProps) => React.ReactElement>

type IconProps = React.ComponentPropsWithRef<'svg'> & {
  as?: Icons
}
