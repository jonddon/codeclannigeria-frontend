import styled from 'styled-components';

export const MentorDetailsStyled = styled.div`
  .image-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 100px;
  }
  .summary {
    /* position: absolute;
    width: 350px;
    top: 280px; */
    padding: 15px;
    background: #fbfcff;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
    border-radius: 10px;
    min-height: 30rem;

    margin-top: 4.2rem;
  }
  .name {
    font-family: Nunito;
    font-style: normal;
    font-weight: 350;
    font-size: 35px;
    text-align: center;
    color: #000000;
  }
  .info {
    font-family: Nunito;
    color: #000000;
    font-size: 15px;
  }
  .goodluck {
    padding: 30px;
    text-align: center;
    font-size: 15px;
  }
  .contact {
    /* position: absolute;
    width: 697px;
    left: 400px;
    top: 280px; */
    background: #fbfcff;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
    border-radius: 10px;

    padding: 15px;
    min-height: 30rem;
  }

  .buttonContainer {
    display: flex;
  }
  .tabContainer {
    width: 100%;
    height: 385px;
    background: #fbfcff;
  }

  .nav-item > a {
    font-size: 36px;
    line-height: 49px;
    color: #000;
    &.active {
      text-decoration: underline;
    }
  }

  .mentor__about {
    font-size: 14px;
    line-height: 22px;

    /* or 157% */

    color: #000000;
  }

  /* .nav-item < a {
    color: #000;
    font-size: 36px;
    line-height: 49px;
  } */

  .tab-button {
    width: 25%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Nunito;
    font-style: normal;
    font-weight: 350;
    text-align: center;
    font-size: 25px;
    border: none;
  }
  .tab-button:hover {
    text-decoration: underline;
  }

  .tabPanel {
    height: 85%;
    background-color: grey;
    color: black;
    text-align: center;
    padding-top: 105px;
    box-sizing: border-box;
    font-size: 22px;
    display: none;
  }
  .details__container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 600px) {
    * {
      padding-top: 9px;
    }

    .details__container {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .image-container {
      width: auto;
    }

    .summary {
      padding: 15px;
    }
  }
`;
