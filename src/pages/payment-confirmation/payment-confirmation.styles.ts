import styled from 'styled-components'

export const PaymentConfirmationContainer = styled.div`
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media(max-width: 768px){
    width:100%;
    height:90%;
  }

`

export const PaymentConfirmationContent = styled.div`
text-align:center;
width:500px;

p{
  margin-top:15px;
  margin-bottom:15px;
  font-size:1.125rem;
  font-weight:500;
}

@media(max-width: 768px){
    width:100%;
    padding:30px;
  }
`
