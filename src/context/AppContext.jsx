
import {
  useState,
  useEffect,
  useRef,
} from "react";

import { toast } from "react-toastify";

import { AppContext } from "./AppContext.js";
import { portfolioData } from "../data/portfolioData";
import api from "../services/api";

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  const [apiGetResponse, setApiGetResponse] = useState(null);
  const [apiPostResponse, setApiPostResponse] = useState(null);

  const [apiGetLoading, setApiGetLoading] = useState(false);
  const [apiPostLoading, setApiPostLoading] = useState(false);

  const [apiGetError, setApiGetError] = useState(null);
  const [apiPostError, setApiPostError] = useState(null);

  const [apiGetStatus, setApiGetStatus] = useState("idle");
  const [apiPostStatus, setApiPostStatus] = useState("idle");

  const lastPostedLanguage = useRef(null);
  const hasFetched = useRef(false);

  // Tema ayarını uygula ve LocalStorage'a kaydet
  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Dil değişikliğini HTML'e uygula ve LocalStorage'a kaydet
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  // GET isteği: Harici API'den örnek veri al
  useEffect(() => {
    if (hasFetched.current) {
      return;
    }

    hasFetched.current = true;

    const fetchData = async () => {
      try {
        setApiGetLoading(true);
        setApiGetError(null);
        setApiGetStatus("loading");

        const response = await api.get("/posts/1");

        setApiGetResponse(response.data);
        setApiGetStatus("success");

        toast.success("Portföy verileri başarıyla yüklendi.");

        console.log("GET API yanıtı:", response.data);
      } catch (error) {
        console.error("GET isteği başarısız:", error);

        setApiGetError("Veriler yüklenirken bir sorun oluştu.");
        setApiGetStatus("error");

        toast.error("Veriler yüklenirken bir sorun oluştu.");
      } finally {
        setApiGetLoading(false);
      }
    };

    fetchData();
  }, []);

  // POST isteği: Yerel portföy verisini harici API'ye gönder
  useEffect(() => {
    if (lastPostedLanguage.current === language) {
      return;
    }

    lastPostedLanguage.current = language;

    const sendPortfolioData = async () => {
      try {
        setApiPostLoading(true);
        setApiPostError(null);
        setApiPostStatus("loading");

        const response = await api.post("/posts", {
          title: "Portfolio Data",
          body: JSON.stringify(portfolioData[language]),
          userId: 1,
        });

        setApiPostResponse(response.data);
        setApiPostStatus("success");

        toast.success("Portföy verileri başarıyla senkronize edildi.");

        console.log("POST API yanıtı:", response.data);
      } catch (error) {
        console.error("POST isteği başarısız:", error);

        setApiPostError("Senkronizasyon sırasında bir sorun oluştu.");
        setApiPostStatus("error");

        toast.error("Senkronizasyon sırasında bir sorun oluştu.");
      } finally {
        setApiPostLoading(false);
      }
    };

    sendPortfolioData();
  }, [language]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  const content = portfolioData[language];

  return (
    <AppContext.Provider
      value={{
        content,
        darkMode,
        language,
        toggleLanguage,
        toggleTheme,
        apiGetResponse,
        apiPostResponse,
        apiGetLoading,
        apiPostLoading,
        apiGetError,
        apiPostError,
        apiGetStatus,
        apiPostStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
