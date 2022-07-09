import styled from "styled-components";

const MainStyled = styled.main`
	height: 75vh;
	width: 100%;
	border-radius: 5px;
	background: #ffffff;
	padding: 15px;
	margin: 12px 0 13px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 20px;
		font-weight: 400;
		line-height: 19px;
		color: #868686;

		width: 100%;
		height: 100%;
	}
`;

const ArticleStyled = styled.article`
	width: 100%;
	display: flex;
	align-items: start;
	margin: 5px 0;

	font-size: 18px;
	font-weight: 400;
	line-height: 19px;

	p {
		width: 100%;
		color: #000000;
		align-items: flex-end;
	}

	span {
		color: #c6c6c6;
		text-align: right;
	}

	strong {
		color: ${(props) => (props.type === "entrada" ? "#03AC00" : "#DE3131")};
		text-align: end;
	}
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
	max-width: 100%;
	overflow-x: hidden;

	button {
		height: 15vh;
		min-width: 47vw;
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
const SectionStyled = styled.section`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
	font-weight: 700;
	line-height: 20px;

	span {
		font-size: 18px;
		color: ${(props) => (props.cor >= 0 ? "#03AC00" : "#DE3131")};
	}
`;

export { MainStyled, HeaderStyled, DivStyled, ArticleStyled, SectionStyled };
