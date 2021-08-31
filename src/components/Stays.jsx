import styled from "styled-components/macro";
import StarIcon from "@iconscout/react-unicons/icons/uil-star";

const StayImage = styled.img`
  width: 100%;
  heigth: auto;
  border-radius: 10px;
`;

const StayDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StayTitle = styled.h3`
  font-weight: 600;
  font-size: 120%;
  margin-top: 1.5rem;
`;

const StayContainer = styled.div`
  flex: 1 0 21%;
  margin-bottom: 2rem;
`;

const Stay = ({ superHost, type, beds, title, stars, image, starred }) => {
  return (
    <StayContainer>
      <StayImage src={image} alt={title}></StayImage>
      <StayDetails>
        <p>
          {superHost && (
            <span
              style={{
                padding: "1rem",
                borderRadius: "12px",
                marginRight: "1rem",
                border: "1px solid #4f4f4f",
                color: "#4f4f4f",
                fontWeight: 700,
                fontSize: "90%"
              }}
            >
              SUPER HOST
            </span>
          )}
          {type}
          {beds && `, ${beds} bed(s)`}
        </p>
        <span style={{display: "flex", alignItems: "center"}}>
          <StarIcon size="1rem" color="#EB5757" style={{marginRight: "0.2rem"}} />
          {stars}
        </span>
      </StayDetails>
      <StayTitle>{title}</StayTitle>
    </StayContainer>
  );
};

export default Stay;
