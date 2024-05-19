"use client"
import Container from '@/components/Container/Container'
import Metadata from '@/components/Utils/Metadata'
import React from 'react'

const Privacy = (): React.JSX.Element => {
  return (
    <Container>
      <Metadata seoTitle='carStore | Política de Privacidade' seoDescription='carStore - Página de Política de Privacidade'/>
      <main className="mt-10 space-y-6">
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold">Política de Privacidade da <span className="text-red-600">CarStore</span></h1>
          <p className="mt-4 text-base sm:text-lg">
            Bem-vindo à CarStore. Estamos comprometidos em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você preenche nosso formulário de contato.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">1. Dados Coletados</h2>
          <p className="mt-2 text-base sm:text-lg">
            Coletamos informações que você nos fornece ao preencher o formulário de contato. Esses dados podem incluir:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base sm:text-lg">
            <li>Nome</li>
            <li>Email</li>
            <li>Telefone</li>
            <li>Mensagem</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">2. Uso dos Dados</h2>
          <p className="mt-2 text-base sm:text-lg">
            Utilizamos os dados coletados para:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base sm:text-lg">
            <li>Entrar em contato com você em resposta à sua mensagem.</li>
            <li>Fornecer informações sobre nossos serviços e veículos disponíveis.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">3. Compartilhamento de Dados</h2>
          <p className="mt-2 text-base sm:text-lg">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">4. Segurança dos Dados</h2>
          <p className="mt-2 text-base sm:text-lg">
            Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">5. Direitos dos Titulares dos Dados</h2>
          <p className="mt-2 text-base sm:text-lg">
            Você tem direitos sobre seus dados pessoais, incluindo:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base sm:text-lg">
            <li>Direito de acesso.</li>
            <li>Direito de retificação.</li>
            <li>Direito ao apagamento.</li>
            <li>Direito à limitação do tratamento.</li>
            <li>Direito à portabilidade dos dados.</li>
            <li>Direito de oposição.</li>
            <li>Direito de retirar o consentimento.</li>
            <li>Direito de reclamação.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">6. Alterações nesta Política</h2>
          <p className="mt-2 text-base sm:text-lg">
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política em nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">7. Informações de Contato</h2>
          <p className="mt-2 text-base sm:text-lg">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-base sm:text-lg">
            <li>Endereço: Av. Presidente Vargas, 1000, Centro</li>
            <li>Belém - PA, 66017-000</li>
            <li>Telefone: (91) 1234-5678</li>
            <li>Email: contato@carstore.com.br</li>
            <li>Horário de Funcionamento: Seg-Sex 9:00 - 18:00</li>
          </ul>
        </section>
      </main>
    </Container>
  )
}

export default Privacy