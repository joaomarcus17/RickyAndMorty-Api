import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 350px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 300px;
  margin: 0 auto;
  background: #ffffff8c;
  transition: 0.5s ease-in;
  align-items: flex-start;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .info {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardInfo = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.3s ease;
  font-size: 1.05rem;
`;

export const CardSpecies = styled.p`
  margin: 5px 0;
`;

export const CardLocation = styled.p`
  margin: 5px 0;
`;

export const CardStatus = styled.p`
  margin: 5px 0;
`;

export const CardImage = styled.img`
  width: 85%;
  height: auto;
  border-radius: 15px;
`;

export const CardTitle = styled.h5`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const PaginationButton = styled.button`
  padding: 10px 15px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 15px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e1e1e1;
  }
`;
