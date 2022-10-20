import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineHome } from 'react-icons/ai'

// styles
import { PaymentConfirmationContainer, PaymentConfirmationContent } from './payment-confirmation.styles'

// components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'

// utilities
import Colors from '../../theme/theme.colors'
import { CartContext } from '../../contexts/cart.context'

const PaymentConfirmationPage: FunctionComponent = () => {
  const { clearProducts } = useContext(CartContext)

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const status = searchParams.get('success')

  const isCanceled = searchParams.get('canceled')

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  return (
    <>
    <Header/>

    <PaymentConfirmationContainer>
      <PaymentConfirmationContent>
        {status === 'true' && (
         <>
          <AiOutlineCheckCircle size={120} color={Colors.success}/>
          <p>Sua compra foi finalizada com sucesso</p>
         </>
        )}

        {(status === 'false' || isCanceled) && (
          <>
          <AiOutlineCloseCircle size={120} color={Colors.error}/>
          <p>Ocorreu um erro ao finalizar sua compra !, Por Favor tente novamente.</p>
          </>
        )}

        <CustomButton startIcon={<AiOutlineHome/>} onClick={handleGoToHomePageClick}>Ir para a Página Inicial</CustomButton>
      </PaymentConfirmationContent>
    </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
