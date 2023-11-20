export default function Box(props) {
  return (
    <div className='Box'
      style={{
        background: props.background,
        color: 'white',
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px'
      }}
    >
      {props.children}
    </div>
  )
}
