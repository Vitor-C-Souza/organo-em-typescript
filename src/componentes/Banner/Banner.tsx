import React from "react";
import "./Banner.css";

export interface BannerProps {
  enderecoImage: string;
  textoAlternativo?: string;
}

export const Banner = ({ enderecoImage, textoAlternativo }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      {/* <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      /> */}
      <img src={enderecoImage} alt={textoAlternativo} />
    </header>
  );
};

export default Banner;
