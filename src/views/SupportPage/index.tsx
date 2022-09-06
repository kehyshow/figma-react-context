import { Pagination } from "components/Pagination";
import { useState, createContext } from "react";
import { HelpButton, SupportPageContainer, SupportResourceContainer, TicketsContainer } from "./styles";
import { SupportResource } from "./SupportResource";
import { TicketsCard } from "./Tickets";
import QuestionMark from "assets/question.svg";

export const PaginationContext = createContext([0,0,0,0]);

export default function SupportPage() {
  
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(3);
  const [totalCount, setTotalCount] = useState(149);
  const [pageSize, setPageSize] = useState(50);


  return (
    <SupportPageContainer>
      <SupportResourceContainer>
        <SupportResource />
      </SupportResourceContainer>
      <TicketsContainer>
        <TicketsCard />
      </TicketsContainer>

      <PaginationContext.Provider value={[pageNumber, pageCount, totalCount, pageSize]}>
        <Pagination  handleChange={(pageNumber) => setPageNumber(pageNumber)} />
      </PaginationContext.Provider>
      
      <HelpButton><img src={QuestionMark} alt="help" />Help</HelpButton>
    </SupportPageContainer>
  );
}