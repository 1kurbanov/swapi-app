export default function Loading() {
  return (
    <div className='loader'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <style jsx>{`
        .loader {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(50%, 50%);
        }
      `}</style>
    </div>
  )
}
