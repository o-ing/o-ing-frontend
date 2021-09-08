import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthFormLayout from "../component/AuthFormLayout";
import { actions } from "../state";
import { phoneNumberValidator } from "../util/phoneNumberValidator";

export default function Signup() {
  const dispatch = useDispatch();

  const onFinish = ({ id, name, nickname, email, password }) => {
    dispatch(actions.fetchSignup({ id, name, nickname, email, password }));
  };

  return (
    <AuthFormLayout onFinish={onFinish}>
      <Form.Item
        label="이름"
        name="name"
        rules={[
          {
            required: true,
            message: "이름은 필수로 입력해야 합니다!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="닉네임"
        name="nickname"
        rules={[
          {
            required: true,
            message: "닉네임은 필수로 입력해야 합니다!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="이메일"
        name="email"
        rules={[
          {
            required: true,
            message: "이메일은 필수로 입력해야 합니다!",
          },
          {
            type: "email",
            message: "이메일 형식에 어긋납니다!",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[
          {
            required: true,
            message: "비밀번호는 필수로 입력해야 합니다!",
          },
          {
            min: 8,
            message: "비밀번호는 8글자 이상입력해야 합니다!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="전화번호"
        name="phoneNumber"
        rules={[
          {
            validator: phoneNumberValidator,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{ marginRight: 5 }}>
          회원가입하기
        </Button>
        또는 <Link to="/login">로그인하기</Link>
      </Form.Item>
    </AuthFormLayout>
  );
}
