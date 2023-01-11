import styled from 'styled-components';

export const FeedbackBtn = styled.button`
   {
    width: 80px;
    font-size: 16px;
    font-weight: 600;
    height: 30px;
    border: 1px solid gray;
    outline: none;
    background: #c38b8b;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }

  ::before {
    position: absolute;
    content: '';
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    background: linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    animation: move 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :hover::before {
    opacity: 1;
  }

  ::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #7d7a9c;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :not(:first-of-type) {
    margin-left: 15px;
  }
`;
