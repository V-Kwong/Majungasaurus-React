import styled from 'styled-components';

export const DiscoverButton = styled.a`
  color: #fff;
  padding: 7px 15px;
  margin-bottom: 5px;
  display: inline-block;
  -webkit-transition-delay: .1s;
  transition-delay: .1s;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  border: 2px solid #ffe001;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  line-height: calc(15px + (24 - 15) * ((100vh - 600px)/(1000 - 600)));

  &:hover {
    color: #000;
    background-color: #ffe001;
  }
`
