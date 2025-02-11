import Footer from '../../components/Footer/Footer';
import NavigationLink from '../../components/NavigationLink/NavigationLink';

function Experience() {
  return (
    <section>
      <header className="pt-10">
        <nav className="flex space-x-6">
          <NavigationLink to="/" className="no-underline">
            Home
          </NavigationLink>
          <NavigationLink to="/projects" className="no-underline">
            Projetos
          </NavigationLink>
          <NavigationLink to="/experiences" className="no-underline">
            Experiências
          </NavigationLink>
        </nav>
      </header>
      <h1 className="font-semibold text-2xl mb-8 mt-20">minhas experiências</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="text-base font-normal">
          Na missão de criar produtos que os usuários amam e, ao longo do
          caminho, compartilhar conhecimento. Aqui está um resumo do meu
          trabalho até agora.
        </h1>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter mb-4">
          Clube Delivery
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm my-4">
          Desenvolvedora Web e Mobile
        </p>
        <ul className="list-disc pl-5">
          <li>
            Desenvolvi a interface utilizando React com TypeScript, além de
            Redux, Tailwind CSS e diversas bibliotecas, como React Icons para
            ícones, Formik para formulários, e outras.
          </li>
          <li className="mt-4">
            Estruturei o sistema para suporte a comunicação em tempo real via
            WebSocket, aumentando a eficiência no atendimento.
          </li>
          <li className="mt-4">
            Criei telas de autenticação para o aplicativo utilizando React
            Native.
          </li>
          <li className="mt-4">
            Contribuí para a escalabilidade da plataforma, resultando em um
            aumento de 20% na satisfação dos usuários.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            TypeScript
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React Native
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Redux
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Tailwind CSS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            RESTful APIs
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter mb-4">
          B4D Desenvolvimento de Sistemas
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm my-4">
          Desenvolvedora Web
        </p>
        <ul className="list-disc pl-5">
          <li>
            Desenvolvi e otimizei sistemas de fluxo de caixa e gestão de membros
            com ReactJs.
          </li>
          <li className="mt-4">
            Integrei APIs RESTful, melhorando a comunicação entre front-end e
            back-end.
          </li>
          <li className="mt-4">
            Gerenciei o estado global da aplicação utilizando Zustand.
          </li>
          <li className="mt-4">
            Validei dados com Zod, assegurando maior segurança nas verificações.
          </li>
          <li className="mt-4">
            Implementei layouts com Tailwind CSS e Material-UI, fazendo com que
            funcione em diferentes dispositivos.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            ReactJS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Zustand
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Zod
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Tailwind CSS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Material-UI
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            RESTful APIs
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Experience;
