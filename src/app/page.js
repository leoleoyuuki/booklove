export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 overflow-x-hidden">
      {/* Header simples com logo menor */}
      <header className="py-4 bg-gray-800 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold text-pink-400">BookLove</h1>
        </div>
      </header>

      {/* Seção Hero aprimorada */}
      <section className="relative bg-gray-800 py-32">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-pink-400 drop-shadow-lg">
            Preserve suas memórias de amor para sempre
          </h2>
          <p className="mt-6 text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
            Crie um livro de memórias único com seus momentos mais especiais, acessível em qualquer lugar, para sempre.
          </p>
          <button className="mt-10 bg-pink-600 text-white py-4 px-10 rounded-full text-lg shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105">
            Começar Agora
          </button>
        </div>

        {/* Sombras e elementos visuais adicionais */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-10 bg-pink-400 w-40 h-40 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-10 translate-y-10 bg-pink-600 w-64 h-64 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Seção Benefícios */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-400 mb-8">Por que criar o BookLove?</h3>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-pink-400">Memórias preservadas</h4>
                <p className="mt-4 text-gray-300">
                  Mantenha seus momentos mais especiais eternamente guardados.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-pink-400">Rápido e fácil</h4>
                <p className="mt-4 text-gray-300">
                  Crie seu livro em minutos com um formulário simples.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-pink-400">Presente único</h4>
                <p className="mt-4 text-gray-300">
                  Um presente perfeito para aniversários ou datas especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-400 mb-8">Escolha seu Plano</h3>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-100">Plano Inicial</h4>
              <p className="mt-4 text-gray-300">3 memórias por R$19,90</p>
              <p className="mt-2 text-gray-300">Contagem de dias do relacionamento</p>
              <p className="mt-2 text-gray-300">Acesso por 1 ano</p>
              <button className="mt-6 bg-pink-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-pink-700">
                Escolher Plano
              </button>
            </div>
            <div className="w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg border-4 border-pink-600">
              <h4 className="text-2xl font-semibold text-gray-100">Plano Avançado</h4>
              <p className="mt-4 text-gray-300">10 memórias por R$47,90</p>
              <p className="mt-2 text-gray-300">Contagem de dias do relacionamento</p>
              <p className="mt-2 text-gray-300">Acesso vitalício</p>
              <button className="mt-6 bg-pink-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-pink-700">
                Escolher Plano
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-400 mb-8">O que os casais dizem</h3>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3">
              <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-300">"O BookLove transformou nossas memórias em um presente inesquecível!"</p>
                <cite className="block mt-4 text-gray-100 font-semibold">- Ana & João</cite>
              </blockquote>
            </div>
            <div className="w-1/3">
              <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-300">"Agora temos todas as nossas lembranças guardadas em um só lugar."</p>
                <cite className="block mt-4 text-gray-100 font-semibold">- Maria & Pedro</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 BookLove. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
