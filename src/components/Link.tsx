import React from "react";
import {styled} from "styled-components";


export interface ILink {
  url?: string;
  onClick?: Promise<any>;
  children: string | JSX.Element | JSX.Element[]
}


const Link = ({url, children}: ILink) => {
  return (
    <>
      {
        children &&
        <StyledLink
          href={url && url}
          target={'_blank'}
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          { children }
        </StyledLink>
      }
    </>
  );
}

export default Link;

export const StyledLink = styled.a`
  color: #676767;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    cursor:pointer;
  }
`;