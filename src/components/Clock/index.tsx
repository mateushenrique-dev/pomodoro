import './clock.scss';

const Clock = () => {
  return (
    <main className='clock'>
      <div className='subClock'>
        <div className='timer'>
          <h1 className='time'>17:59</h1>
          <p className='action'>Pause</p>
        </div>
      </div>
    </main>
  )
}

export default Clock;