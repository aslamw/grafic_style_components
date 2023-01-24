import styled from "styled-components";


const Box_line = styled.main`

    width: 500px;
    height: 200px;
/* x,y */
     clip-path: polygon(0% 100%, 0% 50%, 10% 60%, 30% 30%, 40% 40%, 60% 30%, 80% 58%, 100% 50%, 100% 100%);
     background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(187,8,167,1) 0%, rgba(255,255,255,0.9401961468181023) 86%);
     border: 2px solid var(--Primary-light);


`

export {
    Box_line
}