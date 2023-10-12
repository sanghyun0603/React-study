import tw from "tailwind-styled-components";

export const CsBtn = tw.button<{ color: string; round: string }>`
${(props) => props.color}
  text-black
  font-bold
  py-0 px-2
  ${(props) => props.round}
  
`;
