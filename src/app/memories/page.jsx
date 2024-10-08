"use client";
import { useEffect, useState } from "react";
import { storage } from "../../service/firebaseConfig"; // Ajuste conforme seu arquivo de configuração do Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importa o módulo de navegação do Swiper
import "swiper/swiper-bundle.css"; // Importa o estilo do Swiper

const FormularioMemorias = () => {
  const [plano, setPlano] = useState("3-memorias");
  const [memorias, setMemorias] = useState([
    { titulo: "", descricao: "", fotoURL: "", data: "" },
    { titulo: "", descricao: "", fotoURL: "", data: "" },
    { titulo: "", descricao: "", fotoURL: "", data: "" },
  ]);
  const [confirmarMenosMemorias, setConfirmarMenosMemorias] = useState(false);

  const handlePlanoChange = (e) => {
    const selecionado = e.target.value;
    setPlano(selecionado);
    if (selecionado === "10-memorias") {
      setMemorias(
        Array(10).fill({ titulo: "", descricao: "", fotoURL: "", data: "" })
      );
    } else {
      setMemorias(
        Array(3).fill({ titulo: "", descricao: "", fotoURL: "", data: "" })
      );
    }
  };

  const handleMemoriaChange = (index, field, value) => {
    const novasMemorias = [...memorias];
    novasMemorias[index][field] = value;
    setMemorias(novasMemorias);
  };

  const handleFileChange = async (index, file) => {
    if (!file) return;

    const storageRef = ref(storage, `memorias/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    handleMemoriaChange(index, "fotoURL", url); // Atualiza a URL da memória
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memCount = memorias.filter(
      (memoria) => memoria.titulo || memoria.descricao || memoria.fotoURL
    ).length;

    if (plano === "3-memorias" && memCount < 3) {
      if (
        confirmarMenosMemorias ||
        window.confirm(
          "Você está tentando continuar com menos de 3 memórias. Tem certeza que deseja prosseguir?"
        )
      ) {
        // Lógica para prosseguir com o envio dos dados
      } else {
        return; // Cancelar envio
      }
    }

    // Lógica para enviar os dados do formulário
    console.log("Enviar dados do formulário:", { plano, memorias });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-6xl flex space-x-16">
        <div className="w-3/5">
          <h1 className="text-3xl font-bold mb-4">
            Crie Seu Livro de Memórias
          </h1>

          <div className="mb-4">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="3-memorias"
                checked={plano === "3-memorias"}
                onChange={handlePlanoChange}
                className="form-radio text-pink-400"
              />
              <span className="ml-2">3 Memórias - R$19,90 (1 ano)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="10-memorias"
                checked={plano === "10-memorias"}
                onChange={handlePlanoChange}
                className="form-radio text-pink-400"
              />
              <span className="ml-2">10 Memórias - R$47,90 (Vitalício)</span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {memorias.map((memoria, index) => (
              <div
                key={index}
                className="p-4 border border-gray-700 rounded-md bg-gray-800"
              >
                <h2 className="text-lg font-semibold">Memória {index + 1}</h2>
                <input
                  type="text"
                  placeholder="Título"
                  value={memoria.titulo}
                  onChange={(e) =>
                    handleMemoriaChange(index, "titulo", e.target.value)
                  }
                  className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-pink-400 focus:ring focus:ring-pink-300"
                  required
                />
                <textarea
                  placeholder="Descrição"
                  value={memoria.descricao}
                  onChange={(e) =>
                    handleMemoriaChange(index, "descricao", e.target.value)
                  }
                  className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-pink-400 focus:ring focus:ring-pink-300"
                  rows="3"
                  required
                />
                <input
                  type="date"
                  value={memoria.data}
                  onChange={(e) =>
                    handleMemoriaChange(index, "data", e.target.value)
                  }
                  className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-pink-400 focus:ring focus:ring-pink-300"
                  required
                />
                <label className="block mt-2">
                  <span className="sr-only">Escolha um arquivo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-pink-500 file:text-white hover:file:bg-pink-600"
                  />
                </label>
              </div>
            ))}

            <p className="text-gray-400 text-sm">
              Não é obrigatório preencher todas as memórias.
            </p>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              Criar Livro de Memórias
            </button>
          </form>
        </div>

        <div className="w-2/5">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">
              Pré-visualização do Livro de Memórias
            </h2>
            <div className="mockup-browser border-base-content border">
              <div className="mockup-browser-toolbar">
                <div className="input border-base-content border">
                  https://booklove.us/
                </div>
              </div>
              <div className="border-base-content flex justify-center border-t px-4 py-16">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                >
                  {memorias.map((memoria, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <h3 className="text-lg font-bold">
                        {memoria.titulo || "Título não preenchido"}
                      </h3>
                      <p className="text-gray-300">
                        {memoria.descricao || "Descrição não preenchida"}
                      </p>
                      {memoria.data && <DynamicCountdown date={memoria.data} />}
                      {memoria.fotoURL && (
                        <img
                          src={memoria.fotoURL}
                          alt={memoria.titulo}
                          className="mt-2 rounded-md w-full h-auto shadow-md"
                        />
                      )}
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-prev custom-prev" />
                  <div className="swiper-button-next custom-next" />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DynamicCountdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const memoryDate = new Date(date);
      const difference = now - memoryDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <p className="text-gray-400">
      {`Fazem ${timeLeft.days || 0} dias, ${timeLeft.hours || 0} horas, ${
        timeLeft.minutes || 0
      } minutos e ${timeLeft.seconds || 0} segundos`}
    </p>
  );
};

export default FormularioMemorias;
