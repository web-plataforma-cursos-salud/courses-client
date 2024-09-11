import React from "react";
import {
  TextField,
  Card,
  CardContent,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import dayjs from "dayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

export const RegisterUser = () => {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirm: "",
        gender: "",
        username: "",
        birthday_date: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card variant="outlined">
            <CardContent className="grid grid-cols-2 gap-2">
              <TextField
                id="nombre"
                label="Nombre"
                variant="filled"
                placeholder="Ingresa tu nombre"
                type="text"
              />
              <TextField
                id="apellido"
                label="Apellido"
                variant="filled"
                placeholder="Ingresa tu apellido"
                type="text"
              />
              <TextField
                id="username"
                label="Nombre de usuario"
                variant="filled"
                placeholder="Elige un nombre de usuario"
                type="text"
              />
              <TextField
                id="email"
                label="Correo Electrónico"
                variant="filled"
                placeholder="ejemplo@correo.com"
                type="email"
              />
              <FormControl fullWidth>
                <InputLabel id="gender">Genero</InputLabel>
                <Select
                  labelId="gender-simple-select-label"
                  id="gender-simple-select"
                  value="male"
                  label="Genero"
                  onChange={() => {}}
                >
                  <MenuItem value="male">Hombre</MenuItem>
                  <MenuItem value="female">Mujer</MenuItem>
                  <MenuItem value="other">No especificar</MenuItem>
                </Select>
              </FormControl>
              <DateField label="Fecha de nacimiento" defaultValue={dayjs()} />
              <TextField
                id="password"
                label="Contraseña"
                variant="filled"
                placeholder="Ingresa tu contraseña"
                type="password"
              />
              <TextField
                id="confirm-password"
                label="Repita la contraseña"
                variant="filled"
                placeholder="Confirma tu contraseña"
                type="password"
              />
              <Button variant="contained" className="col-span-full">
                Registrar
              </Button>
            </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};
