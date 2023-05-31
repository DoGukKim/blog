type Icons = 'github'

type IconMap = Record<Icons, (props: IconProps) => React.ReactElement>

type IconProps = React.ComponentPropsWithRef<'svg'> & {
  as?: Icons
}
