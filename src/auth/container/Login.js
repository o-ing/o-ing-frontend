import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthFormLayout from "../component/AuthFormLayout";
import { actions } from "../state";
import { verifyEmail } from "../util/authVerify";

export default function Login() {
  const dispatch = useDispatch();

  const onFinish = ({ email, password }) => {
    dispatch(actions.fetchLogin(email, password));
  };

  return (
    <AuthFormLayout onFinish={onFinish}>
      <Form.Item label="이메일" name="email" rules={[{ validator: verifyEmail }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: "비밀번호는 필수로 입력해야 합니다!" }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 5 }}>
          로그인 하기
        </Button>
        또는 <Link to="/signup">회원하입 하기</Link>
      </Form.Item>
    </AuthFormLayout>
  );
}
