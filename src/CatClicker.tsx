import React, {useState, useCallback} from 'react'

const Btn = (props: {action: () => void, children: string}) => {
    console.log('Rendering button')
    return (
        <button onClick={ () => {props.action()} }>
            {props.children}
        </button>
    )
}

const Clicker = (props: {count: number, incCount: () => void, children?: any}) => {
    console.log('Rendering clicker')
    return (
        <div>
            <p>{props.count}</p>
            <Btn action={ () => { props.incCount() } }>Click Me</Btn>
        </div>
    )
}

const Image = (props: {src: string, onClickFn: () => void }) => {
    console.log('Rendering image')
    return (
        <>
            <img src={ props.src } onClick={ () => {props.onClickFn()} }></img>
        </>
    )
}

const Cat = (props: {incCount: () => void, setCount?: Function, text?: string}) => {
    console.log('Rendering cat')
    return (
        <>
            <Image src="https://cataas.com/cat" onClickFn={ () => { props.incCount() }}></Image>
        </>
    )
}

const CatClicker = (props: {}) => {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        console.log('Called the inc fn')
        setCount((count) => {
            return count+1
        })
    }, [])
    return (
        <>
            <Clicker count={count} incCount={increment}>
            </Clicker>
            <Cat incCount={increment} />
        </>
    )
}

export default CatClicker