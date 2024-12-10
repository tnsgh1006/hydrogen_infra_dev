import { RouterProvider } from "react-router-dom"; // eslint-disable-line no-unused-vars
import { MyequipmentContext } from "./context/equipmentContext";
import { MyProvider } from "./context/menucontext";
import AppLayout from "./components/AppLayout/AppLayout";
import router from "./routes/routes";
import "./App.scss";

import React, { useState, useEffect } from "react";

export default function App() {
  // DB에서 user 정보 불러오기(API 연결 테스트)
  const [apiMessage, setApiMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/api/user")
      .then((response) => response.text())
      .then((data) => {
        console.log("API 응답:", JSON.parse(data)); // 응답 확인
        setApiMessage(data);
      })
      .catch((error) => console.error("API 연결 오류:", error));
  }, []);

  return (
    <div>
      <MyProvider>
        <MyequipmentContext>
          <RouterProvider router={router} />
        </MyequipmentContext>
      </MyProvider>
    </div>
  );
}
