import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25em;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1em;
  color: #666;
`;
