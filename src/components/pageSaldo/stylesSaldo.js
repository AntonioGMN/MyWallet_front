import styled from "styled-components";
const MainStyled = styled.main`
	height: 75vh;
	width: 100%;
	border-radius: 5px;
	background-color: #ffffff;
	margin: 12px 0 13px 0;
`;

const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	font-size: 26px;
	font-weight: 700;
`;

const DivStyled = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		height: 15vh;
		width: 42vw;
		border: none;
		border-radius: 5px;
		background: #a328d6;
		padding: 10px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		color: #ffffff;
		font-weight: 700;
		font-size: 23px;
	}
`;

export { MainStyled, HeaderStyled, DivStyled };
