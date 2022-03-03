import styled from "styled-components";



export const Container = styled.main`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
.container{
  width: 30rem;
  height: 33.75rem;
  background:var(--white);
  border-radius: 0.5rem;
  .content{
    width: 100%;
    height: 22.5rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    strong{
      font-size: 1.5rem;
      font-weight: 700;
      text-align:center;
      color: var(--title) ;
    }
    p{
      font-size: 0.9rem ;
      text-align: center;
      color: var(--title) ;
      font-weight: 400;
    }

    button{
      color: var(--white);
      background:var(--purple) ;
      border: none;
      border-radius:0.5rem ;
      width: 12.5rem;
      height: 3.125rem;
      transition: 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      &:hover{
        filter: brightness(0.8);
      }
     
    }
  }

  @media(max-width: 425px){
    width: 90%;
  }

}


`