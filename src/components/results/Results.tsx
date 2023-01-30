import style from './results.module.css'

const Results = () => {
  return (
    <div>
      <div className='flex items-center justify-center bg-gray-200 h-20'>
        <h1 className=''>Points</h1>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h1>0</h1>
        <div>
            <h1>Photo was taken in 1990</h1>
        </div>
        <input className={style.slider} type="range" value="50" min="0" max="100" />
        <div>
            <h1>Total is 0</h1>
        </div>
        <div>
            <button className='bg-green-100 h-10 w-25'>Next Round</button>
        </div>
      </div>
    </div>
  )
}

export default Results
