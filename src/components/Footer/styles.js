import styled from 'styled-components';

const Container = styled.footer`
	width: 100%;
  height: 120px;
  margin-top: 80px;

	display: flex;
	align-items: center;

  .made-with-love-copyright {
    position: absolute;
    bottom: 8px;

    width: 100%;
    text-align: center;
    color: #333;
		
		a {
			text-decoration: none;
			color: inherit;
			font-weight: bold;
		}
  }
`;

export default Container;