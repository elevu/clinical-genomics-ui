import { notification } from 'antd'

type Props = {
  type: 'error'
  message: string
  description: string
}

export const OpenNotification = ({ type, message, description }: Props) => {
  const key = `open${Date.now()}`
  notification[type]({
    message,
    description,
    btn: null,
    key,
    closeIcon: null,
  })
}
