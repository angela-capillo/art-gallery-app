import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 420px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 100px;
  overflow-y: auto;
`;

export default function PageWrapper({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
