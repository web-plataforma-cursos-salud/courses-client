import React from "react";
import dayjs from "dayjs";
import { Formik } from "formik";
import { DateField } from "@mui/x-date-pickers/DateField";
import {
  TextField,
  Card,
  CardContent,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  CircularProgress,
} from "@mui/material";
import { handleSubmit } from "./handleSubmit";

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
        birthday_date: dayjs(),
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, isSubmitting, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Card variant="outlined">
            <CardContent className="grid grid-cols-2 gap-2">
              <TextField
                label="Nombre"
                variant="filled"
                placeholder="Ingresa tu nombre"
                type="text"
                onChangeCapture={(e) =>
                  setFieldValue("first_name", e.target.value)
                }
                value={values.first_name}
              />
              <TextField
                label="Apellido"
                variant="filled"
                placeholder="Ingresa tu apellido"
                type="text"
                onChangeCapture={(e) =>
                  setFieldValue("last_name", e.target.value)
                }
                value={values.last_name}
              />
              <TextField
                label="Nombre de usuario"
                variant="filled"
                placeholder="Elige un nombre de usuario"
                type="text"
                onChangeCapture={(e) =>
                  setFieldValue("username", e.target.value)
                }
                value={values.username}
              />
              <TextField
                label="Correo Electrónico"
                variant="filled"
                placeholder="ejemplo@correo.com"
                type="email"
                onChangeCapture={(e) => setFieldValue("email", e.target.value)}
                value={values.email}
              />
              <FormControl fullWidth>
                <InputLabel id="gender">Genero</InputLabel>
                <Select
                  labelId="gender-simple-select-label"
                  id="gender-simple-select"
                  label="Genero"
                  value={values.gender}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                >
                  <MenuItem value="male">Hombre</MenuItem>
                  <MenuItem value="female">Mujer</MenuItem>
                  <MenuItem value="other">No especificar</MenuItem>
                </Select>
              </FormControl>
              <DateField
                label="Fecha de nacimiento"
                defaultValue={dayjs()}
                value={values.birthday_date}
                format="DD-MM-YYYY"
                onChange={(e) => setFieldValue("birthday_date", e)}
              />
              <TextField
                id="password"
                label="Contraseña"
                variant="filled"
                placeholder="Ingresa tu contraseña"
                type="password"
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
              />
              <TextField
                id="confirm-password"
                label="Repita la contraseña"
                variant="filled"
                placeholder="Confirma tu contraseña"
                type="password"
                value={values.password_confirm}
                onChange={(e) =>
                  setFieldValue("password_confirm", e.target.value)
                }
              />
              <Button
                variant="contained"
                className="col-span-full"
                type="submit"
                size="large"
                disabled={
                  isSubmitting || values.password !== values.password_confirm
                }
              >
                {isSubmitting ? <CircularProgress size={24} /> : "Registrar"}
              </Button>
            </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};
