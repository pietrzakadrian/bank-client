import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: inline-block;
  color: black;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 12px;
  opacity: ${({ collapsed }) => (collapsed ? 0 : 1)}};
  visibility: ${({ collapsed }) => (collapsed ? 'hidden' : 'visible')}};
  white-space: nowrap;
  transition: 0.4s;

  @media screen and (max-height: 320px) {
    position: relative;
  }
`;
