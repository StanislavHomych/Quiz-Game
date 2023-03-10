/* eslint-disable no-lone-blocks */
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store/store'
import { fetchImages } from '../../redux/currentGame/currentGameSlice'
import preloader from './../../assets/preloader.gif'

const PhotoMain = () => {
  const dispatch = useAppDispatch()
  const images = useAppSelector((state) => { return state.currentGame })

  useEffect(() => {
    dispatch(fetchImages())
  }, [])

  return (
    <div>
      {images.loading &&
        <div className='flex items-center justify-center'>
          <img src={preloader} alt="preloader" />
        </div>}
      {images.error && <div>{images.error}</div>}
      {!images.loading && images.images?.length &&
        (<div className='flex items-center justify-center bg-gray-100'>
          <img className='h-96 object-contain'
            src={images.images[images.randomImageIndex].src}
            alt="random image" />
        </div>)}
    </div>

  )
}

export default PhotoMain
