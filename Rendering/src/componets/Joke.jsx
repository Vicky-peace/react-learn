import React from 'react'
import './joke.scss'

const Joke = ({id,joke,rating}) => {
    const ratingFun = (rating) => {
        if (rating === 1) {
            if (rating === 1) {
                return (
                    <div>
                        <span>⭐</span>
                    </div>
                );
            } else if (rating === 2) {
                return (
                    <div>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                );
            } else if (rating === 3) {
                return (
                    <div>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                );
            } else if (rating === 4) {
                return (
                    <div>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                );
            } else if (rating === 5) {
                return (
                    <div>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                    </div>
                );
            }
        }
    }

  return (
 
    <div className='joke'>
        <h4 className='id'>{id}</h4>
        <p className='data'>Joke:{joke}</p>
        <p className='rating'>Rating:{ratingFun(rating)}</p>
    </div>
  )
}

export default Joke