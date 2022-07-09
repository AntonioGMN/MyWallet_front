import styled from "styled-components";

const MainStyle = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		height: 50px;
		width: 147px;
		margin-bottom: 24px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 13px;
	}

	input {
		height: 58px;
		width: 326px;
		border: none;
		border-radius: 5px;
		font-size: 20px;
		padding-left: 10px;
		font-weight: 400;
		::placeholder {
			color: #000000;
		}
		:last-child {
			background: #a328d6;
			color: #ffffff;
			text-align: center;
			font-weight: 700;
		}
	}

	p {
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		color: #ffffff;
		margin-top: 36px;
	}
`;

export default MainStyle;
