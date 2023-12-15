import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Carousel.scss'

interface CarouselProps {
    images: Array<{
        image: string,
        title: string,
        scientific: string
    }>
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const timeOutRef = useRef<NodeJS.Timeout | null>(null);

    const slideRight = useCallback(() => {
        setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, [images.length]);

    useEffect(() => {

        if (autoPlay) {
            timeOutRef.current = setTimeout(() => {
                slideRight();
            }, 3500);
        }
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current)
            }
        }
    }, [autoPlay, current, slideRight])


    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    };

    return (
        <div className='carousel' onMouseEnter={() => {
            setAutoPlay(false)
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current)
            }
        }}
            onMouseLeave={() => {
                setAutoPlay(true)
            }}>
            <div className='carousel__container'>
                {images.map((image, index) => {
                    return (
                        <div key={index}
                            className={
                                index === current
                                    ? 'carousel__cards carousel__cards--active'
                                    : "carousel__cards"}>
                            <img src={image.image} alt='carousel' className='carousel__image' />
                            <div className='carousel__overlay'>
                                <h2 className='carousel__image__title'>{image.title}</h2>
                                <h3 className='carousel__image__scientific'>{image.scientific}</h3>
                            </div>
                        </div>
                    );
                })}
                <div className='carousel__arrow--left' onClick={slideLeft}>&lsaquo;</div>
                <div className='carousel__arrow--right' onClick={slideRight}>&rsaquo;</div>
                <div className='carousel__pagination'>
                    {images.map((_, index) => {
                        return (
                            <div key={index}
                                className={
                                    index === current
                                        ? 'carousel__pagination__dot carousel__pagination__dot--active'
                                        : "carousel__pagination__dot"}
                                onClick={() => setCurrent(index)}
                            ></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}