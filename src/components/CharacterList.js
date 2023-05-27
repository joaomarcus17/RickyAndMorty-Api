import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  Container,
  CardContainer,
  Card,
  CardInfo,
  CardSpecies,
  CardLocation,
  CardStatus,
  CardImage,
  CardTitle,
  Pagination,
  PaginationButton,
  SearchContainer,
  SearchInput,
  SearchButton
} from "../Style/CharacterListStyle";
import fundoHome from "../Assets/images/sky2.jpg";

const FundoHome = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CharacterList = () => {
  const { t } = useTranslation(); // Hook de tradução para usar traduções no componente
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
  const [characters, setCharacters] = useState([]); // Estado para armazenar a lista de personagens
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Estado para armazenar a lista de personagens filtrados
  const [page, setPage] = useState(1); // Estado para controlar a página atual da lista
  const [info, setInfo] = useState(null); // Estado para armazenar informações adicionais da API

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearchButtonClick = () => {
    if (searchTerm.length >= 3) {
      setPage(1);
      setFilteredCharacters([]);
      fetchCharacters();
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
      );
      const data = response.data;
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const filtered = characters.filter((character) => {
      const name = character.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return name.substring(2).includes(term.substring(2));
    });
    setFilteredCharacters(filtered.slice(0, 20));
  }, [characters, searchTerm]);

  useEffect(() => {
    const fetchCharactersByPage = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`
        );
        const data = response.data;
        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharactersByPage();
  }, [searchTerm, page]);

  return (
    <>
      <FundoHome src={fundoHome} /> {/* Renderiza uma imagem de fundo */}
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder={t("Pesquise o seu personagem")} // Traduz o texto do placeholder usando o hook de tradução
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <SearchButton onClick={handleSearchButtonClick}>
          {t("Search")}{" "}
          {/* Traduz o texto do botão usando o hook de tradução */}
        </SearchButton>
      </SearchContainer>
      <Pagination>
        {info && info.prev && (
          <PaginationButton onClick={handlePreviousPage}>
            {t("Previous")}{" "}
            {/* Traduz o texto do botão usando o hook de tradução */}
          </PaginationButton>
        )}
        {info && info.next && (
          <PaginationButton onClick={handleNextPage}>
            {t("Next")}{" "}
            {/* Traduz o texto do botão usando o hook de tradução */}
          </PaginationButton>
        )}
      </Pagination>
      <Container>
        {filteredCharacters.map((item, index) => (
          <CardContainer key={index}>
            <Card>
              <CardImage src={item.image} alt="character" />
              <CardTitle>{item.name}</CardTitle>
              <CardInfo className="info">
                <CardSpecies>
                  {t("Species")}: {item.species}{" "}
                  {/* Traduz o texto usando o hook de tradução */}
                </CardSpecies>
                <CardLocation>
                  {t("Location")}: {item.location.name}{" "}
                  {/* Traduz o texto usando o hook de tradução */}
                </CardLocation>
                <CardStatus>
                  {t("Status")}: {item.status}{" "}
                  {/* Traduz o texto usando o hook de tradução */}
                </CardStatus>
              </CardInfo>
            </Card>
          </CardContainer>
        ))}
      </Container>
    </>
  );
};

export default CharacterList;
