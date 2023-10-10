import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin: 5rem 4rem;

    svg{
        color:red;
    }

    
    @media screen and (max-width: 767px){
        margin: 4rem 0rem;

        svg{
            color:red;
        }
      
`;

export const Card = styled.div`
    min-height:  15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom:6%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.2rem;
        font-weight: 600;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     
    @media only screen and (max-width: 767px){
      
        
        min-height: 12rem;
        min-width: 7rem;
        border-radius: 1rem;
        overflow: hidden;
        position: relative;

        img{
            
            border-radius: 1rem;
            position: absolute;
            left: 0;
            width:100%;
            height: 100%;
            object-fit: cover;
        }

        p{
            position: absolute;
            z-index: 10;
            left: 50%;
            bottom:6%;
            transform: translate(-50%, 0%);
            color: white;
            width: 100%
            text-align: center;
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
            font-weight: 600;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`;

