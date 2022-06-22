import React from 'react';
import { useEffect } from 'react';

const Header = ({ count, add, substract, name }) => {
  useEffect(() => {
    console.log('Comp.Func Render con Depend vacia')
  }, [])

  useEffect(() => {
    console.log('Comp.Func Render SIN Depend vacia')
  }, [count])

  useEffect(() => {
    return () => {
      console.log('Comp.Func Desmontando el componente')
    }
  }, [])

  //antes del return //( dentro del return en la linea de abajo)
  return (
    <>
      <hr />
      <h2>Funcional Component</h2>
      <h3>Count = {count}</h3>
      <h2>
        <button onClick={add}> + </button>
        <button onClick={substract}> - </button>
      </h2>
      <h3>Time: {new Date().toLocaleTimeString()}</h3>
      <h3>Hi {name}</h3>
      <hr />
    </>
  )
}

export default Header