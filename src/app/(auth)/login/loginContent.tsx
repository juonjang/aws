"use client";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./loginContent.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function LoginContent() {
  const schema = yup.object().shape({
    loginname: yup.string().required("ป้อน username"),
    password: yup.string().required("ป้อน รหัสผ่าน"),
  });
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {console.log(data);}

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Login
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            {...register("loginname")}
            label="LoginName"
            placeholder="UserName hosxp"
            error={errors.loginname&&<span>{errors.loginname.message}</span>}
          />
          <PasswordInput
            {...register("password")}
            label="Password"
            placeholder="Your password"
            mt="md"
            error = {errors.password&&<span>{errors.password.message}</span>}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={isSubmitting}>
            Sign in
          </Button>
        </Paper>
      </Container>
    </form>
  );
}
