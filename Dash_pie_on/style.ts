import styled from "styled-components";


const Box_pie = styled.main`
     .pie-chart {
		background:
			radial-gradient(
				circle closest-side,
				transparent 60%,
				white 0
			),
			conic-gradient(
				from 54deg,
				white 0,
				white 10%,
				var(--Sucess) 0,
				var(--Sucess) 100%
		);
		position: relative;
		width: 500px;
		min-height: 350px;
		margin: 0;
		outline: 1px solid #ccc;
	}
	.pie-chart h2 {
		position: absolute;
		margin: 1rem;
	}
	.pie-chart cite {
		position: absolute;
		bottom: 0;
		font-size: 80%;
		padding: 1rem;
		color: gray;
	}
	.pie-chart figcaption {
		position: absolute;
		bottom: 1em;
		right: 1em;
		font-size: smaller;
		text-align: right;
	}
	.pie-chart span:after {
		display: inline-block;
		content: "";
		width: 0.8em;
		height: 0.8em;
		margin-left: 0.4em;
		height: 0.8em;
		border-radius: 0.2em;
		background: currentColor;
	}
    .center_boll{
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;
        width: 100px;
        height: 100px;
        clip-path: circle();

        margin: 0 auto;

        position: absolute;
        top: 35%;
        right: 40%;

        color: green;
        & h1{
            font-family: Montserrat-700;
        }
        
        
    }

`

export {
    Box_pie
}