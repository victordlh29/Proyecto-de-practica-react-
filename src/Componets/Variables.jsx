import React from 'react'

const Variables = () => {
  const texto1="Buenas noches"
  let texto2="¿Como estás?"
const url= "https://nntheblog.com/wp-content/uploads/2021/10/High-school-of-the-Dead.jpg"
    return (
        <>
        <p>Variables en jsx, {texto1} {texto2}</p>
        <img src={url} alt="hight school"/>
    
        </>
  )
}
export default Variables;