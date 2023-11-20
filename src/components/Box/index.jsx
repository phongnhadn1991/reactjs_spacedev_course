import './style.scss'
import styled from 'styled-components'

const BoxStyle = styled.div`
  border-radius: 8px;
`

export default function Box(props) {
  return (
    <BoxStyle className='box text-2xl'
      style={{
        background: props.background,
      }}
    >
      {props.children}
    </BoxStyle>
  )
}
