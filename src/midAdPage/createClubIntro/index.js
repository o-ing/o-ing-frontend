import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { useDispatch } from "react-redux";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import { actions } from "../../state/club/minAd";
import { Button } from "antd";

const CreateClubIntro = () => {
  const dispatch = useDispatch();
  const editRef = useRef();

  const handleClick = useCallback(() => {
    const editor = editRef.current.getInstance();
    dispatch(actions.fetchClubIntro({ description: editor.getHTML() }));
  }, [dispatch]);

  return (
    <TopWrapper>
      <Editor height={"80%"} ref={editRef} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
      <StyledButton onClick={handleClick}>저장</StyledButton>
    </TopWrapper>
  );
};
export default CreateClubIntro;

const TopWrapper = styled.div`
  margin-top: 82px;
  height: 100vh;
`;
const StyledButton = styled.button`
  background-color: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  outline: none;
  border: 0;
  width: 100px;
  height: 30px;
`;
