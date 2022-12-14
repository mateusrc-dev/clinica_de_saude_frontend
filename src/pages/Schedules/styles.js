import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";

  main::-webkit-scrollbar {
    width: 15px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    border-left: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
  }
  main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 3px solid transparent;
  }
  main::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 1px solid transparent;
  }
  main {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 50px;
    gap: 10px;
    height: 100%;
    grid-area: content;
    overflow-y: auto;
    .columnOne {
      width: 350px;
      border-right: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-left: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      height: 400px;
      padding: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
      border-radius: 0px 0px 200px 10px;
      box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.5);
      h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-style: italic;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      p {
        font-size: 20px;
        font-style: italic;
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
        text-align: justify;
      }
    }
  }
`;

export const ContainerTable = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  .timeAndTitle {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .time {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 14px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 0 5px;
      border-radius: 5px 0 0 5px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      height: 100%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:last-child {
      border-radius: 0 5px 5px 0;
    }
    button svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    span {
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .modal {
    width: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    height: 100vh;
    background: rgba(212, 221, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .modalContent {
      position: relative;
      width: 100%;
      margin: 50px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px;
    }
    .modalContentOne {
      position: relative;
      width: 100%;
      margin: 50px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px;
      padding: 100px;
      p {
        margin-bottom: 50px;
        font-size: 20px;
      }
    }

    .modalContent .container {
      width: 100%;
      height: 100%;
      padding: 50px 100px;
      font-size: 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 50px;
      text-align: justify;
    }
    .modalContent .container .allDetails {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 100px;
      text-align: justify;
    }
    .modalContent .container svg {
      position: static;
      font-size: 90px;
    }
    .modalContent .close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
    }
    .modalContent .close svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 35px;
    }
    .modalContentOne .close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
    }
    .modalContentOne .close svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 35px;
    }
    .modalContent button svg {
      position: static;
    }
    .modalContent .avatar .avatarClient {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    }
    .modalContent .scheduleDetails {
      display: flex;
      flex-direction: column;
      gap: 5px;
      white-space: nowrap;
      h2 {
        margin-bottom: 20px;
        font-style: italic;
      }
    }
    .modalContent .Client h2 {
      font-style: italic;
    }
    .modalContent .client {
      margin-top: 20px;
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .modalContent .detailsClient {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .modalContent .button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .modalContent .button button {
      &:disabled {
        opacity: 0.5;
      }
    }
    .modalContent textarea {
      resize: none;
      padding: 20px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 10px;
      box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
      }
    }
    .modalContent .modalConfirm {
      margin-left: 60px;
    }
    .modalContent .modalConfirm span {
      font-style: italic;
      font-weight: bold;
    }
    .modalContent .modalConfirm .buttonsModal {
      display: flex;
      margin-top: 10px;
      gap: 20px;
    }
  }
  .none {
    display: none;
  }
  .buttons {
    display: flex;
    margin-top: 8px;
    button {
      font-size: 40px;
      background: none;
      border: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  .table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;
  }
  .table tbody td {
    padding: 5px;
    font-weight: bold;
  }
  .table tbody tr:nth-child(even) {
    background: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  .table tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  }

  .list_date {
    margin: auto;
    display: flex;
    list-style: none;
    width: 100%;
    gap: 10px;
    max-width: 500px;
  }
  .title {
    font-style: italic;
    span {
      font-size: 25px;
      font-weight: normal;
    }
  }
  .list_item {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .occupied {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    }
    .state {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
      color: blue;
    }
    button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border-radius: 5px 0px 10px 0px;
      padding: 5px;
      &:disabled {
        opacity: 0.8;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
      }
    }
    button:hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
  .list_item_active {
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      font-style: italic;
    }

    .occupied {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    }
    .state {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    }

    button {
      margin: 5px 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px 0px 10px 0px;
      font-weight: bold;
      padding: 5px;
    }
    button:hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
`;
