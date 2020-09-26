import React, {useState} from 'react'

const FunctionalComponent = () => {

    const [name, setName] = useState('Tyra')
    const [favoriteAnimal, setFavoriteAnimal] = useState('Sparrow')
    const [count, setCount] = useState(0)

    const handleIncreaseClick = () => {
        setCount(count + 1)
    }

    const handleDecreaseClick = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Say hello to {name}.</h1>
            <h1>Their favorite anmial is a {favoriteAnimal}.</h1>
            <h4>If you like that animal, click the +1 button. If not, click the -1 button.</h4>
                
            <button onClick={handleIncreaseClick} >+1</button>
            <h1>{count}</h1>
            <button onClick={handleDecreaseClick} >-1</button>

        </div>
        )
}

export default FunctionalComponent




