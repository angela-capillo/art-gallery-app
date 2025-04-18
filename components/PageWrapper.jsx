import styled from "styled-components";

const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`;

export default function PageWrapper({ children }) {
    return <PageContainer>{ children }</PageContainer>;
}