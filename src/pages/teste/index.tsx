import { Box, TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import { createTheme } from "@mui/material";
import CardBox from "@/components/Card";
import { useState, useEffect } from "react";
import "@fontsource/roboto/400.css";

export default function Teste() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      key: Math.random(),
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState): any => [...prevState, newStudent]);
    setTimeout(() => {
      alert("O nome do(a) estudante é: " + "" + studentName);
    }, 1500);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/aledepaulaaa");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "space-between",
            gap: 1,
            alignItems: "center",
            margin: 5,
            fontFamily: "Roboto",
          }}
        >
          <h3>Lista de Presença</h3>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              position: "absolute",
              height: 80,
              width: 80,
              right: "5rem",
              gap: 1,
              marginTop: 2,
            }}
          >
            <strong>{user.name}</strong>
            <img
              style={{
                borderRadius: 5,
              }}
              src={user.avatar}
              alt="Foto de Perfil"
            />
          </Box>
          <TextField
            type="text"
            placeholder="Digite o nome..."
            onChange={(e) => setStudentName(e.target.value)}
          />
          <Button onClick={handleAddStudent} variant="contained" type="button">
            Adicionar
          </Button>
        </Box>
        {students.map(
          (student: { name: String; time: String; key: number }) => (
            <CardBox
              key={student.key}
              name={student.name}
              time={student.time}
            />
          )
        )}
      </Box>
    </>
  );
}
