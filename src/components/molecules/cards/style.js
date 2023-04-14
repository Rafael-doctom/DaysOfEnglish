import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    justify-content:space-between;
    color:var(--color-white);
    width:90%;
    margin:0 auto;
    font-size:1rem;
`;

export const Month = styled.h1`
    width:90%;
    margin:0 auto;
    font-size:1rem;
    border-bottom: 1px dashed black;
    padding-bottom:10px;
`

export const ContentCards = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:left;
`

export const Card = styled.div`
    background:var(--gray);
    padding:1rem 0.50rem;
    margin: 1rem 2rem 0 0;

    // min-width:18%;
    // max-width:20%;

    border:0;
    border-radius:5px;


    box-shadow: 5px 5px 5px 2px rgba(95,85,208,1);

    cursor:pointer;

`

export const Ul = styled.ul`
    display:flex;
    align-items:center;
`

export const Li = styled.li`
    margin-right:1rem;
`

