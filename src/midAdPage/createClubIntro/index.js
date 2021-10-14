import React from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import { Editor } from "@toast-ui/react-editor";

const CreateClubIntro = () => {
  return (
    <TopWrapper>
      클럽 인트로 적기
      <Editor plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
    </TopWrapper>
  );
};
export default CreateClubIntro;

const TopWrapper = styled.div`
  margin-top: 82px;
`;
