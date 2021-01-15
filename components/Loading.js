export default function Loading() {
  return (
    <div className='loader'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <style jsx>{`
        .loader {
          position: fixed;
          right: 20px;
          bottom: 20px;
        }
      `}</style>
    </div>
  )
}
