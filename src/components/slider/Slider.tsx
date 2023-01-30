import styles from './slider.module.css'
import { useState } from 'react'

const Slider = () => {
  const [yearInRange, setYearInRange] = useState('1960')
  return (
    <div>
      <div>{yearInRange}</div>
      <div className={styles.slidercontainer}>
        <input className={styles.slider}
        type="range"
        min="1900"
        max="2023"
        onChange={(e) => { setYearInRange(e.target.value) }}
        value={yearInRange}
        id="yearRange"
           />
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-green-100 h-10 w-20' >Submit</button>
      </div>
    </div>
  )
}

export default Slider
