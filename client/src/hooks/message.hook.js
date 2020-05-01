import { useCallback } from 'react'
import { message } from 'antd'

const useMessage = () => {
  return useCallback(({ text, duration = 3 }) => {
    message.info(text, duration)
  }, [])
}

export default useMessage