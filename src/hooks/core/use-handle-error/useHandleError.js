import { useSentry } from 'hooks/core/use-sentry/useSentry'
import { useToaster } from 'hooks/core/use-toaster/useToaster'
import { useTranslateMessage } from 'hooks/core/use-translate-message/useTranslateMessage'


export const useHandleError = (errorInstance) => {
  const { captureException } = useSentry()
  const { translateMessage } = useTranslateMessage()
  const { error } = useToaster()


  const handleError = (errorInstance) => {
    captureException(errorInstance.error, errorInstance.data)
    const message = translateMessage(errorInstance)
    error(message)
  }

  const handleGenericCritical = (errorInstance) => {
    captureException(errorInstance.error, errorInstance.data)

    const messageId = 'api.criticalError'
    const defaultMessage = 'A critical error occurred.  Please refresh your browser.'
    const message = translateMessage({ messageId, defaultMessage })
    error(message)
  }

  return {
    handleError,
    handleGenericCritical
  }
}
