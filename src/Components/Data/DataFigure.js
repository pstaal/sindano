import _ from "lodash";
import styled from "styled-components";

/**
 * Data Figure Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const DataFigureDiv = styled.h2`
  font-family: ${(props) => props.theme.fonts.font_families[0]};
  width: max-content;
  font-weight: 700;
  font-size: 68px;
  line-height: 0.9;
  margin: 0 auto 20px auto;
  color: #283592;
`;

const DataText = styled.p`
  font-family: ${(props) => props.theme.fonts.font_families[1]};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #283592;
`;

const DataFigure= ({data}) => {
     
    return (
        <>
        <DataFigureDiv>{data.dataTitle}</DataFigureDiv>
        {data.dataContent.map((content) => {
           return <DataText key={_.uniqueId("figure-")}>{content}</DataText> 
        }) 
        }
        </>
    )

};

export default DataFigure;
