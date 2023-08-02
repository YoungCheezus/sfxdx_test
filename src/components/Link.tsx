import React from "react";
import {styled} from "styled-components";


export interface ILink {
  text?: string;
  url?: string;
  img?: string;
  type?: string;
  onClick?: Promise<any>;
}


const Link = ({text, url, img, type}: ILink) => {
  return (
    <>
      {
        img &&
        <a
          href={url && url}
          target={'_blank'}
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <img src={img} alt={''} />
        </a>
      }

      {
        text && <StyledLink href={url && url} type={type}> { text } </StyledLink>
      }

    </>
  );
}

export default Link;

export const StyledLink = styled.a`
  color: #676767;
  font-size: 16px;
  &:hover {
    cursor:pointer;
  }
`;